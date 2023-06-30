import React, { useEffect, useRef } from 'react'
import { Layout, Controls, TwoColumns, ControlsWrapper, ButtonWrapper } from '../../Assets/Components'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Navbar from '../../Components/Navbar/Navbar'
import UserPanel from '../../Components/UserPanel/UserPanel'
import { useState } from 'react'
import { Card, CardControls, ExerciseTitle, ExerciseDescription, CardList } from '../../Assets/Components/ExerciseCard'
import { ModalBackdrop, ControlInput, ControlLabel, ModalFormContent, Modal, ControlGroup, Modaltitle, ModalHeader, ModalFooter, TextInput, ValidationMessage } from '../../Assets/Components/Forms'
import Button from '../../Components/Buttons/Button'
import Dropdown from '../../Components/Dropdown/Dropdown'
import ExercisesService from '../../Services/ExercisesService'
import UserService from '../../Services/UserService'
import { useNavigate } from 'react-router-dom'

const RegistrationModal = ({ closeModal, exercise }) => {
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    description: '',
    inputExample: '',
    outputExample: '',
    proficiency: 0,
    instructor_id: 1 // remover depois que tiver logged state
  })
  const [validations, setValidations] = useState({
    title: '',
    description: '',
    inputExample: '',
    outputExample: '',
    proficiency: ''
  })
  const modalRef = useRef(null)
  // const navigator = useNavigate()

  const handleSubmit = async (event) => {
    let response = null

    if(formData.id > 0) {
      response = await ExercisesService.updateData(formData)

      if(response.status === 200)
        closeModal()
    }
    else {
      response = await ExercisesService.postData(formData)
  
      if(response)
        closeModal()
    }
  }

  const handleTitleChange = (event) => setFormData({ ...formData, title: event.target.value})
  const handleDescriptionChange = (event) => setFormData({ ...formData, description: event.target.value})
  const handleInputExampleChange = (event) => setFormData({ ...formData, inputExample: event.target.value})
  const handleOutputExampleChange = (event) => setFormData({ ...formData, outputExample: event.target.value})
  const handleProficiencySelect = (option) => setFormData({ ...formData, proficiency: option.value})

  // Close modal effect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target))
        closeModal()
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      exercise = null
    }
  }, [closeModal])

  // mount effect
  useEffect(() => {
    // const validateUser = async () => {
    //   const token = localStorage.getItem('userToken')

    //   if(token) {
    //     const user = await UserService.getUser()
    //     console.log(user.role)

    //     if(user.role != 2) {
    //       console.log('user role', user.role)
    //       navigator('/login')
    //     }
    //   }
    //   else
    //     navigator('/login')
    // }

    // validateUser()
    
    if(exercise.id)
      setFormData({ ...formData,
        id: exercise.id,
        title: exercise.title,
        description: exercise.description,
        inputExample: exercise.inputExample,
        outputExample: exercise.outputExample,
        proficiency: exercise.proficiency
    })
  }, [])

  const proficiencies = [
    {value: 1, text: 'Inicante'},
    {value: 2, text: 'Intermediário'},
    {value: 3, text: 'Avançado'}
  ]

  return (
    <Modal>
      <ModalBackdrop />

      <ModalFormContent ref={modalRef} modalStyle="fullHeight">

        <ModalHeader className="mb-sm">
          <Modaltitle>
            {exercise.id ? 'Editar Atividade' : 'Cadastrar Nova Atividade'}
          </Modaltitle>
        </ModalHeader>

        <ControlGroup className="mb-sm" orientation="vertical">
          <ControlLabel className="mb-sm" htmlFor="">Título:</ControlLabel>
          <ControlInput type="text" value={formData.title} onChange={handleTitleChange} />
          <ValidationMessage>{validations.title}</ValidationMessage>
        </ControlGroup>
        
        <ControlGroup className="mb-sm" orientation="vertical">
          <ControlLabel className="mb-sm" htmlFor="">Descrição:</ControlLabel>
          <TextInput rows="4" resizeable="vertical" value={formData.description} onChange={handleDescriptionChange} />
          <ValidationMessage>{validations.description}</ValidationMessage>
        </ControlGroup>

        <ControlGroup className="mb-sm" orientation="vertical">
          <ControlLabel className="mb-sm" htmlFor="">Exemplo de Entrada:</ControlLabel>
          <TextInput rows="4" resizeable="vertical" value={formData.inputExample} onChange={handleInputExampleChange}  />
          <ValidationMessage>{validations.inputExample}</ValidationMessage>
        </ControlGroup>

        <ControlGroup className="mb-sm" orientation="vertical">
          <ControlLabel className="mb-sm" htmlFor="">Exemplo de Saída:</ControlLabel>
          <TextInput rows="4" resizeable="vertical" value={formData.outputExample} onChange={handleOutputExampleChange} />
          <ValidationMessage>{validations.outputExample}</ValidationMessage>
        </ControlGroup>

        <ControlGroup className="mb-sm" orientation="horizontal" align="center">
          <ControlLabel>Definir Nivel de Proficiência:</ControlLabel>
          <Dropdown className="ml-sm" options={proficiencies} title="Selecionar" onSelect={handleProficiencySelect} />
          <ValidationMessage>{validations.proficiency}</ValidationMessage>
        </ControlGroup>
        
        <ModalFooter alignment="center">
          <ButtonWrapper>
            <Button colorType="secondary" size="md" title="Cancelar" onClick={closeModal} />
            <Button colorType="primary" size="md" title="Confirmar" onClick={handleSubmit} />
          </ButtonWrapper>
        </ModalFooter>

      </ModalFormContent>
    </Modal>
  )
}

const ExerciseManagment = () => {
  const [exercises, setExercises] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState(null)
  const navigator = useNavigate()

  // mount effect
  useEffect(() => {
    const validateUser = async () => {
      const token = localStorage.getItem('userToken')

      if(token) {
        const user = await UserService.getUser()
        console.log(user.role)

        if(user.role != 2) {
          alert('Usuário sem acesso!')
          // console.log('user role', user.role)
          navigator('/login')
        }
      }
      else
        navigator('/login')
    }

    validateUser()
    
    populate()
  }, [])
  
  const populate = async () => {
    const data = await ExercisesService.getAll()
    setExercises(data)
  }

  const deleteItem = async (exercise) => {
    let confirmation = confirm('Deseja excluir este item?')

    if(confirmation) {
      await ExercisesService.remove(exercise)
      populate()
    }
  }

  const handleOpenModal = (exercise) => {
    setSelectedExercise(exercise)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
    populate()
  }

  const handleSearchTermChange = (value) => {
    if(value) {
      let searchResult = exercises.filter(e => e.title.toLowerCase().includes(value))
      setExercises(searchResult)
    }
    else {
      populate()
    }
  }

  return (
    <>
      <Layout>
        <Navbar/ >
        <main>
          <TwoColumns className="py-sm" col1="80%" col2="20%">
            <div>
              <ControlsWrapper className="mb-sm">
                <SearchBar placeholder="Encontrar atividade por título" onChange={handleSearchTermChange}/>

                <Controls>
                  <Button colorType="primary" widthType="fluid" size="md" title="Adicionar" onClick={handleOpenModal} />
                </Controls>
              </ControlsWrapper>

              <CardList>
                {exercises && exercises.length > 0 && (exercises.map((e, index) => {
                  return (
                    <Card key={index} exercise={e}>
                      <TwoColumns col1="2fr" col2=".1fr">
                        <ExerciseTitle>{e.title}</ExerciseTitle>
                        <ButtonWrapper>
                          <Button i="faPenToSquare" onClick={() => handleOpenModal(e)} />
                          <Button i="faTrash" onClick={() => deleteItem(e)} />
                        </ButtonWrapper>
                      </TwoColumns>
                      <ExerciseDescription>{e.description}</ExerciseDescription>

                      <CardControls>

                      </CardControls>
                    </Card>
                  )
                }))}
                {!exercises || exercises.length <= 0 && (
                  <Card>Nenhuma atividade cadastrada!</Card>
                )}
              </CardList>

            </div>

            <UserPanel className="px-sm"/>
          </TwoColumns>
        </main>
      </Layout>

      {isModalOpen && (<RegistrationModal closeModal={handleCloseModal} exercise={selectedExercise} />)}
    </>
  )
}

export default ExerciseManagment
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { ExerciseOverview, EmptyOverview, OverviewTitle, OverviewSectionTitle, OverviewCodeFormated } from './ExerciseList.Styles'
import UserPanel from '../../Components/UserPanel/UserPanel'
import { ButtonWrapper, Layout, TwoColumns, ControlsTitle, Controls, ControlsWrapper } from '../../Assets/Components'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { useState, useEffect, useRef } from 'react'
import { Status, StatusWrapper, ExerciseTitle, ExerciseDescription, CardControls, Card, CardList } from '../../Assets/Components/ExerciseCard'
import Dropdown from '../../Components/Dropdown/Dropdown'
import Button from '../../Components/Buttons/Button'
import ExercisesService from '../../Services/ExercisesService'
import { useNavigate } from 'react-router-dom'

const ExerciseCard = ({ exercise, onClick, isActive }) => {

  const handleDetalhesClick = (event) => {
    onClick(exercise)
  }

  return (
    <Card active={isActive}>
      <ExerciseTitle className="mb-sm">{exercise.title}</ExerciseTitle>
      <ExerciseDescription className="mb-sm" limited>{exercise.description}</ExerciseDescription>

      <CardControls>
        <ButtonWrapper>
          <Button href={"exercise/" + exercise.id} colorType="primary" title="Tentar" />
          <Button onClick={handleDetalhesClick} colorType="secondary" title="Detalhes" />
        </ButtonWrapper>

        {exercise.status && (
          <StatusWrapper>
            <Status>{exercise.status}</Status>
          </StatusWrapper>
        )}

      </CardControls>
    </Card>
  )
}

const Overview = ({ exercise }) => {
  if (exercise) {
    return (
      <ExerciseOverview>
        <OverviewTitle>{exercise.title}</OverviewTitle>
        {/* <Status className="mb-sm">{exercise.status}</Status> */}

        <Button href={"exercise/" + exercise.id} className="mb-sm" colorType="primary" title="Tentar" />

        <OverviewSectionTitle>Descrição: </OverviewSectionTitle>
        <ExerciseDescription className="mb-sm">{exercise.description}</ExerciseDescription>

        <OverviewSectionTitle>Entrada:</OverviewSectionTitle>
        <OverviewCodeFormated className="mb-sm">{exercise.inputExample}</OverviewCodeFormated>

        <OverviewSectionTitle>Saída:</OverviewSectionTitle>
        <OverviewCodeFormated className="mb-sm">{exercise.outputExample}</OverviewCodeFormated>
      </ExerciseOverview>
    )
  }
  else {
    return (
      <ExerciseOverview>
        <EmptyOverview >Clique em detalhes para visualizar um exercicio.</EmptyOverview>
      </ExerciseOverview>
    )
  }
}

const ExerciseList = () => {
  const [exercises, setExercises] = useState([])
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const navigator = useNavigate() 

  const selectExercise = (exercise) => setSelectedExercise(exercise)

  const handleSearchTermChange = (value) => {
    if(value) {
      let searchResult = exercises.filter(e => e.title.toLowerCase().includes(value))
      setExercises(searchResult)
    }
    else 
      populate()
  }

  const handleProficiencySelected = (option) => {
    console.log('opcao', option)
    console.log('lista', exercises)

    if(option && option.value > 0 && exercises.length > 0) {
      let filteredResult = exercises.filter(e => e.proficiency == option.value)
      setExercises(filteredResult)
    }
    else 
      populate()
  }

  const proficiencies = [
    {value: 0, text: 'Sem filtro'},
    {value: 1, text: 'Inicante'},
    {value: 2, text: 'Intermediário'},
    {value: 3, text: 'Avançado'}
  ]
  
  const statuses = [
    {value: 1, text: 'Não Iniciado'},
    {value: 2, text: 'Em andamento'},
    {value: 3, text: 'Concluído'}
  ]

  // mount effect
  useEffect(() => {
    const loggedUser = localStorage.getItem('userToken')

    if(loggedUser)
      populate()
    else {
      alert('Usuário não autenticado')
      navigator('/login')
    }
  }, [])

  const populate = async () => {
    const data = await ExercisesService.getAll()
    setExercises(data)
  }

  return (
    <Layout>
      <Navbar />
      <main>
        <TwoColumns className='py-sm' col1="80%" col2="20%">
          <ControlsWrapper>
            <SearchBar onChange={handleSearchTermChange} placeholder="Encontrar atividade por título" />
            <Controls>
              <ControlsTitle>Filtros:</ControlsTitle>
              {/* <Dropdown options={statuses} title="Status"/> */}
              <Dropdown onSelect={handleProficiencySelected} options={proficiencies} title="Proficiência"/>
            </Controls>
          </ControlsWrapper>

          <UserPanel className="px-sm" />
        </TwoColumns>

        <TwoColumns col1="60%" col2="40%" fh>
          <CardList>
            {exercises && exercises.length > 0 && (exercises.map((e, index) => {
              return (
                <ExerciseCard isActive={e === selectedExercise} key={e.id} exercise={e} onClick={selectExercise} />
              )
            }))}
          </CardList>

          <Overview exercise={selectedExercise} />
        </TwoColumns>
      </main>
    </Layout>
  )
}

export default ExerciseList
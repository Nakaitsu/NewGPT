import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Layout, TwoColumns, ControlsTitle, Controls, ControlsWrapper, SearchBar, List, ExerciseOverview, Card, ExerciseDescription, ExerciseTitle, Status, CardControls, StatusWrapper, ButtonWrapper, Dropdown, DropdownMenu, DropdownItem, EmptyOverview } from './ExerciseList.Styles'
import UserPanel from '../../Components/UserPanel/UserPanel'
import { Button } from '../../Assets/Components'
import { useState, useEffect, useRef } from 'react'

const ExerciseCard = ({ exercise, onClick }) => {
  return (
    <Card>
      <ExerciseTitle className="mb-sm">{exercise.title}</ExerciseTitle>
      <ExerciseDescription className="mb-sm" limited>{exercise.description}</ExerciseDescription>

      <CardControls>
        <ButtonWrapper>
          <Button href={"exercise/" + exercise.id} colorType="primary">Tentar</Button>
          <Button onClick={() => onClick(exercise)} colorType="secondary">Detalhes</Button>
        </ButtonWrapper>

        <StatusWrapper>
          <Status>{exercise.status}</Status>
        </StatusWrapper>
        
      </CardControls>
    </Card>
  )
}

const ProficiencyFilterButton = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const dropdownRef = useRef(null)

  const handleClick = () => setIsEnabled(!isEnabled)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsEnabled(false)
    }

    if(isEnabled)
      document.addEventListener('click', handleClickOutside)
    else
      document.removeEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }

  }, [isEnabled])
  
  return (
    <Dropdown ref={dropdownRef}>
      <Button onClick={handleClick} colorType="primary">Proficiência</Button>
      <DropdownMenu className={isEnabled && "enabled"}>
        <DropdownItem href="#">Iniciante</DropdownItem>
        <DropdownItem href="#">Intermediário</DropdownItem>
        <DropdownItem href="#">Avançado</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

const StatusFilterButton = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const dropdownRef = useRef(null)

  const handleClick = () => setIsEnabled(!isEnabled)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsEnabled(false)
    }

    if(isEnabled)
      document.addEventListener('click', handleClickOutside)
    else
      document.removeEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }

  }, [isEnabled])

  return (
    <Dropdown ref={dropdownRef}>
      <Button onClick={handleClick} colorType="primary">Status</Button>
      <DropdownMenu className={isEnabled && "enabled" }>
        <DropdownItem href="#">Não iniciado</DropdownItem>
        <DropdownItem href="#">Iniciado</DropdownItem>
        <DropdownItem href="#">Concluído</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

const Overview = ({ exercise }) => {
  if(exercise) {
    return (
      <ExerciseOverview>
        <ExerciseTitle className="mb-sm">{exercise.title}</ExerciseTitle>
        <Status className="mb-sm">{exercise.status}</Status>
        <Button href={"exercise/" + exercise.id} className="mb-sm" colorType="primary">Tentar</Button>
        <ExerciseDescription className="mb-sm">{exercise.description}</ExerciseDescription>
      </ExerciseOverview>
    )
  }
  else{
    return (
      <ExerciseOverview>
        <EmptyOverview >Clique em detalhes para visualizar um exercicio.</EmptyOverview>
      </ExerciseOverview>
    )
  }
}

const ExerciseList = () => {
  const [exercises, setExercises] = useState([])
  const [exerciseFocused, setExerciseFocused] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const searchbarRef = useRef(null)

  useEffect(() => {
    if(exercises) {
      let content = exercises.filter(e => e.title.includes(searchTerm) || e.description.includes(searchTerm))
      console.log(content)
      setExercises(content)
    }
  }, [searchTerm])

  const handleSearchTermChange = (event) => setSearchTerm(event.target.value)
  const focusExercise = (exercise) => setExerciseFocused(exercise)

  const arrExercise = [
    {id: 1,title: "01", description: "tut", status: "não iniciado"},
    {id: 2,title: "02", description: "tutasd", status: "não iniciado"},
    {id: 3,title: "03", description: "tute21r", status: "não iniciado"}
  ]

  useEffect(() => {
    setExercises(arrExercise)
  }, [])
  
  return (
    <>
      <Layout>
        <Navbar />
        <main>
          <TwoColumns className='py-sm' col1="80%" col2="20%">
            <ControlsWrapper>
              <div>
                <SearchBar type="search" ref={searchbarRef} value={searchTerm} onChange={handleSearchTermChange} placeholder="Encontrar atividade por título" />
              </div>
              <Controls>
                <ControlsTitle>Filtros:</ControlsTitle>
                <StatusFilterButton />
                <ProficiencyFilterButton />
              </Controls>
            </ControlsWrapper>

            <UserPanel className="px-sm" />
          </TwoColumns>

          <TwoColumns col1="60%" col2="40%" fh>            
            <List>
              {exercises && exercises.length > 0 && (exercises.map((e, index) => {
                return (
                  <ExerciseCard key={index} exercise={e} onClick={focusExercise} />
                )
              }))}
            </List>

            <Overview exercise={exerciseFocused} />
          </TwoColumns>
        </main>
      </Layout>
    </>
  )
}

export default ExerciseList
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Layout, TwoColumns, ControlsTitle, Controls, ControlsWrapper, SearchBar, ListStyled, ExerciseOverviewStyled } from './ExerciseList.Styles'
import UserPanel from '../../Components/UserPanel/UserPanel'

const List = () => { 
  return (
    <ListStyled>
      <div>taref 1</div>
      <div>taref 2</div>
      <div>taref 3</div>
    </ListStyled>
  )
}

const ExerciseOverview = () => {
  return (
    <ExerciseOverviewStyled>
      overview aqui
    </ExerciseOverviewStyled>
  )
}

const ExerciseList = () => {
  return (
    <>
    <Layout>
      <Navbar />
      <main>
        <TwoColumns className='py-sm' col1="80%" col2="20%">
          <ControlsWrapper>
            <div>
              <SearchBar type="search"/>
            </div>
            <Controls>
              <ControlsTitle>Filtros:</ControlsTitle>
              <button>Status</button>
              <button>Proficiência</button>
            </Controls>
          </ControlsWrapper>

          <UserPanel className="px-sm" />
        </TwoColumns>

        <TwoColumns col1="60%" col2="40%" fh>
          <List />
          <ExerciseOverview />
        </TwoColumns>
      </main>
    </Layout>
    </>
  )
}

export default ExerciseList
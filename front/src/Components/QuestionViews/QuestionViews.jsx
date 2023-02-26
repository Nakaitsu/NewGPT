import React from 'react'
import { ViewLink, Views, ViewsContainer} from './QuestionViews.Styles'

const QuestionViews = () => {
  return (
    <ViewsContainer>
      <Views>
        <ViewLink href="#"className='active'>Questão</ViewLink>
        <ViewLink href="#">Histórico</ViewLink>
        <ViewLink href="#">Forum</ViewLink>
      </Views>
    </ViewsContainer>
  )
}

export default QuestionViews
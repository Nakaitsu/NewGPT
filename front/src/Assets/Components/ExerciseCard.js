import styled from "styled-components"
import { variant } from "styled-system"

export const Card = styled.div`
  padding: 20px;
  border-radius: 16px;
  background-color: var(--dm-grey-lighten);
  border: 1px solid transparent;

  ${variant({
    prop: 'active',
    variants: {
      true: { borderColor: 'var(--dm-yellow)' },
      false: { borderColor: 'trasparent' }
    }
  })}
`

export const ExerciseTitle = styled.span`
  display: block;
  font-size: 1.3rem;
  font-weight: bold;
`

export const ExerciseDescription = styled.p`

`

export const CardControls = styled.div`
  display: grid;
  grid-template-columns: .75fr .25fr;
`

export const Status = styled.span`
  display: flex;
  column-gap: .3em;

  &::before {
    content: ' ';
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: gray;
  }
`

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .75rem;
  padding: 0 2rem;
`
import styled, { keyframes } from "styled-components";
import { ExerciseOverview } from "../ExerciseList/ExerciseList.Styles";
import { variant } from "styled-system";
import { Icon } from "../../Assets/Components";

const LoadingLoop = keyframes`
  0% { 
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-areas: 
    'a b'
    'a b';
  grid-template-columns: 40% 1fr;
  height: 100%;
  grid-column-gap: 2%
`

export const InstructionsArea = styled(ExerciseOverview)`
  border-radius: 0 var(--default-radius) 0 0;
  grid-area: a;
`

export const EditorArea = styled.div`
  grid-area: b;
  display: flex;
  flex-direction: column
`

export const Console = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dm-darken);

  &:hover {
    cursor: pointer;
  }

  ${variant({
    prop: 'open',
    variants: {
      true: { 
        display: 'flex',
        height: '25%'
      }
    }
  })}
`

export const ConsoleHeader = styled.div`
  background-color: #040404;
  padding: .35em .785rem;
`

export const ConsoleTitle = styled.span`
  display: block;
  color: white;
  font-size: .95rem;
`

export const ConsoleMessage = styled.p`
  display: block;
  flex: 1;  
  font-family: consolas;
  padding: .55em .785rem;
  overflow-Y: auto;
  background-color: var(--text-dark);
  color: var(--text-light);
`

export const ConsoleLoading = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${Icon} {
    animation: ${LoadingLoop} 1.2s linear infinite;
  }
`

export const Editor = styled.form`
  display: grid;
  flex: 1;
  grid-template-rows: .2fr 2fr;
  background-color: blue;
`

export const EditorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .3em .45em;
  background-color: var(--dm-purple-darken);
`

export const EditorBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dm-grey);
  resize: none;
  overflow-Y: auto;

  &:focus {
    outline: none;
  }

  * {
    flex: 1;
  }
`
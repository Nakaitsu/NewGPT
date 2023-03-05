import styled from 'styled-components'

export const QuestionContent = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: rgba(137, 220, 240, 0.15);
  overflowY: auto;
`

export const InstructionContainer = styled.div`
  flex-basis: 320px;
  flex: 1;
  padding: 2.3em 1.8em;

  h2 {
    margin-bottom: .875em;
    font-size: 1.8rem;
    color: var(--primary);
  }
`
  
export const CodeEditorContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  flex-basis: 380px;
  max-width: 60%;
`

export const Editor = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .CodeMirror {
    height: 450px !important;
  }
`

export const CodeArea = styled.textarea`
  display: block;
  font-size: 1rem;
  padding: .5em;
  background-color: #0f0f0f;
  color: white;
  width: 100%;

  &:focus{
    outline: none;
  }
`

export const EditorForm = styled.form`
  width: 100%;
  max-height: 100%;
  min-height: calc(570.75px - 50px);

  display: flex;
  flex-direction: column;
`

export const EditorOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: .65rem .5rem;
  color: white;
  background-color: var(--blue-darken);
`

export const OptionsList = styled.div`

`

export const InfoSectionTitle = styled.span`
  display: block;
  font-size: 1.115rem;
  font-weight: 700;
  color: var(--cyan);
  margin-top: .55em;
  margin-bottom: .55em;
`

export const InfoText = styled.p`
  font-size: 1rem;
  margin-top: .5em;
  margin-bottom: .5em;
`

export const InfoInstructionBox = styled.div`
  font-family: monospace;

  padding: .75em;
  color: var(--blue-darken);
  // background-color: rgba(99, 228, 251, 0.4);
  background-color: var(--dm-blue);
  border-radius: 7px;

  span {
    display: block;
    color: #0f0f0f;
  }
`

export const EditorLanguageSelector = styled.select`
  padding: .175em .8em;
  font-size: .8rem;
  color: #0f0f0f;
  background-color: white;
  border-radius: 7px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

export const CodeAction = styled.button`
  padding: .3em 1em;
  color: white;
  font-size: .8rem;
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`

export const SubmitButton = styled.a`
  display: inline-block;
  padding: .35rem 1.2rem;
  font-size: 1rem;
  color: white;
  background-color: var(--green);
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    filter: brightness(0.8);
    transform: translateY(2px);
  }
`

export const Console = styled.div`
  padding: .3rem;
  max-height: 70px;
  overflowY: auto;
  background-color: #0f0f0f;
  color: white;

  span {
    color: var(--orange);
    font-weight: bold;
  }
`
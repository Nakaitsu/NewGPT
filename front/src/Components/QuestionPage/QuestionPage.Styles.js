import styled from 'styled-components'

export const QuestionContent = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: rgba(137, 220, 240, 0.15);
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
  flex: 1;
  flex-basis: 380px;
  height: 100%;
`

export const Editor = styled.div`
  width: 100%:
  height: 100%;
`

export const EditorForm = styled.form`

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

export const InfoSectionTitle = styled.span`
  display: block;
  font-size: 1.115rem;
  font-weight: 700;
  color: #0f0f0f;
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
  background-color: rgba(99, 228, 251, 0.4);
  border-radius: 7px;
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
  padding: .35rem 1.2rem;
  font-size: 1rem;
  color: white;
  background-color: var(--green);
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }
`
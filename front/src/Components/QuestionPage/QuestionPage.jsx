import React, { useEffect, useRef, useState } from 'react'
import QuestionViews from './../QuestionViews/QuestionViews';
import { Container, ContentBlock } from './../../Assets/Components/index';
import Header from './../Header/Header';
import { CodeEditorContainer, InfoInstructionBox, EditorForm, InfoSectionTitle, InfoText, InstructionContainer, QuestionContent, EditorOptionsContainer, EditorLanguageSelector, SubmitButton, CodeAction, Editor } from './QuestionPage.Styles';

// import './../../../public/dist/codemirror-5.65.12/theme/ayu-dark.css'

const initializeEditor = (target) => {
  // const codeEditor = CodeMirror.fromTextArea(textareaRef, {
  //   mode: 'javascript',
  //   theme: 'ayu-dark',
  //   lineNumbers: true,
  //   autoCloseBrackets: true,
  //   electricChars: true
  // })
}

const QuestionPage = () => {
  const [language, setLanguage] = useState('')
  const textareaRef = useRef(null)

  // useEffect(() => {
  //   initializeEditor(textareaRef)
  // }, [])

  const handleLanguageSelect = (event) => {
    setLanguage(event.target.value)
  }
  
  return (
    <>
      <Header />

      <ContentBlock>
        <Container>
          <QuestionViews />
        </Container>
      </ContentBlock>

      <QuestionContent>
        <InstructionContainer>
          <h2>Instruções</h2>

          <InfoSectionTitle>Resumo</InfoSectionTitle>
          <InfoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam, in esse! Repellendus, perferendis nihil veritatis ad debitis quo sequi rem
            voluptatibus quisquam quam exercitationem enim nemo iste eos accusantium obcaecati?
          </InfoText>
          <InfoText>
            Debitis quo sequi rem
            voluptatibus quisquam quam exercitationem enim nemo iste eos
          </InfoText>

          <InfoSectionTitle>Input</InfoSectionTitle>
          <InfoInstructionBox>
            2  <br />
            10 <br />
            3  <br />
            26
          </InfoInstructionBox>

          <InfoSectionTitle>Output</InfoSectionTitle>
          <InfoInstructionBox>
            41
          </InfoInstructionBox>
        </InstructionContainer>

        <CodeEditorContainer>
          <EditorForm>
            <EditorOptionsContainer>
              <EditorLanguageSelector onChange={handleLanguageSelect} name="language" id="language">
                <option value="javascript">Javascript</option>
                <option value="c#">C#</option>
                <option value="python">Python</option>
                <option value="pascal">Pascal</option>
              </EditorLanguageSelector>

              <div className="opcoes-list">
                <CodeAction >Expand</CodeAction>
                <CodeAction >Hint</CodeAction>
                <CodeAction id="btn-copy">Copy</CodeAction>
                <CodeAction >Reset</CodeAction>

                <SubmitButton id="btn-submit">Enviar</SubmitButton>
              </div>
            </EditorOptionsContainer>

            <Editor>
              <textarea ref={textareaRef} name="code" id="code" cols="60" rows="30"></textarea>
            </Editor>
            
            <div className="resultado" id="resultado">
              Console:
            </div>
          </EditorForm>
        </CodeEditorContainer>
      </QuestionContent >
    </>
  )
}

export default QuestionPage
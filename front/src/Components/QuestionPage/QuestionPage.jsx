import React, { useEffect, useRef, useState } from 'react'
import QuestionViews from './../QuestionViews/QuestionViews';
import { Container, ContentBlock } from './../../Assets/Components/index';
import Header from './../Header/Header';
import { CodeEditorContainer, InfoInstructionBox, EditorForm, InfoSectionTitle, InfoText, InstructionContainer, QuestionContent, EditorOptionsContainer, EditorLanguageSelector, SubmitButton, CodeAction, Editor, CodeArea } from './QuestionPage.Styles';

// import CodeMirror from '../../Assets/dist/codemirror-5.65.12/lib/codemirror';

// import CodeMirror from 'codemirror'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/addon/edit/closebrackets'
// import 'codemirror/theme/ayu-dark.css'

const QuestionPage = () => {
  // const [editor, setEditor] = useState(null)
  const [language, setLanguage] = useState('')
  const textareaRef = useRef(null)
  const [consoleOpen, setConsoleOpen] = useState(false)
  const [consoleText, setConsoleText] = useState('')
  const [loadingResponse, setLoadingResponse] = useState(false)
  const [loadInterval, setLoadInterval] = useState(null)
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    if (loadingResponse) {
      setConsoleOpen(true);
      setConsoleText('');
      setDotCount(0);

      setLoadInterval(setInterval(() => {
        setConsoleText(consoleText => consoleText + '.');
        setDotCount(count => count + 1);
      }, 100));
    } else {
      clearInterval(loadInterval);
      setLoadInterval(null);
    }

    //   if(!!editor) {
    //     const initializeEditor = () => {
    //       const codeEditor = CodeMirror.fromTextArea(textareaRef.current, {
    //         mode: 'javascript',
    //         theme: 'ayu-dark',
    //         lineNumbers: true,
    //         autoCloseBrackets: true,
    //         electricChars: true
    //       })

    //       setEditor(codeEditor)
    //     }

    //     initializeEditor()
    //   }
  }, [loadingResponse])

  useEffect(() => {
    if (dotCount === 4) {
      setConsoleText('');
      setDotCount(0);
    }
  }, [dotCount]);

  const handleLanguageSelect = (event) => {
    setLanguage(event.target.value)
  }

  const handleActionClick = async (event) => {
    event.preventDefault()
    const buttonId = event.target.id

    if (buttonId) {
      if (buttonId === 'copy') {
        // const sourceCode = editor.getValue()
        // await navigator.clipboard.writeText(sourceCode)
      }
      else if (buttonId === 'submit') {
        setLoadingResponse(true)
        // const sourceCode = editor.getValue()
        const sourceCode = textareaRef.current.value

        fetch('http://localhost:5000', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ code: sourceCode, language })
        })
          .then(data => data.json())
          .then(result => {
            setConsoleText(result.bot)
            setLoadingResponse(false)
          })
          .catch(err => setConsoleText(err))
      }
    }
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
                <option value="java">Java</option>
                <option value="c++">C++</option>
                <option value="python">Python</option>
              </EditorLanguageSelector>

              <div className="opcoes-list" onClick={handleActionClick}>
                <CodeAction id="expand">Expand</CodeAction>
                <CodeAction id="hint">Hint</CodeAction>
                <CodeAction id="copy">Copy</CodeAction>
                <CodeAction id="reset">Reset</CodeAction>

                <SubmitButton id="submit">Enviar</SubmitButton>
              </div>
            </EditorOptionsContainer>

            <Editor>
              <CodeArea ref={textareaRef} name="code" id="code" cols="60" rows="24" spellCheck={false} autoComplete={false}></CodeArea>
            </Editor>

            {consoleOpen && (<div className="resultado" id="resultado">
              Console: {consoleText}
            </div>)}
          </EditorForm>
        </CodeEditorContainer>
      </QuestionContent >
    </>
  )
}

export default QuestionPage
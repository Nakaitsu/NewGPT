import React, { useEffect, useRef, useState } from 'react'
import QuestionViews from './../QuestionViews/QuestionViews';
import { Container, ContentBlock } from './../../Assets/Components/index';
import Header from './../Header/Header';
import { CodeEditorContainer, InfoInstructionBox, EditorForm, InfoSectionTitle, InfoText, InstructionContainer, QuestionContent, EditorOptionsContainer, EditorLanguageSelector, SubmitButton, CodeAction, Editor, CodeArea, Console, OptionsList } from './QuestionPage.Styles';

import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/edit/closebrackets'

import 'codemirror/theme/ayu-dark.css'

import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'

const QuestionPage = ({ question }) => {
  const [hasEditor, setHasEditor] = useState(false)
  const [language, setLanguage] = useState('')
  const textareaRef = useRef(null)
  const [consoleOpen, setConsoleOpen] = useState(false)
  const [consoleText, setConsoleText] = useState('')
  const [loadingResponse, setLoadingResponse] = useState(false)
  const [loadInterval, setLoadInterval] = useState(null)
  const [dotCount, setDotCount] = useState(0);

  const [editor, setEditor] = useState(null)
  let codeMirrorEditor = null

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

    if (!codeMirrorEditor && !hasEditor) {
      const initializeEditor = () => {
        const codeEditor = CodeMirror.fromTextArea(textareaRef.current, {
          theme: 'ayu-dark',
          lineNumbers: true,
          autoCloseBrackets: true,
          electricChars: true,
          scrollbarStyle: 'native'
        })

        codeMirrorEditor = codeEditor
        setHasEditor(true)
        setEditor(codeEditor)
      }

      initializeEditor()
    }
  }, [loadingResponse])

  useEffect(() => {
    if (dotCount === 4) {
      setConsoleText('');
      setDotCount(0);
    }
  }, [dotCount]);

  const handleLanguageSelect = async (event) => {
    const language = event.target.value
    setLanguage(language)

    if(language == 'java')
      editor.setOption('mode', 'text/x-java')
    else if(language == 'c++') 
      editor.setOption('mode', 'text/x-c++src')
    else if(language == 'python') 
      editor.setOption('mode', 'python')
  }

  const handleActionClick = async (event) => {
    event.preventDefault()
    const buttonId = event.target.id

    if (buttonId) {
      if (buttonId === 'expand') {
        initializeEditor()
      }
      else if (buttonId === 'copy') {
        // const sourceCode = editor.getValue()
        // await navigator.clipboard.writeText(sourceCode)
        // }else if (buttonId === 'hint'){
        //   setLoadingResponse(true)
        //   const sourceCode = texareaRef.current.value
      } else if (buttonId === 'submit' || buttonId === 'hint' || buttonId === "output") {
        setLoadingResponse(true)
        const sourceCode = editor.getValue()
        // const sourceCode = textareaRef.current.value
        fetch('http://localhost:5000', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ code: sourceCode, language, question, type: buttonId })
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
          {question}

          <InfoSectionTitle>Saída</InfoSectionTitle>
          <InfoInstructionBox>
          <span>
          INPUT
          JOAO
          500.00
          1230.30

          OUTPUT
          TOTAL = R$ 684.54
          </span>
          <hr />
          <span>
          PEDRO
          700.00
          0.00

          TOTAL = R$ 700.00
          </span>
          <hr />
          <span>
          MANGOJATA
          1700.00
          1230.50

          TOTAL = R$ 1884.58
          </span>
          </InfoInstructionBox>
        </InstructionContainer>

        <CodeEditorContainer>
          <EditorForm>
            <EditorOptionsContainer>
              <OptionsList>
                <EditorLanguageSelector onChange={handleLanguageSelect} name="language" id="language">
                  <option value="">Escolher Linguagem</option>
                  <option value="java">Java</option>
                  <option value="c++">C++</option>
                  <option value="python">Python</option>
                </EditorLanguageSelector>
              </OptionsList>

              <OptionsList className="opcoes-list" onClick={handleActionClick}>
                <CodeAction id="expand">Expandir</CodeAction>
                <CodeAction id="copy">Copiar</CodeAction>
                <CodeAction id="hint">Dica</CodeAction>
                <CodeAction id="reset">Resetar</CodeAction>
                <CodeAction id="output">Saida</CodeAction>

                <SubmitButton id="submit">Enviar</SubmitButton>
              </OptionsList>
            </EditorOptionsContainer>

            <Editor>
              <CodeArea ref={textareaRef} name="code" id="code"
                cols="60" rows="24" spellCheck={false} autoComplete={false}>
              </CodeArea>

              {consoleOpen && (<Console id="resultado">
                <span>Console: </span> {consoleText}
              </Console>)}
            </Editor>

          </EditorForm>
        </CodeEditorContainer>
      </QuestionContent >
    </>
  )
}

export default QuestionPage;
import React, { useEffect, useState } from 'react'
import { ButtonWrapper, Icon, TwoColumns } from '../../Assets/Components'
import UserPanel from '../../Components/UserPanel/UserPanel'
import Button from '../../Components/Buttons/Button'
import { Console, InstructionsArea, EditorArea, Editor, Content, EditorHeader, EditorBody, ConsoleHeader, ConsoleTitle, ConsoleMessage, ConsoleLoading } from './Exercise.Styles'
import { OverviewCodeFormated, OverviewSectionTitle, OverviewTitle } from '../ExerciseList/ExerciseList.Styles'
import Dropdown from '../../Components/Dropdown/Dropdown'
import CodeMirrorEditor from '../../Components/CodeMirror/CodeMirrorEditor'
import ExercisesService from '../../Services/ExercisesService'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTerminal, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faTerminal, faSpinner)

const Exercise = () => {  
  const { id } = useParams()
  const [solution, setSolution] = useState({
    language: '',
    question: '',
    code: ''
  })
  const [editor, setEditor] = useState(null)
  const [exercise, setExercise] = useState({})
  const [consoleMessage, setConsoleMessage] = useState('')
  const [isConsoleOpen, setIsConsoleOpen] = useState(false)
  const [consoleLoading, setConsoleLoading] = useState(false)

  const initializeEditorInstance = (editor) => setEditor(editor)
  const performApiRequest = async (promise) => {
    setConsoleLoading(true)
    setSolution({ 
      ...solution,
      code: editor.getValue(), 
    })

    let result = await promise(solution)

    setConsoleLoading(false)
    setConsoleMessage(result.bot)
    setIsConsoleOpen(true)
  }

  const handleConsoleClick = (event) => setIsConsoleOpen(!isConsoleOpen)
  const handleLanguageSelect = (option) => setSolution({ ...solution, language: option.value})
  const handleEditorHeaderClick = async (button) => { 
    const action = button.id

    switch(action) {
      case 'copy':
        const code = editor.getValue()
        await navigator.clipboard.writeText(code)
        break
      case 'reset':
        editor.setValue('')
        break
      case 'hint':
        // setConsoleLoading(true)
        // setSolution({ 
        //   ...solution,
        //   code: editor.getValue(), 
        // })

        // let result = await ExercisesService.getHint(solution)
        performApiRequest(ExercisesService.getHint)

        // setConsoleLoading(false)
        // setConsoleMessage(result.bot)
        // setIsConsoleOpen(true)
        break
      case 'output':
        performApiRequest(ExercisesService.getSolutionOutput)
        break
      case 'submit':
        performApiRequest(ExercisesService.submitSolution)
        break
    }
  }

  useEffect(() => {
    if(consoleLoading)
      setIsConsoleOpen(true)
  }, [consoleMessage, consoleLoading])
  
  // mount effect
  useEffect(() => {
    if(!exercise.id) {
      const getExercise = async () => {
        let exercise = await ExercisesService.getById(id)
        setSolution({ ...solution, question: exercise.description })
        setExercise(exercise)
    
        if(!exercise)
          alert('Sem atividade, experimente clicar em uma atividade da lista.')
      }
      
      getExercise()
    }
  }, [])

  // language change effect
  useEffect(() => {
    if(solution.language === 'java')
      editor.setOption('mode', 'text/x-java')
    else if(solution.language === 'c++')
      editor.setOption('mode', 'text/x-c++src')
    else if(solution.language === 'python')
      editor.setOption('mode', 'python')
  }, [solution.language])

  const languages = [
    {value: 'java', text: 'Java'},
    {value: 'c++', text: 'C++'},
    {value: 'python', text: 'Python'}
  ]
  
  return (
    <main>
      <TwoColumns className="p-md" col1="2fr" col2=".1fr">
        <ButtonWrapper>
          <Button href="/" iconSide="left" i="faArrowLeft" title="Voltar" size="md" />
        </ButtonWrapper>
        <UserPanel className="px-sm"/>
      </TwoColumns>

      <Content>
        
        <InstructionsArea>
          <OverviewTitle>{exercise.title}</OverviewTitle>

          <section className="mb-sm">
            <OverviewSectionTitle>Descrição</OverviewSectionTitle>
            <p>{exercise.description}</p>
          </section>

          <section className="mb-sm">
            <OverviewSectionTitle>Entrada</OverviewSectionTitle>
            <OverviewCodeFormated>
              {exercise.inputExample ? exercise.inputExample : 'Esse atividade não possui parâmetros de entrada!'}
            </OverviewCodeFormated>
          </section>

          <section className="mb-sm">
            <OverviewSectionTitle>Saída</OverviewSectionTitle>
            <OverviewCodeFormated>{exercise.outputExample}</OverviewCodeFormated>
          </section>
        </InstructionsArea>

        <EditorArea>
          <Editor>

            <EditorHeader>
              <Dropdown size="sm" title="Selecionar Linguagem" options={languages} onSelect={handleLanguageSelect} />

              <ButtonWrapper id="div boladona">
                <Button id="hint" onClick={handleEditorHeaderClick} i="faCircleQuestion" toolTip="Obter uma dica" />
                <Button id="copy" onClick={handleEditorHeaderClick} i="faFile" toolTip="Copiar código" />
                <Button id="reset" onClick={handleEditorHeaderClick} i="faClockRotateLeft" toolTip="Limpar editor" />
                <Button id="output" onClick={handleEditorHeaderClick} title="Saída" colorType="purple" size="sm"/>
                <Button id="submit" onClick={handleEditorHeaderClick} title="Enviar" colorType="yellow" size="sm" />
              </ButtonWrapper>
            </EditorHeader>

            <EditorBody>
              <CodeMirrorEditor getEditor={initializeEditorInstance} />
            </EditorBody>
            
          </Editor>

          <Console open={isConsoleOpen} onClick={handleConsoleClick}>
            <ConsoleHeader>
              <ConsoleTitle>
                <Icon left>
                  <FontAwesomeIcon icon="terminal" size="sm" />
                </Icon>
                Console
              </ConsoleTitle>
            </ConsoleHeader>
            {(isConsoleOpen && !consoleLoading) && (<ConsoleMessage open={isConsoleOpen}>{consoleMessage}</ConsoleMessage>)}
            {(consoleLoading && isConsoleOpen) && (<ConsoleLoading>
              <Icon>
                <FontAwesomeIcon icon="spinner" size="2x" />
              </Icon>
            </ConsoleLoading>)}
          </Console>

        </EditorArea>

      </Content>
    </main>
  )
}

export default Exercise
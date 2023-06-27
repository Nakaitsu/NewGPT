import React, { useEffect, useRef, useState } from 'react'
import CodeMirror from 'codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/edit/closebrackets'

import 'codemirror/theme/ayu-dark.css'

import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'

const CodeMirrorEditor = ({ getEditor }) => {
  const editorRef = useRef(null)
  const [editor, setEditor] = useState(null)

  // editor initialized effect
  useEffect(() => {
    getEditor(editor)
  }, [editor])

  // textarea renders effect
  useEffect(() => {
    const InitializeEditor = () => {
      const setup = {
        theme: 'ayu-dark',
        lineNumbers: true,
        autoCloseBrackets: true,
        eletricChars: true,
        scrollbarStyle: 'native'
      }
      
      const edtiorInstance = CodeMirror.fromTextArea(editorRef.current, setup)
      setEditor(edtiorInstance)
    }

    if(editorRef.current)
      InitializeEditor()
      
    // unmount effect
    return () => editorRef.current = null
  }, [editorRef.current])

  return (
    <textarea ref={editorRef} autoComplete="false" spellCheck="false"></textarea>
  )
}

export default CodeMirrorEditor
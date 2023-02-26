window.onload = () => {
  // START EDITOR
  // const codeEditor = CodeMirror.fromTextArea(document.getElementById('code'), {
  //   mode: 'javascript',
  //   theme: 'ayu-dark',
  //   lineNumbers: true,
  //   autoCloseBrackets: true,
  //   electricChars: true
  // })

  // HANDLE COPY
  // document.getElementById('btn-copy').addEventListener('click', async (event) => {
  //   event.preventDefault()
  //   const code = codeEditor.getValue()

  //   await navigator.clipboard.writeText(code)
  // })  

  // HANDLE SUBMIT
  // document.getElementById('btn-submit').addEventListener('click', async (event) => {
  //   event.preventDefault()
  //   const code = codeEditor.getValue()
  //   const language = document.getElementById('language').value
  //   const resultado = document.getElementById('resultado')

  //   fetch('http://localhost:5000', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({ code, language })
  //   })
  //   .then(data => data.json())
  //   .then(result => resultado.innerHTML = result.bot)
  //   .catch(err => resultado.innerHTML = err)
  // })
}
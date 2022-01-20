import { React, useState, useEffect } from 'react'
import './App.scss'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
  const [textState, setTextState] = useState('')

  const textAreaOnChange = (e) => {
    setTextState(e.target.value)
  }

  useEffect(() => {
    setTextState(`# h1 Heading
    \n## h2 Heading
    \n**This is bold text**
    \n__[ikari-shirei](https://github.com/ikari-shirei)__ - github
    \n Inline \`code\`
    \n 
    \` \` \`
    Block code\n   
    \` \` \`
    \n >> ...block quote...
    \n + This is a list item
    \n ![Minion](https://octodex.github.com/images/minion.png)
    `)
  }, [])

  return (
    <div className="App">
      <div>
        <h3>Editor</h3>
        <Editor onChange={(e) => textAreaOnChange(e)} text={textState} />
      </div>
      <div>
        <h3>Markdown Preview</h3>
        <Preview text={textState} />
      </div>
    </div>
  )
}

export default App

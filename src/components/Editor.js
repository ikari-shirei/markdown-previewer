import React from 'react'

function Editor({ onChange, text }) {
  return <textarea id="editor" onChange={onChange} value={text}></textarea>
}

export default Editor

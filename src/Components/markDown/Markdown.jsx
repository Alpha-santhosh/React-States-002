import React from 'react'
import './Markdown.css'

function Markdown({markdown, setmarkdown}) {
  return (
    <div className="Markdown">
      <textarea className='Editor' id='editor' onChange={()=>{
        setmarkdown(document.getElementById('editor').value)
      }}>

      </textarea>
    </div>
  )
}

export default Markdown
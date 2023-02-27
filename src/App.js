import "./App.css";
import Markdown from "./Components/markDown/Markdown";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
// import remarkGfm from 'remark-gfm'

function App() {
  const [markdown, setmarkdown] = useState("");

  return (
    <div className="App">
      <Markdown markdown={markdown} setmarkdown={setmarkdown}/>
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;

import './style/App.css';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import CodeArea from "./codeArea";
import Capture from './capture';
import Settings from "./settings";
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState("js");
  const langChanged = (e) => {
    setLang(e.target.value)
  }
  return (
    <div className="App">
      <div className="viewPort">
        <div className="logo">
            <h1>carbon-copy</h1>
        </div>
        {/* <Settings lang={lang} langChanged={(e) => langChanged(e)}/> */}
        <CodeArea lang={lang}/>
        <Capture />
      </div>
    </div>
  );
}

export default App;

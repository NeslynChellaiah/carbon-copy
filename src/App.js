import CodeArea from "./codeArea";
import './style/App.css';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import CodeMirror from '@uiw/react-codemirror';

function App() {
  return (
    <div className="App">
      <CodeArea className="codeArea"/>
    </div>
  );
}

export default App;

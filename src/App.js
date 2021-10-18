import CodeArea from "./codeArea";
import Capture from './capture';

import './style/App.css';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';

function App() {
  return (
    <div className="App">
      
      <div className="viewPort">
        <div className="logo">
            <h1>carbon-copy</h1>
        </div>
        <CodeArea />
        <Capture />
      </div>
    </div>
  );
}

export default App;

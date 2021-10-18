import CodeArea from "./codeArea";
import Capture from './capture';

import './style/App.css';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';

function App() {
  return (
    <div className="App">
      <div className="logo">
          <h1>Carbon</h1>
          <h1>Copy</h1>
      </div>
      <div className="viewPort">
        <CodeArea />
        <Capture />
      </div>
    </div>
  );
}

export default App;

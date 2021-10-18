import './style/codeArea.css';

import 'codemirror/theme/dracula.css';
import 'codemirror/keymap/sublime';
import CodeMirror from '@uiw/react-codemirror';

const CodeArea = () => {
    return (
        <>  
            <div className="code-outer-container" id="code-outer-container">
                <div className="code-container">
                    <div className="top-bar">
                        <div className="dot-container">
                            <span className="dot dot-red"></span>
                            <span className="dot dot-yellow"></span>
                            <span className="dot dot-green"></span>
                        </div>
                    </div>
                    <div id = "editor">
                        <CodeMirror
                            value="//Write your code here and download it as an image"
                            height="auto"
                            options={{
                                theme: "dracula",
                                keymap: "sublime",
                                mode: "js",
                                lineWrapping: true,
                                cursorScrollMargin: -1,
                                scrollbarStyle: "null",
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CodeArea;
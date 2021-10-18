import * as htmlToImage from 'html-to-image';
import './style/capture.css'

const Capture = () => {
    const saveImage = (id) => {
        let node = document.getElementById(id)
        node.style.maxWidth = "none";
        htmlToImage.toPng(node)
        .then(function (dataUrl) {
            let a = document.createElement("a"); 
            a.href = dataUrl; 
            a.download = "carbon-copy.png"; 
            a.click(); 
            node.style.maxWidth = "80%"
        });
    }
    return (
        <>
            <button onClick={()=>saveImage("code-outer-container")}>Download Image</button>
        </>
    )
}

export default Capture;
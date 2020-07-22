import React, { Component } from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import EditorToolbar from './EditorToolbar'

class EditorContainer extends Component {
    text = "// Sample hello world function\nfunction helloWorld() {\ndocument.getElementById(\"demo\")\n\t\t.innerHTML = \"Hello World!\";\n}\n\nhelloWorld();";
    getScreenWidth = () => {
        var w = window.screen.width;
        return (w / 3 + "px");
    }

    getScreenHeight = () => {
        var h = window.screen.availHeight;
        return (h + "px")
    }


    render() {
        return (
            <div style={{ height: "100%" }}>
                <AceEditor theme="monokai" mode="javascript" height={this.getScreenHeight()} width={this.getScreenWidth()} fontSize="16px" defaultValue={this.text} />
                <EditorToolbar w={this.getScreenWidth()} />
            </div>
        )
    }
}

export default EditorContainer

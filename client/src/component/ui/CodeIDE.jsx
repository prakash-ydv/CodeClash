import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function CodeIDE() {
  const boilerplate = `
int twoSum(vector<int>& arr) {
    // Write your code here
}`;
  const [code, setCode] = useState(boilerplate);

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme("custom-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "", background: "1E1E2E" },
        { token: "comment", foreground: "7E8A97", fontStyle: "italic" },
        { token: "keyword", foreground: "C678DD" },
        { token: "string", foreground: "98C379" },
        { token: "number", foreground: "D19A66" },
      ],
      colors: {
        "editor.background": "#0d1117",
        "editor.foreground": "#C9D1D9",
        "editor.lineHighlightBackground": "#161b22",
        "editorCursor.foreground": "#58a6ff",
        "editorLineNumber.foreground": "#8b949e",
        "editor.selectionBackground": "#264F78",
      },
    });
  }

  function handleEditorDidMount(editor, monaco) {
    // Disable right-click context menu
    editor.updateOptions({ contextmenu: false });

    // Intercept copy, cut, paste events
    editor.onKeyDown((e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.code === "KeyC" || e.code === "KeyV" || e.code === "KeyX")
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

    // Disable drag/drop & paste from mouse
    editor.onDidPaste(() => {
      editor.setValue(editor.getValue()); // basically ignores paste
    });

    // Disable selection right-click copy from OS
    const domNode = editor.getDomNode();
    if (domNode) {
      domNode.addEventListener("copy", (e) => e.preventDefault());
      domNode.addEventListener("cut", (e) => e.preventDefault());
      domNode.addEventListener("paste", (e) => e.preventDefault());
    }
  }

  return (
    <Editor
      height="100%"
      defaultLanguage="cpp"
      defaultValue={boilerplate}
      theme="custom-dark"
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
      options={{
        padding: { top: 1 },
        fontSize: 14,
        fontFamily: "Fira Code, monospace",
        fontLigatures: true,
        lineHeight: 22,
        minimap: { enabled: false },
        automaticLayout: true,
        scrollBeyondLastLine: false,
        cursorSmoothCaretAnimation: "on",
      }}
    />
  );
}

export default CodeIDE;

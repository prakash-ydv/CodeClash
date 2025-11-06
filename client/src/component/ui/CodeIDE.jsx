import React, { useContext, useState } from "react";
import Editor from "@monaco-editor/react";
import { UserContext } from "../../context/UserContext";

function CodeIDE() {
  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme("custom-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "", foreground: "D4D4D4", background: "1E1E1E" },
        { token: "comment", foreground: "6A9955", fontStyle: "italic" },
        { token: "keyword", foreground: "569CD6" },
        { token: "identifier", foreground: "D4D4D4" },
        { token: "number", foreground: "B5CEA8" },
        { token: "string", foreground: "CE9178" },
        { token: "operator", foreground: "D4D4D4" },
        { token: "delimiter", foreground: "D4D4D4" },
        { token: "type", foreground: "4EC9B0" },
        { token: "function", foreground: "DCDCAA" },
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

  const { code, setCode } = useContext(UserContext);
  return (
    <Editor
      height="100%"
      defaultLanguage="cpp"
      theme="custom-dark"
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
      onChange={(value) => setCode(value)}
      value={code}
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

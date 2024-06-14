import React from 'react';
import { Controlled as CodeMirror } from '@uiw/react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

const AssignmentForm = ({ code, setCode, onSubmit }) => {
  return (
    <div>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default AssignmentForm;
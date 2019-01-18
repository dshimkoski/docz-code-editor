import React from 'react'

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

export class Code extends React.Component {
  state = { code: '' }

  run(code) {
    try {
      return eval(code)
    } catch(e) {
      return '...'
    }
  }

  render() {
    const code = this.state.code || this.props.children
    return (
      <>
        <div>{this.run(code)}</div>
        <Editor
          value={code}
          onValueChange={code => this.setState({ code })}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12
          }}
        />
      </>
    );
  }
}

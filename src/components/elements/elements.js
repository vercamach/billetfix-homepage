import React from 'react'

export class Button extends React.Component {
  static defaultProps = { style: {} }
  state = { hover: false }

  render() {
    return (
      <button
        style={{
          letterSpacing: '3px',
          padding: '16px 17px',
          margin: '0',
          borderTopLeftRadius: '0',
          borderBottomLeftRadius: '0',
          fontSize: '15px',
          border: '1px solid #ff4a6e',
          transition: 'all .15s',
          outline: 'none',
          textTransform: 'uppercase',
          cursor: 'pointer',
          ...this.props.style,
          ...(this.state.hover
            ? {
                background: 'white',
                color: '#ff4a6e',
              }
            : {
                background: '#ff4a6e',
                color: '#fff',
              }),
        }}
        onMouseEnter={() => {
          this.setState({ hover: true })
        }}
        onMouseLeave={() => {
          this.setState({ hover: false })
        }}
      >
        {this.props.children}
      </button>
    )
  }
}

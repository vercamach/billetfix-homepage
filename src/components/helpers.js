import * as React from 'react'

export class WindowHelper extends React.Component {
  state = {
    width: null,
  }
  componentDidMount() {
    this.setWidth()
    window.addEventListener('resize', () => {
      this.setWidth()
    })
  }
  setWidth = () => {
    this.setState({
      width: window.innerWidth,
    })
  }
  render() {
    return this.props.children(this.state)
  }
}

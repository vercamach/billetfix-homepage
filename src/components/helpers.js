import * as React from 'react'

export class WindowHelper extends React.Component {
  state = {
    width: null,
    scrollY: 0,
  }
  componentDidMount() {
    this.setWidth()
    window.addEventListener('resize', () => {
      this.setWidth()
    })

    window.addEventListener('scroll', () => {
      this.setScroll()
    })
  }

  setWidth = () => {
    this.setState({
      width: window.innerWidth,
    })
  }
  setScroll = () => {
    this.setState({
      scrollY: window.scrollY,
    })
  }

  render() {
    return this.props.children(this.state)
  }
}

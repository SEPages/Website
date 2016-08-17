import React from 'react'

// Components
import Header from './components/Header'

// Styles
import './sass/base/_reset.scss'
import './sass/base/_typography.scss'

export default class App extends React.Component{
  constructor() {
    super()
  }
  render() {
    return(
      <div>
        <Header/>
        {this.props.children}
        {/* Footer */}
      </div>
    )
  }
}

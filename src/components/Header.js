import React from 'react'
import '../sass/layout/_header.scss'
import '../sass/layout/_containers.scss'

export default class ClassName extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <header>
        <div className="container">
          <div className="siteHeader">
            <div className="siteHeader--section">
              <a className="title">Software Engineering</a>
            </div>
            <nav className="siteHeader--section">
              <a>Link</a>
              <a>Link</a>
              <a>Link</a>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

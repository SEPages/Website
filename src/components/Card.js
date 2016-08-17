import React from 'react'
import '../sass/components/_card.scss'

export default class Card extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="card">
        <div className="cardContent" style={{backgroundImage: "url("+ this.props.data.image +")"}}>
          <div className="cardContent--section">
            <div className="cardTitle">
              <h3>{this.props.data.title}</h3>
            </div>
          </div>
        </div>
        <div className="cardFooter">
          footer
        </div>
      </div>
    )
  }
}

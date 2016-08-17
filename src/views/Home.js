import React from 'react'
import Card from '../components/Card'

import '../sass/pages/_home.scss'

var data = {
  articles: [
    {title: "Embedded Systems at SpaceX.", image: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=dca4873f59aed93f7e03d929bab13695'},
    {title: "Buildings of the future.", image: 'https://images.unsplash.com/photo-1469349857311-a8fa13eafc33?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=62452f266e8a2449b7bec5d7ccb64914'},
    {title: "test", image: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=dca4873f59aed93f7e03d929bab13695'},
  ]
}
class ArticleList extends React.Component  {
  constructor(props) {
    super(props)
  }
  render() {
    var articleNodes = this.props.data.articles.map( (curr, index) => {
      console.log(this.props.data.articles[index]);
      return <Card data={this.props.data.articles[index]}/>
    });
    return (
      <div>{articleNodes}</div>
    )
  }
}

export default class Home extends React.Component {
  constructor() {
    super()
  }
  getInitiaState() {
    return(
      { data: data }
    )
  }
  _getArticles() {
    this.state.data.articles.map(() => (
      <h1>test</h1>
    ))
  }
  render() {
    return (
      <div>
        <div className="textEditor--hero">
          <div className="container">
            <h6>
              <span className="syntax--purple">var</span>
              <span className="syntax--red"> title</span>
              <span className="syntax--turquoise"> =</span>
              <span className="syntax--green"> "Software Engineering"</span>
            </h6>
            <h6>
              <span className="syntax--purple">var</span>
              <span className="syntax--red"> university</span>
              <span className="syntax--turquoise"> =</span>
              <span className="syntax--green"> "UTSC"</span>
            </h6>
            <pre>
              <h6><span className="syntax--purple">switch</span>(<span className="syntax--red">jumpTo</span>) {'{'}</h6>
              {/* Link 1 */}
              <a href="#">
                <h6 className="_indent-1"><span className="syntax--purple">case</span><span className="syntax--blue"> projects</span>: <span className="syntax--orange">jump</span>()</h6>
                {/*<h6 className="_indent-2"><span className="syntax--orange">jump</span>()</h6>*/}
              </a>

              {/* Link 2 */}
              <a href="#">
                <h6 className="_indent-1"><span className="syntax--purple">case</span><span className="syntax--blue"> professors</span>: <span className="syntax--orange">jump</span>()</h6>
                {/*<h6 className="_indent-2"><span className="syntax--orange">jump</span>()</h6>*/}
              </a>

              {/* Link 3 */}
              <a href="#">
                <h6 className="_indent-1"><span className="syntax--purple">case</span><span className="syntax--blue"> students</span>: <span className="syntax--orange">jump</span>()</h6>
              </a>
              <h6>{'}'}</h6>

            </pre>
          </div>
        </div>
        <div className="">
          <div className="container-sm">
            <ArticleList data={data}/>

            {/*<div className="card">
              <p>test</p>
            </div>
            <div className="card">
              <p>test</p>
            </div>
            <div className="card">
              <p>test</p>
            </div>
            <div className="card">
              <p>test</p>
            </div>*/}
          </div>
        </div>
      </div>
    )
  }
}

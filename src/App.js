import React, { Component } from "react";
import "./Album.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=in&apiKey=40097d01976742aab84b89f2a839ad7c"
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        // console.log(myJson);
        this.setState({
          articles: myJson.articles,
        });
      });
  }
  render() {
    console.log(this.state);
    return (
      <>
        <div className="topHeader">
          <h1>Today's Headlines</h1>
        </div>
        <div className="Alb">
          {this.state.articles.map((item, index) => {
            return (
              <div className="Cards">
                <img src={item.urlToImage} />
                <h4>{item.title}</h4>
                <h5>{item.author} <br></br> {item.publishedAt}</h5>
                <div className="description">
                  <h6>{item.description} </h6>
                  </div>
                <div className='aTag'> <a href={item.url}>Read More</a></div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ImageApi from './galeryimg.js'
import './galeryimg.css'






    


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      img1:[],
    }
  }

  componentDidMount(){
    fetch('https://api.unsplash.com/search/photos?query=random&client_id=e4c19c3fe4d16da39cb7b49acaaeef72a5c5a4cc9d1ec18e16cba3b0a8554f3e')
    .then(data=>data.json())
    .then(json =>{
      this.setState({
        img1: json.results,
      })
    })
    
  }

  render() {

    const verimagen = this.state.img1
    const verimagenfinal = verimagen.map(i=><ImageApi imageURL={i.urls.thumb} descriptionImg={i.alt_description} alt="imagen"/>)

    return (
      verimagenfinal
    )
  }
}

export default App;

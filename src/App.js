import React, { Component } from 'react';
import './App.css';
import ImageApi from './galeryimg.js'
import Modal from './modal.js'
import NavPinterest from './nav.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      photos:[],
      modal: false,
    }
this.openmodal=this.openmodal.bind(this)
this.closemodal=this.closemodal.bind(this)

  }

  componentDidMount(){
    fetch('https://api.unsplash.com/search/photos?page=1&per_page=30&query=random&client_id=e4c19c3fe4d16da39cb7b49acaaeef72a5c5a4cc9d1ec18e16cba3b0a8554f3e')
    .then(data=>data.json())
    .then(json =>{
      this.setState({
        photos: json.results,
      })
    })
   
  

  }

  openmodal(i){
    this.setState({
      ...this.state,
      modal:i
    })
  }

  closemodal(){
    this.setState({
      ...this.state,
      modal:false
    })
  }

  render() {

    const watchimg = this.state.photos
    const seeFinalImage = watchimg.map(i=><ImageApi click={this.openmodal} imageURL={i.urls.thumb} descriptionImg={i.alt_description} alt="imagen"/>)

    return (
      <div className="containerNav"><NavPinterest/>
      <div className= "containerImage" > 
        {this.state.modal && <Modal closemodal={this.closemodal} imgModal={this.state.modal}/>} 
        {seeFinalImage}
        {seeFinalImage}
        {seeFinalImage}
        {seeFinalImage}
      </div>
      </div>

    )
  }
}

export default App;

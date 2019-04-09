import React, { Component } from 'react';
import './App.css';
import ImageApi from './galeryimg.js'
import './galeryimg.css'
import Modal from './modal.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      photos:[],
      modal: false,
    }
this.abrirmodal=this.abrirmodal.bind(this)
this.cerrarmodal=this.cerrarmodal.bind(this)

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

  abrirmodal(i){
    this.setState({
      ...this.state,
      modal:i
    })
  }

  cerrarmodal(){
    this.setState({
      ...this.state,
      modal:false
    })
  }

  render() {

    const verimagen = this.state.photos
    const verimagenfinal = verimagen.map(i=><ImageApi hacerclick={this.abrirmodal} imageURL={i.urls.thumb} descriptionImg={i.alt_description} alt="imagen"/>)

    return (
      <div className= "contenedor" > 
        {this.state.modal && <Modal cerrarmodal={this.cerrarmodal} verimagenpuntual={this.state.modal}/>} 
        {verimagenfinal}
        {verimagenfinal}
        {verimagenfinal}
        {verimagenfinal}
      </div>

    )
  }
}

export default App;

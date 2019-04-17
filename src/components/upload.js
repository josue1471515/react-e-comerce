import React, { Component } from 'react';
import Carousel from './carousel';

class Upload extends Component {

  constructor(props){
    super(props)
    this.state = {
      file: null,
      fileArray:[]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    var temFiles = this.state.fileArray;
    if( event.target.files.length>0){
    temFiles.push(URL.createObjectURL(event.target.files[0]));
  
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      fileArray: temFiles
    })
  }
  }
  render() {
    return (
      <div>
        <label htmlFor="imageUpload" className="btn btn-primary btn-block btn-outlined">Select Images</label>
        <input type="file" id="imageUpload" accept="image/*" onChange={this.handleChange}  style={{display : "none"}}/>
        <Carousel arrayImg ={[this.state.file]}/>
      </div>
    );
  }
}

export default Upload; 
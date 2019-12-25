import React, { Component } from 'react';
import request from 'superagent';
// import logo from './logo.svg';
import BackArrow from './BackArrow';
import NextArrow from './NextArrow';
import './App.css';
import 'font-awesome/css/font-awesome.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      slideCount: 0
    }
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  componentWillMount() {
    this.fetchPhotos();
  }

  nextImage() {
    if(this.state.slideCount === this.state.photos.length - 1) {
      this.setState({ slideCount: 0 })
    } else {
      this.setState({ slideCount: this.state.slideCount + 1 })
    }
  }

  previousImage() {
    if(this.state.slideCount === 0) {
      this.setState({ slideCount: this.state.photos.length - 1 })
    } else {
      this.setState({ slideCount: this.state.slideCount - 1 })
    }
  }

  fetchPhotos() {
    request
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=1959867651.1677ed0.1e3802e00f0b4c3ea7c6f674b4352abd')
      .then((res) => {
        this.setState({
          photos: res.body.data,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header >
          <h1 className="App-header">Project Maddie</h1>
        </header>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
          {<BackArrow previousImage={this.previousImage} />}
          {this.state.photos.map((photo, key) => {
            if (this.state.photos.indexOf(photo) === this.state.slideCount - 1 && this.state.slideCount !== 0) {
              return (
                  <img src={photo.images.standard_resolution.url} width="150" height="150" alt='' />
              )
            } else if (this.state.photos.indexOf(photo) === this.state.photos.length - 1 && this.state.slideCount === (0)) {
              return (
                  <img src={photo.images.standard_resolution.url} width="150" height="150" alt='' />
              )
            }
            return ''
          })}          {this.state.photos.map((photo, key) => {
            if (this.state.photos.indexOf(photo) === this.state.slideCount) {
              return (
                <div key={photo.id} style={{ margin: '0 auto' }}>
                  <img src={photo.images.standard_resolution.url} alt='' />
                  <div style={{ width: '600px',margin: '24px auto',fontSize: 30 , fontFamily: "Bitter"}}>
                    {photo.caption !== null ? photo.caption.text : ''}
                  </div>
                </div>
              )
            }
            return ''
          })}
          {this.state.photos.map((photo, key) => {
            if (this.state.photos.indexOf(photo) === this.state.slideCount + 1 && this.state.slideCount !== (this.state.photos.length - 1)) {
              return (
                  <img src={photo.images.standard_resolution.url} width="150" height="150" alt='' />
              )
            } else if (this.state.photos.indexOf(photo) === 0 && this.state.slideCount === (this.state.photos.length -1)) {
              return (
                  <img src={photo.images.standard_resolution.url} width="150" height="150" alt='' />
              )
            }
            return ''
          })}
          {<NextArrow nextImage={this.nextImage} />} 
        </div>
        <footer>
          <h1 className="App-footer">{this.state.slideCount + "/" + (this.state.photos.length - 1)}</h1>
        </footer>
      </div>
    );
  }
}

export default App;
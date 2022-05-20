import logo from './logo.svg';
import Modal from 'react-bootstrap/Modal'
import React from 'react';
import image1 from './image1.jfif';
import image2 from './image2.jfif';
import image3 from './image3.jfif';
import image4 from './image4.jfif';
import image5 from './image5.jfif';
import image6 from './image6.jfif';
import image8 from './image8.jpg';
import {
    ans1,
    ans2,
    ans3,
    ans4,
    ans5,
    ans6,
    ans7,
    ans8,
    ans9,
    ans10,
    ans11,
    ans12,
    ans13,
    ans14,
    ans15,
    ans16,
    ans17,
    ans18
} from './content';
import './App.css';
import { Button, Col, Row } from 'reactstrap';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super();
    this.createCols = this.createCols.bind(this);
    this.showMsg = this.showMsg.bind(this);
    this.addEvent = this.addEvent(this);
    this.state = {
      show: false
    };
  }

  addEvent() {
    var buttons = document.getElementsByTagName("Button");
    for (let index = 0; index < buttons.length; index++) {
      buttons[index].className = "button" + index;
      buttons[index].onclick = this.showMsg;
      console.log("added event");
    }

  }

  showMsg = (mge) => {
    alert(mge);
  }

  createCols = (...details) => {
    const handleClose = () => this.setState({ show: false });
    const handleShow = (mges) => this.setState({ show: true, statemge: mges });
    return (
      <>
        <Col xs="2">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={details[1]} className="image" alt="image" />
              </div>
              <div className="flip-box-back">
                {/* <h4 className="mge2"> {details[2]}</h4> */}
                <h5 className="mge2">{details[2]} </h5>
                {/* <Button onClick={this.showMsg.bind(this, details[2])}>Share</Button> */}
                <Button onClick={handleShow.bind(this, details[3])}>Click</Button>
              </div>
              <div className="content">
                <h1>{details[0]}</h1>
              </div>
            </div>
          </div>
        </Col>

        <Modal show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Happy Brainstorming!! &#128540;</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.statemge}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Row>
            {this.createCols(1, image1, "What is always coming, but never arrives?", ans1)}
            {this.createCols(2, image3, "What can be broken, but is never held?", ans2)}
            {this.createCols(3, image5, "What is it that lives if it is fed, and dies if you give it a drink?", ans3)}
            {this.createCols(4, image6, "What word would you use to describe a man who does not have all his fingers on one hand?", ans4)}
            {this.createCols(5, image2, "What can one catch that is not thrown?", ans5)}
            {this.createCols(6, image4, "What is it that if you have, you want to share me, and if you share, you do not have?", ans6)}
          </Row>
          <br></br>
          <Row>
            {this.createCols(7, image6, "If a plane crashes on the border between the United States and Canada, where do they bury the survivors?", ans7)}
            {this.createCols(8, image8, "What did one campfire say to the other?", ans8)}
            {this.createCols(9, image5, "Why can’t a woman living in the Europe be buried in Canada?", ans9)}
            {this.createCols(10, image8, "Why are movie stars considered cool?", ans10)}
            {this.createCols(11, image1, "What is white and black, but red all over?", ans11)}
            {this.createCols(12, image2, "What is the biggest problem with snow boots?", ans12)}
          </Row>
          <br></br>
          <Row>
            {this.createCols(13, image3, "Why do fluorescent lights hum?", ans13)}
            {this.createCols(14, image4, "What becomes wetter the more it dries?", ans14)}
            {this.createCols(15, image5, "What did the ocean say to the beach?", ans15)}
            {this.createCols(16, image6, "Where is an ocean with no water?", ans16)}
            {this.createCols(17, image2, "What type hair does an ocean have?", ans17)}
            {this.createCols(18, image1, "Why did the clown visit the doctor?", ans18)}
          </Row>
          {this.addEvent}
        </div>
      </div>
    );
  };
}

export default App;

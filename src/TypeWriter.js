import React, { Component } from 'react';

const titles = ['Web Developer.', 'Engineer.', 'Designer.'];
class TypeWriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      arrayIndex: 0,
      speed: 250,
    };
  }

  componentDidMount() {
    const { arrayIndex } = this.state;
    this.SelectArray(arrayIndex);
  }

  SelectArray(arrayIndex) {
    this.setState({ arrayIndex }, () => {
      this.TypeArray(titles[arrayIndex]);
    },
    );
  }

  TypeArray(word) {
    const { speed } = this.state;
    let character = 0;
    const timer = setInterval(() => {
      this.setState({ text: word.substring(0, character) }, () => {
        if (character === word.length) {
          clearInterval(timer);
          this.ReverseType(word);
        }
      });
      character += 1;
    }, speed);
  }

  ReverseType(word) {
    const { arrayIndex, speed } = this.state;
    let character = word.length;
    const timer = setInterval(() => {
      this.setState({ text: word.substring(0, character) }, () => {
        if (character === 0) {
          clearInterval(timer);
          let arrayTrack = arrayIndex + 1;
          if (
            arrayTrack === titles.length
          ) {
            arrayTrack = 0;
          }
          this.SelectArray(arrayTrack);
        }
        character -= 1;
      });
    }, speed);
  }

  render() {
    const { text } = this.state;
    return (
      <div className="placeholder">
        <h2>{text}</h2>
      </div>
    );
  }
}

export default TypeWriter;

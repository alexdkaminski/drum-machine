import React, { Component } from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import clap from "./samples/clap-808.wav";
import cowbell from "./samples/cowbell-808.wav";
import crash from "./samples/crash-808.wav";
import hihat from "./samples/hihat-808.wav";
import kick from "./samples/kick-808.wav";
import openhat from "./samples/openhat-808.wav";
import perc from "./samples/perc-808.wav";
import snare from "./samples/snare-808.wav";
import tom from "./samples/tom-808.wav";
import { create } from "istanbul-reports";

const DrumPadGrid = styled.div`
  ${tw`py-6 w-auto h-auto`}
`;
const DrumPadRow = styled.div`
  ${tw`flex mb-10 h-auto`}
`;
const DrumPadColumn = styled.div`
  ${tw`w-1/3 bg-gray-400 h-auto mx-5`}
`;
const Button = styled.button`
  ${tw`bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 font-sans border-none h-48 w-full text-3xl`}
`;

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.playButton = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown',this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClick = () => {
    this.audio.current.currentTime = 0;
    this.audio.current.play();
    this.props.handler(this.props.name);
  };

  handleKeyDown = (e) => {
    if(e.key === this.props.keyLetter) {
      // Play sound and depress button
      this.audio.current.currentTime = 0;
      this.audio.current.play();
      this.props.handler(this.props.name);
    }
  }

  render() {
    return (
      <DrumPadColumn>
          <audio ref={this.audio}>
            <source src={this.props.file} type="audio/wav" />
          </audio>
          <Button onClick={this.handleClick} ref={this.playButton} tabIndex="0">{this.props.name} </Button>
      </DrumPadColumn>
    );
  }
}

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: String.fromCharCode(160)
    }
    this.handler = this.handler.bind(this)
  }

  handler(someValue) {
    this.setState({
      display: someValue
    })
    console.log(someValue)
  }

  renderDrumPad(sound, name, keyLetter, i) {
    return <DrumPad key={i} file={sound} name={name} keyLetter={keyLetter} handler={this.handler} />;
  }

  createDrumPad = () => {
    let drumPadGrid = [];
    let rowCount = 3;
    let colCount = 3;
    let count = 0;
    const sounds = [
      { name: "Clap", file: clap, keyLetter: "q" },
      { name: "Cowbell", file: cowbell, keyLetter: "w" },
      { name: "Crash", file: crash, keyLetter: "e" },
      { name: "Hi-hat", file: hihat, keyLetter: "a" },
      { name: "Kick", file: kick, keyLetter: "s" },
      { name: "Open-hat", file: openhat, keyLetter: "d" },
      { name: "Perc", file: perc, keyLetter: "z" },
      { name: "Snare", file: snare, keyLetter: "x" },
      { name: "Tom", file: tom, keyLetter: "c" }
    ];

    for (let i = 0; i < rowCount; i++) {
      let drumPads = [];
      for (let j = 0; j < colCount; j++) {
        drumPads.push(this.renderDrumPad(sounds[count].file, sounds[count].name, sounds[count].keyLetter, count));
        count = count + 1;
      }
      drumPadGrid.push(<DrumPadRow key={i}>{drumPads}</DrumPadRow>);
    }

    return drumPadGrid;
  };

  render() {
    return (
      <div id="drum-machine">
        <Display text={this.state.display}/>
        {this.createDrumPad()}
      </div>
    );
  }
}

class Display extends Component {
  render() {
    return (
      <div id="display" css={tw `bg-gray-600 mb-10 my-auto mx-auto`}>
        <h4 css={tw `text-4xl text-white`}>{this.props.text}</h4>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div css={tw`text-center bg-gray-800 pb-8 text-xl w-full mx-auto`}>
        <h1 css={tw`text-blue-300 m-0 py-4`}>Drum Machine</h1>
        <DrumPadGrid>
          <DrumMachine />
        </DrumPadGrid>
      </div>
    );
  }
}

export default App;

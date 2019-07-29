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
  ${tw`px-56 p-y-12 mx-auto`}
`;
const DrumPadRow = styled.div`
  ${tw`flex mb-10 h-auto`}
`;
const DrumPadColumn = styled.div`
  ${tw`w-1/3 bg-gray-400 h-auto mx-5`}
`;
const Button = styled.button`
  ${tw`bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 font-sans border-none h-64 w-full text-3xl`}
`;

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.playButton = React.createRef();
  }

  playAudio = () => {
    this.playButton.current.play();
  };

  render() {
    return (
      <DrumPadColumn>
          <audio ref={this.playButton}>
            <source src={this.props.file} type="audio/wav" />
          </audio>
          <Button onClick={this.playAudio}>{this.props.name}</Button>
      </DrumPadColumn>
    );
  }
}

class DrumMachine extends Component {
  renderDrumPad(sound, name, i) {
    return <DrumPad key={i} file={sound} name={name}/>;
  }

  createDrumPad = () => {
    let drumPadGrid = [];
    let rowCount = 3;
    let colCount = 3;
    let count = 0;
    const sounds = [
      { name: "Clap", file: clap },
      { name: "Cowbell", file: cowbell },
      { name: "Crash", file: crash },
      { name: "Hi-hat", file: hihat },
      { name: "Kick", file: kick },
      { name: "Open-hat", file: openhat },
      { name: "Perc", file: perc },
      { name: "Snare", file: snare },
      { name: "Tom", file: tom }
    ];

    for (let i = 0; i < rowCount; i++) {
      let drumPads = [];
      for (let j = 0; j < colCount; j++) {
        drumPads.push(this.renderDrumPad(sounds[count].file, sounds[count].name, count));
        count = count + 1;
      }
      drumPadGrid.push(<DrumPadRow key={i}>{drumPads}</DrumPadRow>);
    }

    return drumPadGrid;
  };

  render() {
    return (
      <div id="drum-machine">
        <div id="display" />
        {this.createDrumPad()}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div css={tw`text-center bg-gray-800 pb-8 text-xl`}>
        <h1 css={tw`text-blue-300 m-0 py-4`}>Drum Machine</h1>
        <DrumPadGrid>
          <DrumMachine />
        </DrumPadGrid>
      </div>
    );
  }
}

export default App;

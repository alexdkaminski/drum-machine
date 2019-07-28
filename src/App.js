import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import clap from './samples/clap-808.wav'
import cowbell from './samples/cowbell-808.wav'
import crash from './samples/crash-808.wav'
import hihat from './samples/hihat-808.wav'
import kick from './samples/kick-808.wav'
import openhat from './samples/openhat-808.wav'
import perc from './samples/perc-808.wav'
import snare from './samples/snare-808.wav'
import tom from './samples/tom-808.wav'

const Header = styled.header`
${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;



class DrumMachine extends Component {

   renderDrumPad(sound,i) {
    return (
      <DrumPad 
        key={i}
        file={sound}
      />
    );
  }
  
  createDrumPad = () => {
  let drumPad = [];
  const sounds = [
    {name: 'Clap', file: clap},
    {name: 'Cowbell', file: cowbell},
    {name: 'Crash', file: crash},
    {name: 'Hi-hat', file: hihat},
    {name: 'Kick', file: kick},
    {name: 'Open-hat', file: openhat},
    {name: 'Perc', file: perc},
    {name: 'Snare', file: snare},
    {name: 'Tom', file: tom}
  ];
  sounds.forEach((sound,i) => {
    drumPad.push(
      this.renderDrumPad(sound.file,i)
    )
  })
  return drumPad
  }

  render() {
    return (
      <div id='drum-machine'>
        <div id='display'>
        </div>
        <div>
          {this.createDrumPad()}
        </div>
    </div>
    )
  }
}

class DrumPad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='drum-pad'>
          <audio controls>
            <source src={this.props.file} type='audio/wav'/>
          </audio>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div css={tw`text-center`}>
        <Header>
        <p css={tw`text-blue-300`}>
          Drum Machine
        </p>
        <DrumMachine />
        </Header>
      </div>
    );
  } 
}

export default App;

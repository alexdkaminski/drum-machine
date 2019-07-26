import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const Header = styled.header`
${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

const sounds = [{name: ''}]

class DrumMachine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='drum-machine'>
        <div id='display'>
        </div>
        <DrumPad/>
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
          <audio>
            <source src={props.source} type='audio/wav'/>
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

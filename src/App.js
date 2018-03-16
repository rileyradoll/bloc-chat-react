import React, { Component } from 'react';
import './App.css';
import { RoomList }  from './components/RoomList';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAX-Or0VaOWQppCOvZ_xiaTyWL0J57ZgFc",
  authDomain: "bloc-chat-react-f41a1.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-f41a1.firebaseio.com",
  projectId: "bloc-chat-react-f41a1",
  storageBucket: "bloc-chat-react-f41a1.appspot.com",
  messagingSenderId: "354230767382"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;

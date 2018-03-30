import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList }  from './components/RoomList/RoomList';
import { MessageList } from './components/MessageList/MessageList';
import { User } from './components/User/User';

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
  constructor(props) {
    super(props);
    this.state = { activeRoom: "", user: null };
    this.activeRoom = this.activeRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  activeRoom(room) {
    this.setState({ activeRoom: room });
  }

  setUser(user) {
    this.setState({ user: user });
  }

  render() {
    const showMessage = this.state.activeRoom;
    const currentUser = this.state.user === null ? "Guest" : this.state.user.displayName;

    return (
      <div>
        <h1>{this.state.activeRoom.title || "Select A Room"}</h1>
        <User firebase={firebase} setUser={this.setUser} welcome={currentUser} />
        <RoomList firebase={firebase} activeRoom={this.activeRoom} />
        { showMessage ?
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom.key} user={currentUser} />
        : null
        }
      </div>
    );
  }
}

export default App;

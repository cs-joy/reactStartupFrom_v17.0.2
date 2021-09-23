import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import Comment from "./components/Comment";


function App() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Welcome name="AJ" />
      <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
      />

    </div>
  );
}


export default App;

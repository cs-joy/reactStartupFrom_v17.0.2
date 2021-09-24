import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import Comment from './components/Comment';
import Header from './components/Header/Header';
import Clock from './components/NewC/Clock';
import Form from './components/Form/Form';
import Toggle from './components/Toggle/Toggle';
import Mailbox from "./components/MailBox/Mailbox";
import Learn from './components/Learns/Learn';
import Blog from './components/Blog/Blog';
import NameForm from './components/Form/NameForm';
import EssayForm from "./components/Form/EssayForm";
import FlavorForm from "./components/Form/FlavorForm";
import Reservation from "./components/Handling Multiple Inputs/Reservation";

import Calculator from "./components/Learns/Calculator";
import WelcomeDialog from './components/Learns/WelcomeDialog';

function App(props) {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  }

    const posts = [
        {id: 1, title: 'React', content: 'Get started!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm'}
    ];

  const messages = ['React', 'Rea: React', 'Re:Re: React', 'Re:Re:Re: React', 'Hello'];
  const count = 0;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Clock />
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
      <hr />
      <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
      />
      <hr />
        <Header />
        <Form />
        <Toggle />
        <Mailbox unreadMessages={messages} />
        <p>
            { count && <h1>Messages: {count}</h1> }
        </p>
      <hr />
        <Learn />
        <hr />
        <Blog posts={posts} />
        <NameForm />
        <EssayForm />
        <FlavorForm />
        <Reservation />

        <Calculator />
        <WelcomeDialog />
    </div>
  );
}

export default App;

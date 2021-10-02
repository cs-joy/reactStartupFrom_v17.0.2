import logo from './logo.svg';
import './App.css';

import Welcome from './components/Learns/Welcome';
import Comment from './components/Learns/Comment';
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
import SignUpDialog from './components/Learns/MarsExploration';
import ReactDesi from './components/Learns/ReactDesi';
import New from './components/Learns/IntegrationwithOL';
import ListOfTenThings from './components/Learns/FunctionAsChildren';
import CounterButton from './components/Buttons/CounterButton';
import TypeSc from './components/TypeScript/FirstComp';
import TypeScript from "./components/TypeScript/SecondComp";

import NumberList from "./components/Learns/NumberList";

//------Simple Component---------
import HelloMessage from './components/SimpleComponent/SimpleComponent';

//------Stateful Component------
import Timer from './components/StatefulComponent/StatefulComponent';

//An Application Component
import TodoApp from "./components/AnApplication/AnApplication";


//----------ReactHook----------
import NewB from './components/Learns/ReactHook/NewB';
import EffectHook from './components/Learns/ReactHook/EffectHook';
import Counter from './components/Learns/ReactHook/BasicHooks/useState';
import MyResponsiveComponent from './components/Learns/ReactHook/RComp';
import ScrollView from "./components/Learns/ReactHook/NewH";
import Assigning from "./components/Learns/SeptemberTs";
import FunctionComp from './components/Learns/FunctionComp';
import ExampleProgress from "./components/UsersProgress/userProgress";

//TypeScript Components
import LadType from './components/TypeScript/LadType';

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

  const PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
  const numbers = [1, 2, 3, 4, 5];
  const initialCount = 0;

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
        <hr />
        <Clock />

        <hr />
        <Calculator />
        <WelcomeDialog />
        <br />
        <SignUpDialog />
        <br />
        <ReactDesi products={PRODUCTS} />
        <hr />
        <New />
        <hr />
        <ListOfTenThings />
        <hr />
        <CounterButton />
        <hr />
        <TypeSc />
        <hr />
        <hr />
        <TypeScript />
        <hr />
        <NumberList numbers={numbers} />
        <hr />
        <NewB />
        <hr />
        <EffectHook />
        <br />
        <hr />
        <Counter initialCount={initialCount} />
        <hr />
        <MyResponsiveComponent />
        <hr />
        <ScrollView />
        <hr />
        <br />
        <hr />
        <Assigning />
        <hr />
        <FunctionComp />
        <hr />
        <hr />
        <hr />
        <HelloMessage name="Taylor" />
        <hr />
        <Timer />
        <hr />
        <TodoApp />
        <hr />
        <LadType />
        <hr />
        <ExampleProgress />

    </div>
  );
}

export default App;

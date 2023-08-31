import logo from './logo.svg';
import './App.css';

import MyButton from './components/Button';
import ImgaesManipulation from './components/Image';

import AdminPanel from './components/AdminPanel';
import LoginForm from './components/LoginPanel';

let content;
let isLoggedIn = false;

if (isLoggedIn) {
  content = <AdminPanel />
} else {
  content = <LoginForm />
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton />
        <ImgaesManipulation />
      </header>

      {content}
      
    </div>
  );
}

export default App;

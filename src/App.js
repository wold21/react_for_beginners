import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}
      {/* <Greet name="T" nickName="O">
        <p>This is children element</p>
      </Greet>
      <Greet name="A" nickName="Z">
        <button>Action</button>
      </Greet>
      <Greet name="Z" nickName="A"/>
      <Greet name="O" nickName="T"/>
      <Welcome name="T" nickName="O"/>
      <Welcome name="T" nickName="O"/>
      <Welcome name="T" nickName="O"/> */}
    </div>
  );
}

export default App;

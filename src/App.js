import logo from './logo.svg';
import './App.css';

function App() {
  const whateverStyle={
    border: '5px solid green',
    margin: '5px'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <p style={whateverStyle}>
          I am a react person
        </p>
        
      </header>
    </div>
  );
}

function Person(){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  return (
  <div style={personStyle}>
    <h1>Name: Fuad Hasan</h1>
    <h3>Valorant</h3>
  </div>
  );
}

export default App;

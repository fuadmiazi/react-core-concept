//import logo from './logo.svg';
import './App.css';

function App() {
  const whateverStyle={
    border: '5px solid green',
    margin: '5px'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Rubel Nayok"></Person>
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

function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  console.log(props)
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Valorant</h3>
  </div>
  );
}

export default App;

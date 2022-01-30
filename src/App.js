import logo from './logo.svg';
import './App.css';

function App() {
  var person= {
    name: "Fuad",
    job: "Gamer"
}
var person2= {
  name: "Nawal",
  job: "Software Engineer"
}
var style={
  color: 'red',
  backgroundColor: 'yellow'
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>My First React Paragraph</p>
        <h1 className="" style={style} >my heading: {person.name +" is a: "+ person.job}</h1>
        <h1 style={{color: 'black',
        backgroundColor: 'cyan'}}>Friend: {person2.name+" is a: "+ person2.job}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import OpenLibrary from './components/OpenLibrary'
import Reader from './components/Reader'

function App() {
  return (
    <div className="App">
      <h1>Bionic Reader App</h1>
      <OpenLibrary />
      {/* <Reader sentence /> */}
    </div>
  );
}

export default App;

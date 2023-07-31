import './App.css';
import Reader from './components/Reader'

function App() {
  const originalSentence =
    'this is the sentence which should be bold in first characters making it quicker to read, perhaps bionic';

  return (
    <div className="App">
      <h1>Bionic Reader App</h1>
      <Reader sentence={originalSentence} />
    </div>
  );
}

export default App;

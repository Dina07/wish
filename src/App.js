import './App.css';
import flash from './assessts/bg.mp4'
function App() {
  return (
    <div className="App-header">
      <video id="myVideo" controls loop={false}>
        <source src={flash} type="video/mp4" />
      </video>

      <div className="content">
        <h1>Happy Birthday</h1>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import TimerWrapper from "./TimerWrapper"
import ProfileViewer from "./ProfileViewer"
import Video from "./Video"

function App() {
  return (
    <div className="App">
      <ProfileViewer name="beckyschmitty" />
      <TimerWrapper />
      <hr></hr>
      <Video />
    </div>
  );
}

export default App;

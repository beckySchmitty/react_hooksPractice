import './App.css';
import TimerWrapper from "./TimerWrapper"
import ProfileViewer from "./ProfileViewer"

function App() {
  return (
    <div className="App">
      <ProfileViewer name="beckyschmitty" />
      <TimerWrapper />
    </div>
  );
}

export default App;

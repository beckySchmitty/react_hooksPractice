import './App.css';
import Timer from "./Timer"
import ProfileViewer from "./ProfileViewer"

function App() {
  return (
    <div className="App">
      <ProfileViewer name="beckyschmitty" />
      <Timer />
    </div>
  );
}

export default App;

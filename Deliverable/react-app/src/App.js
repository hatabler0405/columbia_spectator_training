import logo from './Spectator+Publishing+Logo.png';
import './App.css';
import SavedSource from './components/SavedSource';
import EnteredSource from './components/EnteredSource';

function App() {
  return (
    <div class="ALL">
      <div class="SpectatorImage">
          <img src={logo} alt="Columbia Spectator Logo" width="263" height="55"></img>
      </div>
      <div class = "SpectatorTitle"> 
          <h1>Spectator's Sources</h1>
      </div>
      <SavedSource name="Source Name" email="Source Email"></SavedSource>
      <EnteredSource id="1" name="Presbo" email="presbo@columbia.edu"></EnteredSource>
      <EnteredSource id="2" name="John Jay Mouse" email="mouse@columbia.edu"></EnteredSource>
      <EnteredSource id="3" name="Water Bottle Man" email="flipper@columbia.edu"></EnteredSource>
    </div>
  );
}

export default App;

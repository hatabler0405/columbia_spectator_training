import React, { useState, useEffect } from 'react';
import logo from './Spectator+Publishing+Logo.png';
import './App.css';
import SavedSource from './components/SavedSource';
import EnteredSource from './components/EnteredSource';

function App() {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const initialSources = [
      { id: 1, name: "Presbo", email: "presbo@columbia.edu" },
      { id: 2, name: "John Jay Mouse", email: "mouse@columbia.edu" },
      { id: 3, name: "Water Bottle Man", email: "flipper@columbia.edu" }
    ];
    setSources(initialSources);
  }, []);

  const handleAddSource = (name, email) => {
    const newSource = {
      id: sources.length+1, 
      name: name,
      email: email
    };
    setSources((prevSources) => [...prevSources, newSource]);
  };

  const handleDeleteSource = (id) => {
    setSources((prevSources) => prevSources.filter((source) => source.id !== id));
  };

  return (
    <div className="ALL">
      <div className="SpectatorImage">
        <img src={logo} alt="Columbia Spectator Logo" width="263" height="55" />
      </div>
      <div className="SpectatorTitle">
        <h1>Spectator's Sources</h1>
      </div>

      <SavedSource
        name="Source Name"
        email="Source Email"
        onAddSource={handleAddSource}
      />

      <EnteredSource
        sources={sources}
        onDeleteSource={handleDeleteSource}
      />
    </div>
  );
}

export default App;
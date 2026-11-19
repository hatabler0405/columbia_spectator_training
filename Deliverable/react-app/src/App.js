import React, { useState, useEffect } from 'react';
import logo from './Spectator+Publishing+Logo.png';
import './App.css';
import SavedSource from './components/SavedSource';
import EnteredSource from './components/EnteredSource';

function App() {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getAll')
      .then((res) => res.json())
      .then((data) => setSources(data))
      .catch((err) => console.error('Error fetching sources:', err));
  }, []);

  const handleAddSource = async (name, email) => {
    try{
      const response = await fetch('http://localhost:8000/create', {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email }),
      });
      if(response.ok){
        const savedSource = await response.json();
        setSources((prevSources) => [...prevSources, savedSource]);
      } else {
        console.error('Failed to add source to the database');
      }
    } catch (err) {
      console.error('Error adding source:', err);
    }
  };

  const handleDeleteSource = async (id) => {
    try{
      const response = await fetch(`http://localhost:8000/delete/${id}`, {
        method: "DELETE",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id }),
      });
      if(response.ok){
        setSources((prevSources) => prevSources.filter((source) => source.id !== id));
      } else {
        console.error('Failed to delete source from the database');
      }
    } catch (err) {
      console.error('Error deleting source:', err);
    }
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
import React, { useState } from 'react';

function SavedSource({ onAddSource, name = "Source Name", email = "Source Email" }) {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameInput.trim() || !emailInput.trim()) return;
    onAddSource(nameInput.trim(), emailInput.trim());
    setNameInput('');
    setEmailInput('');
  };

  return (
    <div className="AddSource">
      <div className="SourceText">
        <label htmlFor="source-name">{name}: </label>
        <input
          id="source-name"
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </div>
      <div className="SourceText">
        <label htmlFor="source-email">{email}: </label>
        <input
          id="source-email"
          type="text"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </div>
      <div>
        <button className="ADD" type="button" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default SavedSource;
import React from 'react';

function EnteredSource({ sources, onDeleteSource }) {
  return (
    <div>
      <ul className="OBox">
        {sources.map((source, index) => (
          <li key={source.id}>
            <span className="Num">{index + 1}</span>
            <span className="Name">{source.name}</span>
            <span className="Email">{source.email}</span>
            <button
              className="Delete"
              type="button"
              onClick={() => onDeleteSource(source.id)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnteredSource;
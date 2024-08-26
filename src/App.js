import React, { useState } from 'react';
import './App.css';

function App() {
  const [elements, setElements] = useState([]);

  const onDrop = (e) => {
    const elementType = e.dataTransfer.getData('elementType');
    setElements([...elements, { type: elementType, id: elements.length }]);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="sidebar" draggable >
        <div
          draggable
          onDragStart={(e) => e.dataTransfer.setData('elementType', 'input')}
          className="draggable-element"
        >
          Text Input
        </div>
        <div
          draggable
          onDragStart={(e) => e.dataTransfer.setData('elementType', 'checkbox')}
          className="draggable-element"
        >
          Checkbox
        </div>
      </div>
      <div className="canvas" onDrop={onDrop} onDragOver={onDragOver}>
        {elements.map((element) => (
          <Element key={element.id} type={element.type} />
        ))}
      </div>
    </div>
  );
}

function Element({ type }) {
  switch (type) {
    case 'input':
      return <input type="text" placeholder="Text Input" />;
    case 'checkbox':
      return (
        <label>
          <input type="checkbox" /> Checkbox
        </label>
      );
    default:
      return null;
  }
}

export default App;

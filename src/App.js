import React, { useState } from 'react';
import './App.css';
import Element from './components/element';

function App() {
  const [elements, setElements] = useState([]);
  const draggableElements = [{type: 'input', label: 'text input'},
    {type: 'checkbox', label: 'checkbox'}
  ]
  const onDrop = (e) => {
    const elementType = e.dataTransfer.getData('elementType')
    setElements([...elements, {type: elementType, id: elements.length}])
  }

  const onDragOver = (e) => {
    e.preventDefault();
  }
  return (<div className='App'>
    <div className='sidebar'>
      {draggableElements.map((elements, index) => (
        <div draggable key={index} onDragStart={(e) => (e.dataTransfer.setData('elementType', elements.type))}>{elements.label}
        </div>
      ))}
      </div>
      <div className='canvas' onDrop={onDrop} onDragOver={onDragOver}>
        {elements.map((element) => (
          <Element key={element.id} type={element.type} />
        ))}
      </div>
  </div>)
}
export default App;






// import React, { useState } from 'react';
// import './App.css';
// import Element from './components/element';

// function App() {
//   const [elements, setElements] = useState([]);
//   const draggableElements = [
//     { type: 'input', label: 'Text Input' },
//     { type: 'checkbox', label: 'Checkbox' }
//   ];
//   const onDrop = (e) => {
//     const elementType = e.dataTransfer.getData('elementType');
//     setElements([...elements, { type: elementType, id: elements.length }]);
//   };

//   const onDragOver = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="App">
//       <div className="sidebar">
//         {draggableElements.map((element, index) => (
//           <div
//             key={index}
//             draggable
//             onDragStart={(e) => e.dataTransfer.setData('elementType', element.type)}
//             className="draggable-element"
//           >
//             {element.label}
//           </div>
//         ))}
//       </div>
//       <div className="canvas" onDrop={onDrop} onDragOver={onDragOver}>
//         {elements.map((element) => (
//           <Element key={element.id} type={element.type} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

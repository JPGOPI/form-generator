import React, { useState } from 'react';
import './App.css';
import Element from './components/element';


function App() {
  const [elements, setElements] = useState([]);
  const draggableElements = [{type: 'input',label: 'Enter name'},
    {type:'checkbox', label: 'Check box'}
  ]
  const onDrop = (e) => {
    const ElementType = e.dataTransfer.getData('elementType')
    setElements([...elements, {type: ElementType, id: elements.length}])
  }
  const onDragOver = (e) => {
    e.preventDefault()
  }
  return(<div className='App'>
    <div className='sidebar'>
      {draggableElements.map((element, id)=>(
        <div draggable key={id} onDragStart={(e)=>{
          e.dataTransfer.setData('elementType', element.type)
        }}>
          {element.label}
        </div>
      ))}
    </div>
    <div className='canvas' onDrop={onDrop} onDragOver={onDragOver}>
      {elements.map((elements) => (
        <Element key={elements.id} type={elements.type}></Element>
      ))}
    </div>
  </div>
    
  )
}
export default App;

// function App() {
//   const [elements, setElements] = useState([]);
//   const draggableElements = [{type: 'input', label: 'text input'},
//     {type: 'checkbox', label: 'checkbox'}
//   ]
//   const onDrop = (e) => {
//     const elementType = e.dataTransfer.getData('elementType')
//     setElements([...elements, {type: elementType, id: elements.length}])
//   }

//   const onDragOver = (e) => {
//     e.preventDefault();
//   }
//   return (<div className='App'>
//     <div className='sidebar'>
//       {draggableElements.map((elements, index) => (
//         <div draggable key={index} onDragStart={(e) => (e.dataTransfer.setData('elementType', elements.type))}>{elements.label}
//         </div>
//       ))}
//       </div>
//       <div className='canvas' onDrop={onDrop} onDragOver={onDragOver}>
//         {elements.map((element) => (
//           <Element key={element.id} type={element.type} />
//         ))}
//       </div>
//   </div>)
// }
// export default App;

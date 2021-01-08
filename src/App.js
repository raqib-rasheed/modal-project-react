import './App.css';
import React from 'react'
import Modal from "./modal"

function App() {
  const [modalOpen,setModalOpen] = React.useState(false)
  return (<>
    <div id="container">
      <div id="content">
        <button
        onClick={()=>setModalOpen(!modalOpen)}
        >Open Modal</button>
      </div>
    </div>
  {modalOpen && <Modal setModalOpen={setModalOpen}/>}
  </>
  );
}

export default App;

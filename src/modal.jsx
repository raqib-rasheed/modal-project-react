import React from 'react'

export default function Modal({setModalOpen}){
  const [closeModal,setCloseModal] = React.useState(false)
  if(!closeModal){
    function handleClick(){
      setModalOpen(false)
      setCloseModal(true)
    }
    return (
      <> <div className="overlay" />
    <div className="modal">
      <div className="modal-body">
      <div className="close-btn-container">
      <button
      onClick={handleClick}
      >&#10006;</button>
      </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vel nobis quasi sit cupiditate exercitationem et tempore velit ipsam voluptas!</p>
        <button
        onClick={handleClick}
        >close</button>
      </div>
    </div> </>
    )
  }else{
    return <></>
  }
}
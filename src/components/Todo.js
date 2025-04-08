import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) { 
    const [modalIsOpen,setModalOpen] = useState(false);
    function deleteHandler(){
        setModalOpen(true);
    }
    function closeModalHandler(){
      setModalOpen(false);
    }
    return (
          <div className="card">
            <h2>{props.text}</h2>
            <button className="btnDelete" onClick={deleteHandler}>DELETE</button>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onClose={closeModalHandler}/>}
          </div>    
      );
}

export default Todo;
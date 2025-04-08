function Modal(props){
    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn-confirm" onClick={props.onConfirm}>Confirm</button>
            <button className="btn btn-cancel" onClick={props.onCancel}>Cancel</button>
        </div>
    )
}

export default Modal;
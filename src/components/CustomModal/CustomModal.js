import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose} from '@fortawesome/free-solid-svg-icons'
import './CustomModal.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '10px'
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(56, 56, 56, 0.70)'
    },
  };
Modal.setAppElement('#root');
const CustomModal = ({warningMessage,closeModal,modalIsOpen,setIsOpen}) => {
    
    //modal customization
    
    return (
        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal} >
            <div className='relative d-flex justify-content-center align-items-center '>
                <FontAwesomeIcon className='close-btn text-danger fs-4' role={'button'} icon={faClose} onClick={()=>setIsOpen(false)}/>
                <p className='m-5 text-primary fs-5 fw-bold'>{warningMessage}</p>
            </div>         
        </Modal>
    );
};

export default CustomModal;
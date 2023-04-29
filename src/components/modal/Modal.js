import {useState} from "react";
import styles from './modal.module.css';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return [
    isOpen,
    toggleModal
  ]
}

const Modal = ({children}) => {

  return (
    <div className={styles.modal}>
      {children}
    </div>
  )
};

export default Modal;

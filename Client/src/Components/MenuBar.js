import React, { useState } from 'react';
import AddTransaction from './AddTransaction';
import { MdAddCircleOutline } from "react-icons/md";



const MenuBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
 

  return (
    <div className='button-container'>
      <div className="sub-buttons">
            <button className='circle-button' onClick={openModal}><MdAddCircleOutline /></button>
          </div>
      {isModalOpen && <AddTransaction closeModal={closeModal} />}
    </div>
  );
};

export default MenuBar;

import React, { useState } from 'react';
import EquipmentModal from './EquipmentModal';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { equipmentCategoriesTypeName } from '../services/helper';

const EquipmentCard = ({ info, key }) => {
  const { id, title, category, rent, available, image, location, timeperiod, borrowerid } = info;
  const [isOpen, setIsOpen] = useState(false);
  const [selecetedItem, setSelecetedItem] = useState(null)

  const openModal = () => {
    setIsOpen(true);
    setSelecetedItem(info)
  }
  const closeModal = () => {
    setIsOpen(false);
    setSelecetedItem(null);

  }


  return (
    <>
      <div className="prodCard h-100">
        <h3 onClick={() => openModal(info)}>{title}</h3>
        <img src={image} alt={title} className="card-img-top custom-card-img" />
        <div className="card-body">
          <p className="card-text">Type: {equipmentCategoriesTypeName[category]}</p>
          <p className="card-text">Rental Rate: ${rent.toFixed(2)} {" "} {timeperiod} </p>
          <p className={`card-text ${!borrowerid ? 'text-success' : 'text-danger'}`}>{!borrowerid ? 'Available' : 'Not Available'}</p>
          <p className='card-text'><LocationOnIcon /> {location}</p>
        </div>
      </div>

      {isOpen && selecetedItem &&
        <EquipmentModal closeModal={closeModal} selecetedItem={selecetedItem} />
      }
    </>
  )
}

export default EquipmentCard;
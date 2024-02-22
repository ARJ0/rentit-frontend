import React from 'react'
import Modal from 'react-modal';
import { equipmentCategoriesTypeName } from '../services/helper';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const EquipmentModal = ({ closeModal, selecetedItem }) => {
    const { id, title, category, rent, available, image, location, timeperiod, borrowerid, age, description } = selecetedItem;
    return (
        <>

            <Modal
                isOpen={true}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-close' onClick={() => closeModal()}></button>
                </div>
                <div className='d-flex w-100'>

                    <div className='w-100 prodCard border-0'>
                        <img src={image} alt={title} className="card-img-top custom-card-img" />

                    </div>
                    <div className='w-50 m-4'>

                        <div className="card-body">
                            <p className="card-text">Type: {equipmentCategoriesTypeName[category]}</p>
                            <p className="card-text">Rental Rate: ${rent.toFixed(2)} {" "} {timeperiod} </p>
                            <p className={`card-text ${!borrowerid ? 'text-success' : 'text-danger'}`}>{!borrowerid ? 'Available' : 'Not Available'}</p>
                        </div>
                        <p>Year of Manufacture: {age}</p>
                            <p>Description:</p>
                            <p className="card-text text-wrap">{description}</p>
                        <div>
                        <button type="button" className='btn brand-bg btn-lg text-white'>Add Bag</button>
                    </div>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default EquipmentModal;
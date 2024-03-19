import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { accountType, equipmentCategoriesTypeName, getlocalStorage } from '../services/helper';
import { addToCart, getCart } from '../services/actionCreator';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const EquipmentModal = ({ closeModal, selecetedItem }) => {
    const { title, category, rent, image, timeperiod, borrowerid, age, description, unavailableUntil } = selecetedItem;
    const [isLoading, setIsLoading] = useState(false)
    const _userData = getlocalStorage("loggedUser")
    const flag = accountType();
    const _addToCart = (item) => {
        const params = {
            equipmentId: item?._id,
            userId: _userData?._id
        }
        setIsLoading(true);
        addToCart(params).then((data) => {
            setIsLoading(false);
            closeModal()
        }).catch((err) => {
            setIsLoading(false);
            console.log("🚀 ~ addToCart ~ ̥:", err)

        })
    }
    return (
        <>
            <Modal
                show={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={closeModal} aria-label="Close"></button>
                {/* <button className='btn btn-light' disabled={isLoading} onClick={closeModal}>Close</button> */}
                </Modal.Header>
                <Modal.Body>
                    <div id="container">
                        <div className="product-details">

                            <h1 className='text-capitalize'>{title}</h1>
                            <div className='info-div'>
                                <p className="information">{description}</p>
                            </div>
                            <div className="control">
                                <button className="btn-model">
                                    <span className="price">$ {rent}</span>
                                    <span className="shopping-cart"><ShoppingCartCheckoutIcon /></span>
                                    <span className="buy" onClick={() => _addToCart(selecetedItem)} >Get now</span>
                                </button>

                            </div>
                        </div>

                        <div className="product-image">

                            <img src={image} alt="" />
                            <div className="info">
                                <h2> Description</h2>
                                <ul>
                                    <li><strong>Height : </strong>5 Ft </li>
                                    {/* <li><strong>Shade : </strong>Olive green</li> */}
                                    <li><strong>Decoration: </strong>balls and bells</li>
                                    <li><strong>Material: </strong>Eco-Friendly</li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <button className='btn btn-light' disabled={isLoading} onClick={closeModal}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default EquipmentModal;
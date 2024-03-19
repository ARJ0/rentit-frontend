import React, { useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { checkOutEquipment } from '../services/actionCreator';
import { equipmentCategoriesTypeName, getlocalStorage } from '../services/helper';
import { toaster } from '../services/toaster';
import moment from "moment";
import '../PDF/pdf.css'
import { PDFCSS, PDFHTML } from '../PDF/PdfGenerator';
import html2pdf from "js-html2pdf";

const CheckOutModal = ({ closeModal, item }) => {
    let userData = getlocalStorage("loggedUser")
    console.log("first *-*-* ", item)
    const containerRef = useRef();
    const [personName, setPersonName] = useState()
    const [personNumber, setPersonNumber] = useState();
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const _checkOutEquipment = () => {
        const _userData = getlocalStorage("loggedUser");
        if (!personName || !personNumber || !email) {
            toaster("Please fill all the details", "error")
            return
        }
        setIsLoading(true)
        const params = {
            equipmentId: item?.equipmentId?._id,
            userId: _userData?._id,
            isCheckOut: true,
            personName,
            personNumber,
            email
        }
        checkOutEquipment(params).then((data) => {
            console.log("🚀 ~ checkOutEquipment ~ data:", data)
            setIsLoading(false)
            toaster("Check Out Successfully!!", 'success');
            closeModal(true)
        }).catch((err) => {
            console.log("🚀 ~ checkOutEquipment ~ err:", err)
            setIsLoading(false)
        })
    }

    const downloadInvoice = () => {
        // PdfGenerator(item)
        const __html = document.getElementById('pdf')
        const pdfOptions = {
            margin: 0,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };
        const _html = PDFHTML({ item, userData })
        const invoiceHtml = `<style> ${PDFCSS} </style> ${_html}`

        const tempElement = document.createElement('div');
        tempElement.innerHTML = invoiceHtml;

        const exporter = new html2pdf(__html, pdfOptions);

        exporter.getPdf(true).then((pdf) => {
            console.log("PDF generated:", pdf);
        });
    }
    return (
        <>
            <Modal
                show={true}
                size='xl'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Pickup Person Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="my-4">
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="personName">Name :</label>
                                        <input
                                            id="personName"
                                            type="text"
                                            className="form-control"
                                            value={personName}
                                            required
                                            onChange={(e) => {
                                                if (!/^[A-Za-z]*$/.test(e.target.value)) return;
                                                setPersonName(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="personNumber">Number :</label>
                                        <input
                                            id="personNumber"
                                            type="number"
                                            className="form-control"
                                            value={personNumber}
                                            onChange={(e) => setPersonNumber(e.target.value)}
                                            required
                                            onBlur={(e) => {
                                                const numberLength = e.target.value.toString().length;
                                                if (numberLength > 10) {
                                                    setPersonNumber('')
                                                    toaster("The number is more than 10 digits", "error");
                                                    return;
                                                } else if (numberLength < 10) {
                                                    setPersonNumber('')
                                                    toaster("The number is less than 10 digits.", "error");
                                                    return;
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <div className="form-group">
                                        <label
                                            id="email-label"
                                            className="mb-1"
                                            for="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            placeholder="Enter email"
                                            className="form-control"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                            onBlur={(e) => {
                                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                                if (!emailRegex.test(e.target.value)) {
                                                    setEmail('')
                                                    toaster("Invalid Eamil !!", "error");
                                                    return;
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-light' onClick={closeModal}>Close</button>

                    <button
                        className="btn btn-primary blue"
                        onClick={downloadInvoice}
                        disabled={isLoading}
                    >
                        Download Invoice
                    </button>
                    <button
                        className="btn btn-primary blue"
                        onClick={_checkOutEquipment}
                        disabled={isLoading}
                    >
                        Check Out
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CheckOutModal
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CancelModal( { show, setShow, handleCancelEvent, handleNevermind, onDelete, dateid } ) {
    

    return (
        <>
            <Button variant="secondary" onClick={handleCancelEvent}>
                Delete This Booking
            </Button>

            <Modal backdrop='false' show={show} onHide={handleNevermind}>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Your Rendezvous</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure? This cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleNevermind}>
                        Nevermind
                    </Button>
                    <Button variant="primary" onClick={(e) => onDelete(e)} value={dateid}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CancelModal;
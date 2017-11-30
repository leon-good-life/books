import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = ({ isOpen, toggle, onConfirm }) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>Confirm Delete</ModalHeader>
    <ModalBody>Are you sure you want to delete?</ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>{' '}
      <Button color="danger" onClick={onConfirm}>
        Confirm Delete
      </Button>
    </ModalFooter>
  </Modal>
);

export default DeleteModal;

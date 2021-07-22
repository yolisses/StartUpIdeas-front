import React, { useState } from 'react';

import { Modal } from '../components/Modal';

export const ModalContext = React.createContext({});

export function ModalProvider(props) {
	const [modalContent, setModalContent] = useState('');
	const [modalVisible, setModalVisible] = useState(false);

	function showModal(children) {
		document.querySelector('body').style.overflow = 'hidden';
		setModalContent(children);
		setModalVisible(true);
	}

	function closeModal() {
		document.querySelector('body').style.overflowY = 'auto';
		setModalVisible(false);
	}

	return (
		<ModalContext.Provider value={{ showModal, closeModal }}>
			<Modal visible={modalVisible} close={closeModal}>
				{modalContent}
			</Modal>
			{props.children}
		</ModalContext.Provider>
	);
}

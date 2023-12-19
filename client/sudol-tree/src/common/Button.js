import React, { useState } from "react";
import { styled } from "styled-components";
import Modal from './Modal';

export default function Button() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
        <ButtonContainer onClick={openModal}>
            작성하기
        </ButtonContainer>
        {isModalOpen && <Modal onClose={closeModal} />}
        </>
    )
}

const ButtonContainer = styled.button`
    border-radius: 10px;
    padding: 16px 40px;
    font-size: 24px;
    color: #333;
`
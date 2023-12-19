import React, { useState } from "react";
import styled from "styled-components";
import ImageType1 from '../assets/images/sudol.e.png';
import ImageType2 from '../assets/images/sudol.e.png';
import ImageType3 from '../assets/images/sudol.e.png';
import ImageType4 from '../assets/images/sudol.e.png';


const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(51, 51, 51, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    width: 160px;
    height: 160px;
    border-radius: 8px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 60px;
    right: 40px;
    padding: 8px 32px;
`;

const RowContainer = styled.div`
    display: flex;
    bottom: 40px;
    position: absolute;
`;

const ColumnContainer = styled.div`
    flex: 1;
    margin: 10px;
`;

const Title = styled.p`
    position: absolute;
    top: 120px;
    font-size: 50px;
    color: white;
`;

const SelectImage = styled.div`
    position: absolute;
    width: 240px;
    height: 240px;
    margin-bottom: 140px;
    background-color: white;
    border-radius: 8px;
`;

const images = [
    ImageType1,
    ImageType2,
    ImageType3,
    ImageType4
];


const Modal = ({ onClose }) => {
    const [selectedImage, setSelectImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectImage(images[index]);
    }


    return (
        <ModalOverlay>
            <CloseButton onClick={onClose}>닫기</CloseButton>
            <Title>원하는 선물을 <br /> 선택해주세요!</Title>
            <SelectImage style={{ backgroundImage: `url(${selectedImage})`}}></SelectImage>
            <RowContainer>
                <ColumnContainer>
                    <ModalContent onClick= {() => handleImageClick(0)} style={{marginBottom: '20px', backgroundImage: `url(${ImageType1})`, backgroundSize: 'cover'}} >
                    </ModalContent>
                    <ModalContent onClick= {() => handleImageClick(1)} style={{backgroundImage: `url(${ImageType2})`, backgroundSize: 'cover'}}></ModalContent>
            </ColumnContainer>
                <ColumnContainer>
                    <ModalContent onClick= {() => handleImageClick(2)} style={{marginBottom: '20px', backgroundImage: `url(${ImageType3})`, backgroundSize: 'cover'}}></ModalContent>
                    <ModalContent onClick= {() => handleImageClick(3)} style={{backgroundImage: `url(${ImageType4})`, backgroundSize: 'cover'}}></ModalContent>
                </ColumnContainer>
            </RowContainer>
            
            
            
        </ModalOverlay>
    )
}

export default Modal;
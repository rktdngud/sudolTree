import React, { useState } from "react";
import styled from "styled-components";
import WriteModal from './WriteModal';
import ImageType1 from '../../assets/images/sudol.e.png';
import ImageType2 from '../../assets/images/sudol.e.png';
import ImageType3 from '../../assets/images/sudol.e.png';
import ImageType4 from '../../assets/images/sudol.e.png';
import images from './Images';


const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 375px;
    height: 812px;
    // background: rgba(51, 51, 51, 0.9);
    background: #777;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    width: 120px;
    height: 120px;
    border-radius: 8px;
    background-size: cover;
`;

const CloseButton = styled.button`
    position: absolute;
    bottom: 40px;
    left: 20px;
    width: 100px;
    height: 48px;
    box-sizing:border-box;
    border: 1px solid white;
    border-radius: 10px;
    
    background: none;
`;

const NextButton = styled.button`
    position: absolute;
    bottom: 40px;
    right: 20px;
    width: 220px;
    height: 48px;
    border-radius: 10px;
    border: none;
    background: #DBC3A0;
`;

const RowContainer = styled.div`
    display: flex;
    bottom: 130px;
    position: absolute;
`;

const ColumnContainer = styled.div`
    flex: 1;
    margin: 10px;
`;

const Title = styled.p`
    position: absolute;
    top: 60px;
    font-size: 26px;
    color: white;
    text-align: center;
    font-weight: bold;
`;

const SelectImage = styled.div`
    position: absolute;
    width: 160px;
    height: 160px;
    top: 190px;
    margin-bottom: 240px;
    background-color: white;
    background-size: cover;
    border-radius: 8px;
`;

const ButtonText = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: white;
`;

const Gauge = styled.div`
    position: absolute;
    background-color: white;
    top: 0;
    width: 100%;
    heigth: 100px;
`;

const SelectedCurrentImage = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    top: 100px;
    left: 20px;
    background-size: cover;
    border-radius: 10px;
`;

// const images = [
//     ImageType1,
//     ImageType2,
//     ImageType3,
//     ImageType4
// ];

const Modal = ({ onClose }) => {
    const [selectedImage, setSelectImage] = useState(null);
    const [isNextModalOpen, setIsNextModalOpen] = useState(false);

    const handleImageClick = (index) => {
        setSelectImage(images[index]);
    }

    const handleNextButtonClick = () => {
        setIsNextModalOpen(true);
    }

    const handleNextModalClose = () => {
        setIsNextModalOpen(false);

    }

    

    console.log(selectedImage);

    if(isNextModalOpen) {
        return (
            <ModalOverlay>
                <Gauge><div style={{width: '100%', backgroundColor: '#DBC3A0'}}><br/></div></Gauge>
                {/* <Title>선물 고마워!!</Title> */}
                <SelectedCurrentImage style={{ backgroundImage: `url(${selectedImage})`}}></SelectedCurrentImage>
                <CloseButton onClick={handleNextModalClose}><ButtonText>이전</ButtonText></CloseButton>
                {/* <NextButton onClick={onClose}><ButtonText>선물 보내기</ButtonText></NextButton> */}
                <WriteModal onClose={onClose}/>
            </ModalOverlay>
            
        )
    }


    return (
        <ModalOverlay>
            <Gauge><div style={{width: '50%', backgroundColor: '#DBC3A0'}}><br/></div></Gauge>
            <CloseButton onClick={onClose}><ButtonText>닫기</ButtonText></CloseButton>
            <Title> <span style={{color: 'brown'}}>수돌이</span>에게 <br/>주고싶은  <br />  선물을 선택해주세요!</Title>
            <SelectImage style={{ backgroundImage: `url(${selectedImage})`}}></SelectImage>
            <RowContainer>
                <ColumnContainer>
                    <ModalContent onClick= {() => handleImageClick(0)} style={{marginBottom: '20px', backgroundImage: `url(${ImageType1})`}} >
                    </ModalContent>
                    <ModalContent onClick= {() => handleImageClick(1)} style={{backgroundImage: `url(${ImageType2})`}}></ModalContent>
            </ColumnContainer>
                <ColumnContainer>
                    <ModalContent onClick= {() => handleImageClick(2)} style={{marginBottom: '20px', backgroundImage: `url(${ImageType3})`}}></ModalContent>
                    <ModalContent onClick= {() => handleImageClick(3)} style={{backgroundImage: `url(${ImageType4})`}}></ModalContent>
                </ColumnContainer>
            </RowContainer>
            <NextButton onClick={handleNextButtonClick} disabled={selectedImage == null} style={{ opacity: selectedImage === null ? 0.5 : 1 }}><ButtonText>다음</ButtonText></NextButton>
        </ModalOverlay>
    )
}

export default Modal;
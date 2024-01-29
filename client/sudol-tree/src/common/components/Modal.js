import React, { useState } from "react";
import styled from "styled-components";
import WriteModal from './WriteModal';
import ImageType1 from '../../assets/images/sudols/sudol1.png';
import ImageType2 from '../../assets/images/sudols/sudol2.png';
import ImageType3 from '../../assets/images/sudols/sudol3.png';
import ImageType4 from '../../assets/images/sudols/sudol4.png';
import Image2 from '../../assets/images/image2.png';
import images from './Images';


const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFF1B7;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    border-radius: 60px;
    background-size: cover;
    cursor: pointer;
`;

const CloseButton = styled.button`
    position: absolute;
    bottom: 40px;
    left: 20px;
    // width: 100px;
    width: 24%;
    // height: 48px;
    height: 7%;
    box-sizing:border-box;
    border: 1px solid white;
    border-radius: 10px;
    background: none;
    cursor: pointer;
`;

const NextButton = styled.button`
    position: absolute;
    bottom: 40px;
    right: 20px;
    // width: 220px;
    width: 60%;
    // height: 48px;
    height: 7%;
    border-radius: 10px;
    border: none;
    background: #DBC3A0;
    cursor: pointer;
`;

const RowContainer = styled.div`
    display: flex;
    top: 48%;
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
    border: 4px solid green;
    background-size: cover;
    border-radius: 80px;
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


const Modal = ({ onClose }) => {
    const [selectedImage, setSelectImage] = useState(null);
    const [isNextModalOpen, setIsNextModalOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(null);

    const handleImageClick = (index) => {
        setSelectImage(images[index]);
        setImageIndex(index);
        
    }

    const handleNextButtonClick = () => {
        setIsNextModalOpen(true);
    }

    const handleNextModalClose = () => {
        setIsNextModalOpen(false);

    }
    console.log(imageIndex);

    if(isNextModalOpen) {
        return (
            <ModalOverlay>
                <Gauge><div style={{width: '100%', backgroundColor: '#DBC3A0', transition: "width 1s ease-in-out"}}><br/></div></Gauge>
                {/* <Title>선물 고마워!!</Title> */}
                <SelectedCurrentImage style={{ backgroundImage: `url(${selectedImage})`}}></SelectedCurrentImage>
                <CloseButton onClick={handleNextModalClose}><ButtonText>이전</ButtonText></CloseButton>
                {/* <NextButton onClick={onClose}><ButtonText>선물 보내기</ButtonText></NextButton> */}
                <WriteModal imgIndex={imageIndex}/>
            </ModalOverlay>
            
        )
    }


    return (
        <ModalOverlay style={{ backgroundImage: `url(${Image2})`}}>
            <Gauge><div style={{width: '50%', backgroundColor: '#DBC3A0', transition: "width 1s ease-in-out"}}><br/></div></Gauge>
            <CloseButton onClick={onClose}><ButtonText>닫기</ButtonText></CloseButton>
            <Title> <span style={{color: '#AB9A8A'}}>수돌이</span>에게 <br/>주고싶은  <br />  선물을 선택해주세요!</Title>
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
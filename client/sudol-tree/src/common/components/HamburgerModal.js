import React, {useState} from "react";
import styled from "styled-components";
import OpenButton from '../../assets/images/burger-bar.png';
import CloseButton from '../../assets/images/close.png';

const HamburgerContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%; 
    height: 100%;
`;

const HamburgerButton = styled.div`
    position: absolute;
    width: 48px;
    height: 48px;
    background-color: none;
    top: 28px;
    right: 24px;
    padding: 20px;
    background-size: cover;
    cursor: pointer;
`;

const Modal = styled.div`
    position: absolute;
    width: 240px;
    height: 100%;
    top: 0;
    right: 0;
    background-color: white;
`;

const MenuContainer = styled.div`
    position: absolute;
    background-color: gray;
    width: 100%;
    height: 100px;
    top: 140px;
    right: 0;
`;

const Menu = styled.p`
    font-weight: bold;
    font-size: 20px;
    text-align: right;
    margin: 20px 24px;
    cursor: pointer;
`;



const HamburgerModal = ({openPage, closePage, closeHam }) => {
    const [clicked, setClicked] = useState(true);
    console.log(clicked);

    const handleOpenModal = () => {
        if(clicked) {
            closeHam();
            setClicked(false);
        } else {
            setClicked(true);
        }
    };

    const handlePage = () => {
        openPage();
        handleOpenModal();
    }
    
    const handleClosePage = () => {
        closePage();
        handleOpenModal();
    }

    return(
        <HamburgerContainer>
            {/* <HamburgerButton onClick={handleOpenModal} style={{backgroundImage: `url(${OpenButton})`}} /> */}
            
            <Modal>
                <HamburgerButton onClick={handleOpenModal} style={{backgroundImage: `url(${CloseButton})`, scale: '0.7'}} />
                <MenuContainer>
                    <Menu onClick= {handleClosePage}>수돌이 선물</Menu>
                    <Menu onClick={handlePage}>수돌이 응원</Menu>
                </MenuContainer>
            </Modal>
            
           
        </HamburgerContainer>
    );
}

export default HamburgerModal;
import React, {useState} from 'react';
import Home from '../pages/Home/views/Home';
import Community from '../pages/Home/views/Community';
import HamburgerModal from '../common/components/HamburgerModal';
import CloseButton from '../assets/images/burger-bar.png';
import styled from 'styled-components';

const HamburgerButton = styled.div`
    opacity:0.8;
    position: absolute;
    width: 48px;
    height: 48px;
    padding: 20px;
    background-color: none;
    top: 28px;
    right: 24px;
    background-size: cover;
    cursor: pointer;
`;

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export default function Main() {
    const [communityPage, setCommunityPage] = useState(false);
    const [ham, setHam] = useState(false);

    const handleOpenCommunityPage = () => {
        setCommunityPage(true);
    }

    const handleCloseCommunityPage = () => {
        setCommunityPage(false);
    }

    const handleHamburger = () => {
        setHam(true);
    }

    const handleCloseHamburger = () => {
        setHam(false);
    }
    
    return (
        <Container>
            {!communityPage &&            
            <Home />
            }

            {communityPage&& 
            <Community />
            }
            
            <HamburgerButton onClick={handleHamburger} style={{backgroundImage: `url(${CloseButton})`}} />
            {ham &&
            <HamburgerModal openPage={handleOpenCommunityPage} closePage={handleCloseCommunityPage} closeHam={handleCloseHamburger} />
            }
            
        </Container>
    );
}

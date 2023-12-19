import {useState} from 'react';
import styled from 'styled-components';
import background_image from '../../../assets/images/background.png';


export default function Home() {

    return (
        <Background />
          
        
    );
}

const Background = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${background_image});
    background-size: cover;
`;

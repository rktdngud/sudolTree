import {useState} from 'react';
import styled from 'styled-components';
import background_image from '../../../assets/images/background.png';
import Button from '../../../common/Button';


export default function Home() {

    return (
        <>
            <Container>
                <Background />
                <ButtonContainer>
                    <Button />
                </ButtonContainer>
            </Container>
        </>

    );
}

const Background = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${background_image});
    background-size: cover;
`;

const Container = styled.div`
    position: relative;
`;

const ButtonContainer = styled.div`
    position: absolute;
    right: 30px;
    bottom: 30px;
`


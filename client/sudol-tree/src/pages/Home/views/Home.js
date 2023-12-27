import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import background_image from '../../../assets/images/background.png';
import Button from '../../../common/components/Button';
import Images from '../../../common/components/Images';
// import HamburgerModal from '../../../common/components/HamburgerModal';

const Background = styled.div`
    height: 700px;
    width: 100vh;
    background-image: url(${background_image});
    background-size: cover;
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
`;

const ButtonContainer = styled.div`
    position: absolute;
    right: 24px;
    bottom: 24px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 30px;
  justify-content: center; 
  align-items: center;
`;

const DataItem = styled.div`
  border: none;
  width: 100px;
  height: 140px;
  background-size: cover;
  margin: 20px;
  border-radius: 8px;
`;

const Nickname = styled.p`
  width: 100px;
  color: white;
  text-align: center;
`;

const PresentImg = styled.img`
  border-radius: 20px;
  width: 100px;
  height: 100px;
`


export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8080/treeBoards');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <>
            <Container style={{backgroundImage: `url(${background_image})`}}>
                {/* <Background /> */}
                <DataContainer>
                    {data.map((item, index) => (
                        <DataItem key={index}>
                          <PresentImg src={Images[item.imageIndex]}></PresentImg>
                          <Nickname>{item.nickname}</Nickname>
                        </DataItem>
                    ))}
                </DataContainer>
                <ButtonContainer>
                    <Button />
                </ButtonContainer>
                {/* <HamburgerModal /> */}
                
            </Container>
        </>

    );
}



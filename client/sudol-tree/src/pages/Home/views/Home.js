import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import background_image from '../../../assets/images/background.png';
import Button from '../../../common/components/Button';
import Images from '../../../common/components/Images';

const Background = styled.div`
    height: 812px;
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
  height: 100px;
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
            <Container>
                <Background />
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
                
            </Container>
        </>

    );
}



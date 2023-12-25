import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import background_image from '../../../assets/images/background.png';
import Button from '../../../common/components/Button';


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
                        <p>Nickname: {item.nickname}</p>
                        <p>Contents: {item.contents}</p>
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
  position: absolute;
  top: 30px;
  left: 30px;
`;

const DataItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

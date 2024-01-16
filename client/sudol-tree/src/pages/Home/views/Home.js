import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import background_image from '../../../assets/images/background.png';
import Button from '../../../common/components/Button';
import Images from '../../../common/components/Images';
import Next from '../../../assets/images/next.png';
import Left from '../../../assets/images/left.png';
// import HamburgerModal from '../../../common/components/HamburgerModal';

// const Background = styled.div`
//     height: 700px;
//     width: 100vh;
//     background-image: url(${background_image});
//     background-size: cover;
// `;

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
  
  width: 300px;
  justify-content: center; 
  align-items: center;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 
`;

const DataItem = styled.div`
  border: none;
  width: 100px;
  height: 140px;
  background-size: cover;
  margin: 1vh;
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
`;

const PageButton = styled.div`
    position: absolute;
    width: 60px;
    height: 100px;
    background-color: none;
    background-size: cover;
    background-position: center; 
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;


export default function Home() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(6);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/treeBoards?page=${page}&size=${pageSize}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const jsonData = await response.json();
          setData(jsonData.content);
          setTotalPages(jsonData.totalPages);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [page, pageSize]);

    console.log(totalPages);

    const handlePageChange = (newPage) => {
      setPage(newPage);
    }


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
                { page != 0 && <PageButton onClick={() => handlePageChange(page-1)} style={{backgroundImage: `url(${Left})`, left: '0'}} />}
                { page+1 != totalPages && totalPages != 0 && <PageButton onClick={() => handlePageChange(page+1)} style={{backgroundImage: `url(${Next})`, right: '0'}} />}
                <ButtonContainer>
                    <Button />
                </ButtonContainer>
                {/* <HamburgerModal /> */}
                
            </Container>
        </>

    );
}



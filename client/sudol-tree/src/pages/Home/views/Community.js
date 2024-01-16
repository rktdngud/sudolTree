import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import CommunityForm from "../../../common/components/CommunityForm";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: skyblue;
    overflow-y:scroll;
`;

const Title = styled.p`
    position: absolute;
    font-weight: bold;
    font-size: 60px;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
`;

const DataContainer = styled.div`
    position: absolute;
    top: 300px;
    width: 300px;
    height: auto;
    left: 50%; 
    transform: translate(-50%); 
`;

const DataItem = styled.div`
    border: none;
    width: 300px;
    height: 72px;
    background-size: cover;
    margin: none;
    border-radius: 8px;
    background-color: black;
    margin-bottom: 40px;

`;

const Nickname = styled.p`
    color: white;
`;


export default function Community() {

    const [data, setData] = useState([]);

    const [page, setPage] = useState(0);
    const [windowHeight, setWindowHeight] = useState(document.body.scrollHeight*2);
    const [pageSize, setPageSize] = useState(6);

    const dataContainerRef = useRef(null);

    const scrollToTop = () => {
        const scroller = document.getElementById("scroller");
        if (scroller) {
            scroller.scrollTo({
            top: windowHeight,
            behavior: 'smooth',
            });
        }
      }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/postBoards`);
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
    }, [data]);

    useEffect(() => {
        // DataContainer의 높이 측정
        const containerHeight = dataContainerRef.current.clientHeight;
        setWindowHeight(containerHeight);
      }, [data]);
    


    return (
        <>
            <Container id="scroller">
                <Title onClick={scrollToTop}>난 아래에 있어</Title>
                <DataContainer ref={dataContainerRef} style={{height: (data.length+1)*114}}>
                    {data.map((item, index) => (
                        <DataItem key={index}>
                            <Nickname>{item.nickname}</Nickname>
                        </DataItem>
                    ))}
                    <div><CommunityForm onScroll ={scrollToTop} /></div>
                </DataContainer>
            </Container>
        </>
    )
}
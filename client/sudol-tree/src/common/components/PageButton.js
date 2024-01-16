import React from "react";
import styled from "styled-components";

const Button = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: white;
`;

const PageButton = ({backgroundImg, arrow}) => {

    return(
        <Button style={{left: '50%'}}></Button>
    )
}

export default PageButton;
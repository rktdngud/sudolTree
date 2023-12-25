import React, {useState} from "react";
import styled from "styled-components";

const CloseButton = styled.button`
    position: absolute;
    bottom: 40px;
    left: 20px;
    width: 100px;
    height: 48px;
    box-sizing:border-box;
    border: 1px solid white;
    border-radius: 10px;
    
    background: none;
`;

const NextButton = styled.button`
    position: absolute;
    bottom: 40px;
    right: 20px;
    width: 220px;
    height: 48px;
    border-radius: 10px;
    border: none;
    background: #DBC3A0;
`;

const WriteModal = ({onClose}) => {
    const [letterTitle, setLetterTitle] = useState("");
    const [letterContent, setLetterContent] = useState("");

    const handleTitleChange = (e) => {
        setLetterTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setLetterContent(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const apiEndpoint = "http://localhost:8080/treeBoards";

        // POST
        fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nickname: letterTitle, contents: letterContent }),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Letter posted successfully:", data);
                // onClose();
                window.location.reload();
            })
            .catch(error => {
                console.error("Error posting letter:", error);
            });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                nickname:
                <input
                    type="text"
                    value={letterTitle}
                    onChange={handleTitleChange}
                />
            </label>
            <br />
            <label>
                contents:
                <textarea
                    value={letterContent}
                    onChange={handleContentChange}
                />
            </label>
            <br />
            <NextButton type="button" onClick={handleFormSubmit} disabled={letterTitle == "" || letterContent == ""} style={{ opacity: letterTitle === "" || letterContent === "" ? 0.5 : 1 }}>Post Letter</NextButton>
        </form>
    );
}

export default WriteModal;
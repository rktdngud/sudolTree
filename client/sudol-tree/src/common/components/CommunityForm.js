import React , {useState} from "react";
import styled from "styled-components";

const Form = styled.form`
    // position: absolute;
    // width: 400px;
    width: 300px;
    left: 50%;
    bottom: 20%;
    margin-top: 40px;
    margin-bottom: 60vw;
    margin-left: 50%;
    transform: translate( -50%, -50% );
    display: flex;
    flex-direction: row;
`;

// const Form = styled.form`
//     position: fixed;
//     width: 400px;
//     left: 50%;
//     bottom: 8%;
//     transform: translate( -50% );
//     display: flex;
//     flex-direction: row;
// `;


const Button = styled.button`
    // width: 120px;
    width: 90px;
    height: 72px;
    padding: 10px 20px;
    background: #DBC3A0;
    color: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
`;

const LeftDiv = styled.div`
    // width:280px;
    width:210px;
    height: 72px;
`;

const RightDiv = styled.div`
    // width: 120px;
    width:90px;
    height: 72px;
`;

const Input = styled.input`
    // width: 140px;
    width: 105px;
    height: 24px;
`;

const Textarea = styled.textarea`
    width: 210px;
    // width: 280px;
    height: 48px;
`;

const CommunityForm = ({onScroll}) => {

    const [letterTitle, setLetterTitle] = useState("");
    const [letterContent, setLetterContent] = useState("");
    const [letterPassword, setLetterPassword] = useState("");


    const handleTitleChange = (e) => {
        setLetterTitle(e.target.value);
    };

    const handlePasswordChange = (e) => {
       const input = e.target.value;
    // 정규 표현식을 사용하여 숫자 이외의 문자를 제거
    const numericInput = input.replace(/[^0-9]/g, '');
    setLetterPassword(numericInput);
    };

    const handleContentChange = (e) => {
        setLetterContent(e.target.value);
    };

    const onClickEvents = (e) => {
        handleFormSubmit(e);
        onScroll();
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const apiEndpoint = "http://localhost:8080/postBoards";

        console.log("letterTitle:", letterTitle);
        console.log("letterContent:", letterContent);
        console.log("letterPassword:", letterPassword);

        // POST
        fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nickname: letterTitle, contents: letterContent, password: letterPassword}),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Letter posted successfully:", data);
                // onClose();
                onScroll();
                // window.location.reload();
            })
            .catch(error => {
                console.error("Error posting letter:", error);
                alert("서버 연결에 실패했어요");
                
            });
    };

    return (
        <>
        <Form onSubmit={handleFormSubmit}>
            <LeftDiv>
            <label>
                <Input
                    type="text"
                    maxLength="5"
                    placeholder="닉네임 (최대 5자)"
                    value={letterTitle}
                    onChange={handleTitleChange}
                />
            </label>
            <label>
                <Input
                    type="password"
                    maxLength="4"
                    placeholder="비밀번호 (최대 4자)"
                    value={letterPassword}
                    onChange={handlePasswordChange}
                />
            </label>
            <br />
            <label>
                <Textarea
                    value={letterContent}
                    placeholder="응원의 한 마디!"
                    onChange={handleContentChange}
                />
            </label>
            </LeftDiv>
            <RightDiv>
                <Button type="button" onClick={onClickEvents} disabled={letterTitle === "" || letterContent === "" || letterPassword === "" } style={{ opacity: letterTitle === "" || letterContent === "" ? 0.5 : 1 }}>전송</Button>
            </RightDiv>
        </Form>
        </>
    )
}

export default CommunityForm;
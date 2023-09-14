import React, { useState } from "react";
import styled from "@emotion/styled";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function board() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          },
        },
      });
      console.log(result);
    }
  };

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeContent(event) {
    setContents(event.target.value);
  }

  return (
    <Base>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Txt>작성자</Txt>
          <WriterInput
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeWriter}
          />
          <Error>{writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Txt>비밀번호</Txt>
          <WriterInput
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={onChangePassword}
          />
          <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Txt>제목</Txt>
        <Input
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        />
        <Error>{titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Txt>내용</Txt>
        <ContentInput
          type="text"
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        />
        <Error>{contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Txt>주소</Txt>
        <PostNumWrapper>
          <PostNumInput placeholder="07250" />
          <PostNumSearch>우편번호 검색</PostNumSearch>
        </PostNumWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Txt>유투브</Txt>
        <Input type="text" placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Txt>사진 첨부</Txt>
        <ButtonWrapper>
          <UploadButton>
            <ButtonIcon>+</ButtonIcon>
            <ButtonTxt>Upload</ButtonTxt>
          </UploadButton>
          <UploadButton>
            <ButtonIcon>+</ButtonIcon>
            <ButtonTxt>Upload</ButtonTxt>
          </UploadButton>
          <UploadButton>
            <ButtonIcon>+</ButtonIcon>
            <ButtonTxt>Upload</ButtonTxt>
          </UploadButton>
        </ButtonWrapper>
      </InputWrapper>
      <InputWrapper>
        <Txt>메인 설정</Txt>
        <RadioWrapper>
          <RadioButton type="radio" id="youtube" name="setting" />
          <RadioLabel htmlFor="youtube">유투브</RadioLabel>
          <RadioButton type="radio" id="image" name="setting" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </RadioWrapper>
      </InputWrapper>
      <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
    </Base>
  );
}

const Base = styled.div`
  width: 1200px;
  height: 1847px;
  border: 1px solid black;
  margin: 100px;
  padding: 80px 102px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;
const Title = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
`;

const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 40px;
`;
const Txt = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;
const WriterInput = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;
const Input = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
const ContentInput = styled.input`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;
const PostNumWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const PostNumInput = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
const PostNumSearch = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
`;
const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
const ButtonWrapper = styled.div`
  width: 996px;
`;
const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;
const ButtonIcon = styled.div``;
const ButtonTxt = styled.div``;
const RadioWrapper = styled.div`
  width: 996px;
`;
const RadioButton = styled.input`
  cursor: pointer;
`;
const RadioLabel = styled.label`
  margin: 0 20px 8px;
  font-weight: 500;
  cursor: pointer;
`;
const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background: yellow;
  font-size: 16px;
  font-weight: 500;
  margin: 0 12px;
  cursor: pointer;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

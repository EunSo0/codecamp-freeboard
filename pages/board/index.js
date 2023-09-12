import styled from "@emotion/styled";

const Base = styled.div`
  width: 1200px;
  height: 1847px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const WriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Txt = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 4px;
`;
const WriterInput = styled.input`
  width: 486px;
  height: 52px;
  margin-bottom: 40px;
`;
const Input = styled.input`
  width: 996px;
  height: 52px;
  margin-bottom: 40px;
`;
const ContentInput = styled.input`
  width: 996px;
  height: 480px;
  margin-bottom: 40px;
`;
const PostNumWrapper = styled.div``;
const PostNumInput = styled.input`
  width: 77px;
  height: 52px;
  margin-bottom: 40px;
`;
const PostNumSearch = styled.button`
  display: inline-flex;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #000;
  color: #fff;
`;
const ButtonWrapper = styled.div``;
const UploadButton = styled.button`
  width: 78px;
  height: 78px;
`;
const ButtonIcon = styled.div``;
const ButtonTxt = styled.div``;
const RadioWrapper = styled.div``;
const Radio = styled.input``;
const Button = styled.div`
  width: 100%;
  height: auto;
  display: inline-flex;
  padding: 14px 60px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #ffd600;
  font-size: 16px;
  font-weight: 500;
`;

export default function board() {
  return (
    <Base>
      <Title>게시물 등록</Title>
      <Wrapper>
        <WriterWrapper>
          <Txt>작성자</Txt>
          <WriterInput></WriterInput>
        </WriterWrapper>
        <WriterWrapper>
          <Txt>비밀번호</Txt>
          <WriterInput></WriterInput>
        </WriterWrapper>
      </Wrapper>
      <Txt>제목</Txt>
      <Input></Input>
      <Txt>내용</Txt>
      <ContentInput></ContentInput>
      <Txt>주소</Txt>
      <PostNumWrapper>
        <PostNumInput></PostNumInput>
        <PostNumSearch>우편번호 검색</PostNumSearch>
      </PostNumWrapper>
      <Input />
      <Input />
      <Txt>유투브</Txt>
      <Input></Input>
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
      <Txt>메인 설정</Txt>
      <RadioWrapper>
        <Radio type="radio" id="setting" /> 유투브
        <Radio type="radio" id="setting" /> 사진
      </RadioWrapper>
      <Button>등록하기</Button>
    </Base>
  );
}

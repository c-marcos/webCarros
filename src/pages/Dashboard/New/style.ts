import styled from "@emotion/styled";

export const NewStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  height: 100%;
`;

export const Form = styled.form`
  margin: 0 auto;

  .upload {
    background-color: #FFFFFF;
    padding: 15px;
    border-radius: 8px;
    width: 100%;
  };
`;

export const Main = styled.main`
  flex: 1;
  width: 100%
`;

export const UploadImg =  styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  width: 220px;
  height: 154px;
  cursor: pointer;

  div{
    display: none;
  };
`;

export const ContainerFildes = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
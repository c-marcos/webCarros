import styled from "@emotion/styled";

export const NewStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
`;

export const Form = styled.form`
  margin: 0 auto;

  .upload {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 8px;
    width: 100%;
    gap: 2rem;

    .img{
        max-width: 220px;
        border-radius: 8px;
        img{
          border-radius: 8px;
        }
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
`;

export const UploadImg = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 220px;
  height: 154px;
  cursor: pointer;

  input[type="file"] {
    opacity: 0;
    position: absolute;
    width: 220px;
    height: 154px;
    cursor: pointer;
  }
`;

export const ContainerFildes = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #ffffff;

  border-radius: 8px;
  padding: 2rem 1rem;
  margin-top: 2rem;
  gap: 2rem;

  label {
    font-weight: 600;
    font-size: 18px;
  }

  .cadastrar {
    grid-column: 1/13;
  }

  .nome {
    grid-column: 1/13;
  }
  .modelo {
    grid-column: 1/13;
  }
  .ano {
    grid-column: 1/6;
  }
  .km {
    grid-column: 6/11;
  }
  .valor {
    grid-column: 1/13;
  }
  .cidade {
    grid-column: 1/13;
  }
  .whats {
    grid-column: 1/6;
  }
  .descricao {
    grid-column: 1/13;
  }
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #ffffff;
  max-width: 400px;
  font-size: 1rem;

  .local {
    border-top: 2px solid #cccccc;
    padding: 10px;
    color: rgb(95, 95, 95);
  }
`;

export const ImgBox = styled.div`
  img {
    border-radius: 8px;
    transition: all 1s;
    :hover {
      transform: scale(105%);
      cursor: pointer;
    }
  }
`;

export const Descriptions = styled.div`
  padding: 10px;
  font-weight: 200;

  h4 {
    margin-bottom: 8px;
  }

  .info {
    margin-bottom: 2rem;
    color: rgb(95, 95, 95);
    div {
      display: inline-block;
      width: 2px;
      height: 2px;
      border: solid;
      border-radius: 50%;
      color: rgb(0, 0, 0);
    }
  }

  .pricer {
    font-weight: 900;
    font-size: 22px;
  }
`;

import styled from "@emotion/styled";

interface Props {
  validated: boolean;
  touched: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  position: relative;
  .icon {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 12px;
    bottom: 15px;
  }
`;

export const InputBox = styled.textarea<Props>`
  display: flex;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 8px;
  font-size: 1.2rem;
  outline: none;
  border: 2px solid
    ${(props) =>
      !props.touched
        ? "#222222"
        : props.validated && props.touched
        ? "#2B825C"
        : "#D1493D"};
  transition: 1s;

  :focus {
    outline: none;
    border-color: ${(props) =>
      !props.touched
        ? "rgb(173, 139, 14)"
        : props.validated && props.touched
        ? "rgb(13, 85, 54)"
        : "#861208"};
    background: white;
    box-shadow: 0 0 0 3px
      ${(props) =>
        !props.touched
          ? "rgb(255, 219, 88)"
          : props.validated && props.touched
          ? "rgb(42, 185, 123)"
          : "rgb(253, 67, 50)"};
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: -24px;
  left: 0;
  font-size: 13px;
  color: red;
`;

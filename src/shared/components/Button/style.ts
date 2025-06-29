import styled from "@emotion/styled";

interface Props {
  bgColor?: string;
  w?: string;
}

export const ButtonStyle = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#e11138")};
  transition: all 1s;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 800;
  max-width: ${(props) => (props.w ? props.w : "100%")};
  width: 100%;
  height: 50px;
  cursor: pointer;
  padding: 8px;

  :hover,
  :focus {
    background: ${(props) => (props.bgColor ? props.bgColor : "#e11138")};
    box-shadow: 0 0 0 3px var(--color-light),
      0 0 0 4px ${(props) => (props.bgColor ? props.bgColor : "#e11138")};
    outline: none;
  }

  button:active {
    box-shadow: 0 0 0 3px
        ${(props) => (props.bgColor ? props.bgColor : "#e11138")},
      0 0 0 4px ${(props) => (props.bgColor ? props.bgColor : "#e11138")};
  }

  button:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => (props.theme === 'primary' ? 'none' : '1px solid #fff')};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  border-radius: 30px;
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;

  &:hover {
    cursor: pointer;
    ${props => props.theme === 'primary' ? `opacity: 0.8`: `background: blue; color: orange;
      `
    }
  }

  &:active {
    opacity: 0.5;
  }


  
`;

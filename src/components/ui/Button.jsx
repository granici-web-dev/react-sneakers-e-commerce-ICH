import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: rgba(233, 233, 233, 0.5);
  border-radius: 100%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    background-color: #000;
    color: #fff;
  }
`;

function Button({onClick, title}) {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
}

export default Button;
import styled from "styled-components";

const StyledHeadline = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(234, 234, 234, 1);
  padding-bottom: 1.5rem;
`;

function Headline({title, style}) {
  return <StyledHeadline style={style}>{title}</StyledHeadline>
}

export default Headline;
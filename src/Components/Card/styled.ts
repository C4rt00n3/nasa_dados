import styled from "styled-components";
interface istyledLi {
  IMG: string;
}
export const StyledCard = styled.li<istyledLi>`
  margin-top: 16px;
  width: 380px;
  height: 340px;

  background: url(${({ IMG }) => IMG});
  background-repeat: no-repeat;
  background-size: cover;

  :hover {
    border: solid 1px var(--Withe);
  }

  img {
    width: 100%;
    height: 100%;
  }

  h3 {
    margin-top: -1.4rem;
    margin-left: 5px;
    color: var(--Withe);
  }
`;

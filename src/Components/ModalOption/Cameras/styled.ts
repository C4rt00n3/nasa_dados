import styled from "styled-components";

export const StyledDivCameras = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  ul {
    width: 90%;
    display: flex;
    flex-wrap: wrap;

    gap: 10px;
  }
  .blue {
    background-color: var(--Information);
  }
  li {
    border: 1px solid var(--Information);
    padding: 10px;
    border-radius: 24px;

    max-width: 130px;
    max-height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: var(--Information);
      opacity: 60%;
      max-width: 150px;
    }
  }
  .normal {
    background: none;
  }

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 1rem;
  }
`;

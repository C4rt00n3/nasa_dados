import styled from "styled-components";

export const StyledDivCameras = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  ul {
    width: 90%;
    max-height: 250px;

    overflow: auto;

    display: flex;
    flex-wrap: wrap;

    gap: 10px;
    @media (min-width: 500px) {
      max-height: 100%;
    }
  }
  .blue {
    background-color: var(--Information);
  }
  li {
    border: 1px solid var(--Information);
    padding: 10px;
    border-radius: 24px;

    max-width: 100px;
    max-height: 40px;

    @media (min-width: 600px) {
      max-width: 150px;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: var(--Information);
      opacity: 60%;
    }
  }
  .normal {
    background: none;
  }

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 0.8rem;
  }
`;

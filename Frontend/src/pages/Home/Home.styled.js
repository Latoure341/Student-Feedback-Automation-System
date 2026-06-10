import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  ${(props) => props.theme.mobile} {
    h1 {
      font-size: 1.4rem;
    }
  }
   ${(props) => props.theme.Tablet} {
    h1 {
      font-size: 1.2rem;
    }
  } 
`;

export const HomeButton = styled.button`
  padding: 1rem 3rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.1);
  background-color: black;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  cursor: pointer;

  &hover {
    box-shadow: 0 2px 10px gray;
  }
  ${(props) => props.theme.mobile} {
    padding: 0.8rem 2rem;
    font-size: 0.8rem;
  }
  ${(props) => props.theme.Tablet} {
    padding: 0.8rem 2rem;
    
  }
`;

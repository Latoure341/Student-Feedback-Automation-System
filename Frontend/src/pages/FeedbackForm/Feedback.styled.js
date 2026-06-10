import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormStyle = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(240, 240, 240, 0.57);
  box-shadow: 1px 2px 10px gray;
  border-radius: 5px;

  h3 {
    font-weight: 600;
    cursor: pointer;
  }
    h3:hover {
        color: rgb(100, 100, 100);
    }
`;

export const FormWrapper = styled.form`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
  }
  button {
    margin-left: 7rem;
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 5px;
    background-color: rgb(23, 100, 23);
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
    cursor: pointer; 
  }
  label {
    font-size: 0.8rem;
  }
`;

export const InputStyle = styled.input`
  width: 18rem;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  padding: 0.6rem 0.3rem;
  outline: none;
`;

export const TextareaStyle = styled.textarea`
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  padding: 0.6rem 0.3rem;
  outline: none;
`;

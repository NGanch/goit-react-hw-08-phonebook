import styled from '@emotion/styled';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const ContactTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px 0 5px 20px;
`;

export const ContactText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 20px;
  color: rgb(145 42 189);
`;

export const ContactButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;

  font-size: 20px;
  color: rgb(214, 41, 119);
  background-color: transparent;
  border: 1px solid rgb(214, 41, 119);
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    background-color: rgb(214, 41, 119);
  }


  // padding: 12px 30px;

`;

export const EditContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  padding: 10px;
`;

export const EditFormLabel = styled.label`
  display: flex;
  // flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 17px;
  color: rgb(214, 41, 119);
`;

export const EditFormInput = styled.input`
  font-size: 20px;
  width: 300px;
  background-color: transparent;
  border: 1px solid rgb(214, 41, 119);
  border-radius: 4px;

  color: #f5fc69;
`;

export const EditButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

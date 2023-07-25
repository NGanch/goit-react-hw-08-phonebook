import styled from '@emotion/styled';
export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 570px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  border: 1px solid rgb(145 42 189);
  border-radius: 4px;
  list-style: none;
`;
export const ContactsItem = styled.li`
  border: 1px solid rgb(214, 41, 119);
  padding: 5px;
  backdrop-filter: blur(10px);

  border-radius: 4px;
`;

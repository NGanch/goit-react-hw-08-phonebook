import styled from '@emotion/styled';

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserSpan = styled.span`
  text-decoration: none;
  color: white;
  font-weight: 500;
`;

export const UserButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: rgb(84 10 116);
  border: none;
  &.active {
    color: white;
    background-color: rgb(84 10 116);
  }
`;

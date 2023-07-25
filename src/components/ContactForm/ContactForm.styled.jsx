import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 660px;
  height: 300px;
  align-items: center;
  justify-content: center;
  border: 4px solid rgb(173 89 227);
  box-shadow: 10px 10px 10px rgba(46, 47, 66, 0.08),
    10px 10px 10px rgba(46, 47, 66, 0.16), 10px 10px 10px rgba(46, 47, 66, 0.08),
    10px 10px 10px rgba(46, 47, 66, 0.08);
`;

export const LabelName = styled.label`
  display: flex;
  gap: 25px;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  color: rgb(214, 41, 119);
`;

export const InputName = styled.input`
width: 250px;
height: 30px;
font-size: 22px;
background-color: transparent;
border: 1px solid rgb(214, 41, 119);
border-radius: 4px;

color: rgb(214, 41, 119);
`;

export const LabelNumber = styled.label`
  display: flex;
  gap: 17px;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  color: rgb(214, 41, 119);
`;
export const InputNumber = styled.input`
  width: 250px;
  height: 30px;
  font-size: 22px;
  background-color: transparent;
  border: 1px solid rgb(214, 41, 119);
  border-radius: 4px;

  color: rgb(214, 41, 119);
`;
export const Button = styled.button`
  margin-top: 30px;
  padding: 15px 30px;
  background-color: rgb(199 85 248);
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  color: rgb(235, 226, 226);
`;

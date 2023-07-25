import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/auth-operations';

import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import {
  Section,
  Title,
  SearchFormStyled,
  LoginLabel,
  LoginSpan,
  LoginInput,
  Button,
} from '../LoginView/LoginView.styled';

export const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Section>
      <Title>Login form</Title>
      <SearchFormStyled onSubmit={handleSubmit}>
        <LoginLabel htmlFor="email">
          <LoginSpan>
          <MdOutlineEmail />
          Email
          </LoginSpan>
        
          <LoginInput
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LoginLabel>
        <LoginLabel htmlFor="password">
          
          <LoginSpan>
          <RiLockPasswordLine />
          Password
            </LoginSpan>
          <LoginInput
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LoginLabel>

        <Button type="submit">Login</Button>
      </SearchFormStyled>
    </Section>
  );
};

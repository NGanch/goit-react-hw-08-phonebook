import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/auth-operations';

import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUserAdd } from 'react-icons/ai';

import {
  Section,
  Title,
  SearchFormStyled,
  RegisterLabel,
  RegisterSpan,
  RegisterInput,
  Button,
} from '../RegisterView/RegisterView.styled';


export const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Section>
      <Title>Registration form</Title>
      <SearchFormStyled onSubmit={handleSubmit}>
        <RegisterLabel htmlFor="name">
          <RegisterSpan>
          <AiOutlineUserAdd />
          Name
          </RegisterSpan>

          <RegisterInput
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </RegisterLabel>
        <RegisterLabel htmlFor="email">
          <RegisterSpan>
          <MdOutlineEmail />
          Email
          </RegisterSpan>
  
          <RegisterInput
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </RegisterLabel>
        <RegisterLabel htmlFor="password">
          <RegisterSpan>
          <RiLockPasswordLine />
          Password
          </RegisterSpan>
       
          <RegisterInput
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </RegisterLabel>

        <Button type="submit">Registration</Button>
      </SearchFormStyled>
    </Section>
  );
};

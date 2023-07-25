
import { useState } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { useSelector, useDispatch } from 'react-redux';

import { addContact } from "redux/contacts/operations.js";

import { selectContacts } from 'redux/contacts/selectors.js';

import {
  SearchFormStyled,
  LabelName,
  InputName,
  LabelNumber,
  InputNumber,
  Button,
} from './ContactForm.styled.jsx';

// //================================================================

export function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  // Отримуємо список контактів зі стану
  const contacts = useSelector(selectContacts);

  // Опрацювання форми
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const isInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    // Перевірка на наявність контакту в списку
    if (isInContacts) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }

    // Додавання контакту
    dispatch(addContact({ name, number }));
        // Очистка полів
    setName('');
    setNumber('');
    console.log(name);
    console.log(number);

  };
//   //---- Опрацювання полів форми -----
  const handleNameChange = event => setName(event.target.value);

  const handlePhoneChange = event => setNumber(event.target.value);
  //   //---- Опрацювання полів форми -----

    return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <LabelName htmlFor="name">
        <AiOutlineUserAdd />
        Name
        <InputName
        id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelName>
      <LabelNumber htmlFor="number">
        <AiOutlinePhone />
        Number
        <InputNumber
        id="number"
          type="tel"
          name="phone"
          value={number}
          onChange={handlePhoneChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelNumber>
      <Button type="submit">Add contact</Button>
    </SearchFormStyled>
  );
}
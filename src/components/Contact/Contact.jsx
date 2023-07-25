
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { useContacts } from 'hooks/useContacts';

import { deleteContact, updateContact } from 'redux/contacts/operations';

import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import {
  ContactContainer,
  ContactTextContainer,
  ContactText,
  ContactButtonContainer,
  ContactButton,
  EditContactForm,
  EditFormLabel,
  EditFormInput,
  EditButtonContainer,
} from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const [formVisible, setFormVisible] = useState(false);

  const dispatch = useDispatch();

  const { allContacts } = useContacts();

  // deleteContact action
  const handleContactDelete = id => {
    dispatch(deleteContact(id));
  };

  // EditContactaa
  const handleContactEdit = event => {
    event.preventDefault();
    const form = event.target;

    const isInContacts = allContacts.some(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (isInContacts) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    // editContact action
    dispatch(updateContact({ id, name, number }));

    // Form reset
    form.reset();

    // Toggle the visibility of the edit form
    setFormVisible(!formVisible);
  };

  // Toggle the visibility of the edit form
  const handleEditFormVisible = () => {
    setFormVisible(!formVisible);
  };

  return (
    <>
      <ContactContainer>
        <ContactTextContainer>
          <AiOutlinePhone color="rgb(214, 41, 119)" />
          <ContactText>{name}: </ContactText>
          <ContactText>{number}</ContactText>
        </ContactTextContainer>

        {!formVisible && (
          <ContactButtonContainer>
            <ContactButton
              type="button"
              name="edit"
              onClick={() => handleEditFormVisible(id)}
            >
              Edit
            </ContactButton>
            <ContactButton
              type="button"
              name="delete"
              onClick={() => handleContactDelete(id)}
            >
              Delete
              <AiOutlineUserDelete align-self="center" />
            </ContactButton>
          </ContactButtonContainer>
        )}
      </ContactContainer>

      {formVisible && (
        <EditContactForm onSubmit={handleContactEdit}>
          <EditFormLabel htmlFor="name">
            <AiOutlineUserAdd />
            {/* Name */}
            <EditFormInput
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </EditFormLabel>
          <EditFormLabel htmlFor="number">
            <AiOutlinePhone color="rgb(214, 41, 119)" />
            {/* Number */}
            <EditFormInput
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </EditFormLabel>
          <EditButtonContainer>
            <ContactButton
              type="button"
              name="cancel"
              onClick={() => handleEditFormVisible(id)}
            >
              Cancel
            </ContactButton>
            <ContactButton type="submit">Edit</ContactButton>
          </EditButtonContainer>
        </EditContactForm>
      )}
    </>
  );
};

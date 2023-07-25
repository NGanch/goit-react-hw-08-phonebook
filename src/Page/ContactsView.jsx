import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Loader } from '../components/Loader/Loader';
import { Filter } from '../components/Filter/Filter';

import {
  Section,
  TitlePhonebook,
  ContactContainer,
  TitleContact,
} from '../components/App.styled';

export function ContactsView() {
  const dispatch = useDispatch();

  // getting a list of contacts from the state
  const contacts = useSelector(selectContacts);
  // getting isLoading value from the state
  const isLoading = useSelector(selectIsLoading);
  // getting error value from the state
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />

      <ContactContainer>
        {contacts.length > 0 && <TitleContact>Contact</TitleContact>}

        {isLoading && !error && <Loader />}
        {contacts.length > 0 ? <Filter /> : <p>YOUR PHONEBOOK IS EMPTY</p>}

        {error && error}

        {contacts.length > 0 && <ContactList />}
      </ContactContainer>
    </Section>
  );
}

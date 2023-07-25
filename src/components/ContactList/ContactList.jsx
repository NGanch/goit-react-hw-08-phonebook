
import { useSelector } from 'react-redux';

import { selectFilteredContacts } from "redux/contacts/selectors";

import { Contact } from 'components/Contact/Contact';

import {
  ContactsList,
  ContactsItem,
} from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <Contact id={id} name={name} number={number}></Contact>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};


// import React from 'react';

// import { useDispatch, useSelector } from 'react-redux';

// import { deleteContact, updateContact } from "redux/contacts/operations";
// import { selectFilteredContacts } from "redux/contacts/selectors";

// import { AiOutlinePhone } from 'react-icons/ai';
// import { AiOutlineUserDelete } from 'react-icons/ai';
// import {
//   ContactsList,
//   ContactsItem,
//   ContactsName,
//   ContactsNumber,
//   Button,
// } from './ContactList.styled';

// export const ContactList = () => {
//   // Отримуємо список контактів
//   const contacts = useSelector(selectFilteredContacts);

//   const dispatch = useDispatch();

//   // Видалення контакту
//   const handleContactDelete = id => dispatch(deleteContact(id));

//   return (
//     <ContactsList>
//       {contacts.map(({ id, name, number }) => (
//         <ContactsItem key={id}>
//           <AiOutlinePhone color="rgb(214, 41, 119)" />
//           <ContactsName>
//             {name}:<ContactsNumber>{number}</ContactsNumber>
//           </ContactsName>
//           <Button type="button" onClick={() => handleContactDelete(id)}>
//             Delete <AiOutlineUserDelete align-self="center" />
//           </Button>
//         </ContactsItem>
//       ))}
//     </ContactsList>
//   );
// };
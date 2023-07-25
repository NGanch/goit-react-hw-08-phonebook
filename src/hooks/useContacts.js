import { useSelector } from 'react-redux';

import { selectIsLoading, selectContacts } from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectIsLoading);

  const allContacts = useSelector(selectContacts);

  return {
    isLoading,
    allContacts,
  };
};

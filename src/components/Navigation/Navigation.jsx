import { NavDiv, Link } from './Navigation.styled';

import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavDiv>
      <Link to="/">Home</Link>
      <Link to="/download">Download</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavDiv>
  );
};

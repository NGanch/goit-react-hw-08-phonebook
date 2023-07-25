import { Navigation } from '../../components/Navigation/Navigation';
import { AuthNav } from '../../components/AuthNav/AuthNav';
import { UserMenu } from '../../components/UserMenu/UserMenu';
// import  {selectIsLoggedIn} from 'redux/auth/auth-selectors';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.styled';
// import { useSelector } from 'react-redux';
export function AppBar() {
  const { isLoggedIn } = useAuth();
  // const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

import { UserDiv, UserSpan, UserButton } from './UserMenu.styled';
export function UserMenu() {
  const dispatch = useDispatch();
  // const { user } = useAuth();
  const name = useSelector(selectUserName);
  // const avatar = defaultAvatar;
  return (
    <UserDiv>
      {/* <img /> */}
      <UserSpan>Welcome, {name}</UserSpan>
      <UserButton type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </UserButton>
    </UserDiv>
  );
}

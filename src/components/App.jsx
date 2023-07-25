import {  useEffect } from 'react';
// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/auth/auth-operations';

// import { routes } from 'routes';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../Page/Home/Home';
import { RegisterView } from '../Page/RegisterView/RegisterView';
import { LoginView } from '../Page/LoginView/LoginView';
import { ContactsView } from '../Page/ContactsView';

import { Download } from '../Page/Download/Download'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// Custom hook for authentication
import { useAuth } from 'hooks/useAuth';

// import { RefreshingTextStyled } from './App.styled';

// Lazy-loaded Home page component
// const Home = lazy(() => import('../Page/Home/Home'));

// const RegisterView = lazy(() => import('../Page/RegisterView/RegisterView'));

// const LoginView = lazy(() => import('../Page/LoginView/LoginView'));

// const ContactsView = lazy(() => import('../Page/ContactsView'));


export function App() {
  const dispatch = useDispatch();

  // Get the refreshing status using useAuth() hook
  const { isRefreshing } = useAuth();

  // Dispatch the refreshUser operation on component mount

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Refreshing user ...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterView />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginView />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsView />} />
          }
        />
      </Route>
    </Routes>
  );
  // return (
  //   <section>

  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<Home />} />
  //       <Route
  //         path="/register"
  //         element={
  //           <PublicRoute
  //             redirectTo="/contacts"
  //             component={<RegisterView />}
  //           />
  //         }
  //       />
  //       <Route
  //         path="/login"
  //         element={
  //           <PublicRoute redirectTo="/contacts" component={<LoginView />} />
  //         }
  //       />
  //       <Route
  //         path="/contacts"
  //         element={
  //           <PrivateRoute redirectTo="/login" component={<ContactsView />} />
  //         }
  //       />
  //     </Route>
  //   </Routes>

  //     </section>
  // );
}

//   <Routes>
//   <Route path={routes.HOME} element={<Layout />}>
//    <Route index element={<Home />} />
//     <Route path={routes.Movies} element={<Movies />} />
//     <Route path={routes.Movies_ID} element={<MovieDetails />}>
//       <Route path="cast" element={<Cast />} />
//       <Route path="reviews" element={<Reviews />} />

//     </Route>
//     <Route path="*" element={<Navigate to="/" replace />} />
//   </Route>
// </Routes>

// <Routes>
//    <Route path="/" element={<Layout />}>
//   <Route index element={<Home />} />
//   <Route path="/register" component={<RegisterView />} />
//   <Route path="/login" component={<LoginView />} />
//   {/* <Route path="/contacts" element={ContactList} /> */}
//   </Route>
//   <Route path="*" element={<Navigate to="/" replace />} />
// </Routes>

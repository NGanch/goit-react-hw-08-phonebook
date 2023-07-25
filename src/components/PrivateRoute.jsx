import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
// - Якщо макшрут приватний і користувач залогінений,
// рендерить компонент
// - В іншому випадку рендерить Redirect на redirectTo

//1. Повинен повторювати API Route
//2. Він повинен рендерити Route під капотом
// export function PrivateRoute({
//     component: Component,
//     redirectTo,
//     children,
//     ...routeProps
// }) {
//     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//     return(
//         <Route {...routeProps}>
//             {isLoggedIn ? children: <Redirect to={redirectTo} />}
//         </Route>
//     )
// }

export function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  // <Route {...routeProps}>
  //     {isLoggedIn ? children: redirect("/login")}
  // </Route>
}

import styled from "styled-components";

const ErrorRouteStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--sidebar_background_color);
  color: var(--black_text_color);
  font-size: 5rem;
  width: 100vw;
  height: 100vh;
`;
function ErrorRoute() {
  return <ErrorRouteStyle>Page not found :) 😢</ErrorRouteStyle>;
}

export default ErrorRoute;

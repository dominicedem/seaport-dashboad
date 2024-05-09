import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./Layout/AppLayout";
import Overview from "./Components/Overview.jsx/Overview";
import Maintainance from "./Components/Maintainance/Maintainance";
import Surveillance from "./Components/Surveillance/Surveillance";
import Tracking from "./Components/Tracking/Tracking";
import Terminal from "./Components/Terminal/Terminal";
import GlobalStyle from "./Styles/Style";
import ErrorRoute from "./Error/ErrorRoute";
import SignUp from "./SignUp/SignUp";
import Authenticate from "./Layout/Authenticate";
import appReducer from "./Slices/AppSlice";
import sideBarReducer from "./Slices/SidebarSlice";
import trackReducer from "./Slices/TrackSlice";
import securityReducer from "./Slices/SecuritySlice";

const store = configureStore({
  reducer: {
    appData: appReducer,
    sidebarData: sideBarReducer,
    trackData: trackReducer,
    securityData: securityReducer,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<SignUp />} />
              <Route
                path="/"
                element={
                  <Authenticate>
                    <AppLayout />
                  </Authenticate>
                }
              >
                <Route path="/" element={<Overview />} />
                <Route path="/maintainance" element={<Maintainance />} />
                <Route path="/terminal" element={<Terminal />} />
                <Route path="/surveillance" element={<Surveillance />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route path="/terminal" element={<Terminal />} />
              </Route>
              <Route path="*" element={<ErrorRoute />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;

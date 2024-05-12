import styled from "styled-components";
import Nav from "../Components/Navigation/Nav";
import SideBar from "../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Notification from "../Components/Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { setNotify } from "../Slices/AppSlice";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { RxCross2 } from "react-icons/rx";
import { PiShippingContainerFill } from "react-icons/pi";

const AppLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 23vw auto;
  grid-template-rows: 10vh auto;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`;
const MainStyle = styled.div`
  background: var(--app_background_color);
`;

const NavStyle = styled.div`
  background: var(--nav_background_color);
  grid-column: 1/-1;
  height: 100%;
`;
const SideBarStyle = styled.div`
  background: var(--sidebar_background_color);
`;
const NotiBox = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: 10;
`;
const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(50%);
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--sidebar_background_color);
  padding: 2.5rem 2rem;
  border-radius: 0.7rem;
  gap: 2.5rem;
  font-size: 2.5rem;
`;
const Head = styled.span`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 3rem;
  color: var(--theme_color);
`;
const OverLayPosition = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: var(--notification_hover_color);
`;

const NotifyOverlay = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: #0006;
  backdrop-filter: brightness(50%);
`;
const Box = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const CancelBox = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;
`;
const iconStyle = {
  fontSize: "2rem",
  color: "var(--red_exit_color)",
  alignSelf: "end",
};
const conStyle = {
  fontSize: "3rem",
  color: "var(--theme_color)",
};

function AppLayout() {
  const [alert, setAlert] = useState(true);
  const [data, setData] = useState("");
  const { notify } = useSelector((state) => state.appData);
  const dispatch = useDispatch();
  function handleOverlay(e) {
    if (e.target.className.split(" ").includes("overLay")) {
      dispatch(setNotify(false));
      setAlert(false);
      setData("");
    }
  }
  let ENDPOINT = import.meta.env.VITE_SOCKET;
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("connect", () => {
      console.log("WORKING");
    });

    socket.on("container", (data) => {
      data?.message && setAlert(true);
      data?.message && setData(data);
      setTimeout(() => setAlert(false), [10000]);
    });

    return () => {
      socket.disconnect();
    };
  }, [ENDPOINT]);
  return (
    <AppLayoutStyle>
      <NavStyle>
        <Nav />
      </NavStyle>
      <SideBarStyle>
        <SideBar />
      </SideBarStyle>
      <MainStyle>
        <Outlet />
      </MainStyle>
      {notify && (
        <OverLay onClick={(e) => handleOverlay(e)} className="overLay">
          <OverLayPosition
            onClick={(e) => handleOverlay(e)}
            className="overLay"
          >
            <NotiBox>
              <Notification />
            </NotiBox>
          </OverLayPosition>
        </OverLay>
      )}
      {alert && (
        <NotifyOverlay onClick={(e) => handleOverlay(e)} className="overLay">
          <Box onClick={(e) => handleOverlay(e)} className="overLay">
            <CancelBox onClick={() => setAlert(false)}>
              <RxCross2 style={iconStyle} />
            </CancelBox>
            <Message>
              <Head>
                <PiShippingContainerFill style={conStyle} /> Notification
              </Head>
              {data?.message}
            </Message>
          </Box>
        </NotifyOverlay>
      )}
    </AppLayoutStyle>
  );
}

export default AppLayout;

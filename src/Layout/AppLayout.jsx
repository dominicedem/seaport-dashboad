import styled from "styled-components";
import Nav from "../Components/Navigation/Nav";
import SideBar from "../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Notification from "../Components/Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { setNotify } from "../Slices/AppSlice";

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
  /* overflow-y: scroll; */
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
const OverLayPosition = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: var(--notification_hover_color);
`;
function AppLayout() {
  const { notify } = useSelector((state) => state.appData);
  const dispatch = useDispatch();
  function handleOverlay(e) {
    if (e.target.className.split(" ").includes("overLay")) {
      dispatch(setNotify(false));
    }
  }
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
    </AppLayoutStyle>
  );
}

export default AppLayout;

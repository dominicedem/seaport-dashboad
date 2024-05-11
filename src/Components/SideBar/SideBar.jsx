import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { PiSecurityCameraBold } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";
import { IoMdExit } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setMaintainance,
  setOverview,
  setSurveillance,
  setTracking,
} from "../../Slices/SidebarSlice";
import { setInitail, setIsAuth, setToken } from "../../Slices/AppSlice";

const Sidebarbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 0 0 2rem 0;
  height: 100%;
  font-size: 1.6rem;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  font-size: 1.6rem;
  width: 100%;
`;

const SidebarList = styled.div`
  display: grid;
  grid-template-columns: auto 90%;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s;
  width: 100%;
  color: ${(props) =>
    props.type === "exit"
      ? "var(--red_exit_color)"
      : "var(--black_text_color)"};
  font-size: 1.8rem;
  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.type === "exit" ? "var(--red_exit_color_light)" : "none"};
    border-right: ${(props) =>
      props.type === "exit" ? "4px solid var(--red_exit_color)" : "none"};
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    color: var(--ship_hover_color);
  }
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--black_text_hover_color);
`;
const Text = styled.p`
  font-size: 1.8rem;
  color: inherit;
  width: 100%;
`;
const IconStyle = {
  color: "var(--black_text_color)",
  fontSize: "1.8rem",
  borderRadius: "50%",
};
const exitIconStyle = {
  color: "var(--red_exit_color)",
  fontSize: "1.8rem",
  borderRadius: "50%",
  transform: "rotate(180deg)",
};

const linkStyle = {
  textDecoration: "none",
  width: "100%",
};

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(setIsAuth(false));
    dispatch(setToken(""));
    dispatch(setInitail(false));
    navigate("/login");
  }
  return (
    <Sidebarbox>
      <List>
        <NavLink
          onClick={() => dispatch(setOverview(true))}
          style={linkStyle}
          to="/"
        >
          <SidebarList>
            <IconBox>
              <MdDashboard style={IconStyle} />
            </IconBox>
            <Text>Overview</Text>
          </SidebarList>
        </NavLink>
        <NavLink
          onClick={() => dispatch(setTracking(true))}
          style={linkStyle}
          to="tracking"
        >
          <SidebarList>
            <IconBox>
              <CgProfile style={IconStyle} />
            </IconBox>
            <Text>Ship-Tracking</Text>
          </SidebarList>
        </NavLink>
        <NavLink
          onClick={() => dispatch(setMaintainance(true))}
          style={linkStyle}
          to="maintainance"
        >
          <SidebarList>
            <IconBox>
              <GiAutoRepair style={IconStyle} />
            </IconBox>
            <Text>Maintainance</Text>
          </SidebarList>
        </NavLink>
        <NavLink
          onClick={() => dispatch(setSurveillance(true))}
          style={linkStyle}
          to="surveillance"
        >
          <SidebarList>
            <IconBox>
              <PiSecurityCameraBold style={IconStyle} />
            </IconBox>
            <Text>Security Surveillance</Text>
          </SidebarList>
        </NavLink>
      </List>
      <SidebarList type="exit" onClick={() => logout()}>
        <IconBox>
          <IoMdExit style={exitIconStyle} />
        </IconBox>
        Sign out
      </SidebarList>
    </Sidebarbox>
  );
}

export default SideBar;

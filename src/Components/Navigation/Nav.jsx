import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoHomeFill } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setNotify } from "../../Slices/AppSlice";

const NavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25%;
  padding-right: 4rem;
  height: 100%;
`;
const Companydescription = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
`;
const CompanyName = styled.span`
  color: var(--black_text_color);
  font-size: 1.8rem;
`;
const Settings = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
  color: var(--black_text_color);
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: var(--theme_color);
  cursor: pointer;
`;
const Img = styled.img`
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 50%;
`;
const ProfileName = styled.span`
  font-size: 1.8rem;
  color: var(--black_text_color);
  cursor: pointer;
`;
const Page = styled.span`
  font-size: 2.2rem;
  color: var(--black_text_color);
`;
const iconStyle = {
  color: "var(--primary_text_color)",
  fontSize: "1.8rem",
  padding: ".2rem",
};
const LinkStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  gap: "1rem",
  fontSize: "2.2rem",
  color: "var(--black_text_color)",
};

function Nav() {
  const { overview, tracking, maintainance, surveillance, terminal } =
    useSelector((state) => state.sidebarData);
  const dispatch = useDispatch();
  return (
    <NavStyle>
      <Companydescription>
        <Link style={LinkStyle} to="/">
          <IconBox>
            <GoHomeFill style={iconStyle} />
          </IconBox>
          <CompanyName>Home</CompanyName>
        </Link>
      </Companydescription>
      <Page>
        {overview
          ? "Overview"
          : tracking
          ? "Tracking"
          : maintainance
          ? "Maintainance"
          : surveillance
          ? "Surveillance"
          : terminal
          ? "Terminal"
          : ""}
      </Page>
      <Settings>
        <IconBox>
          <IoNotifications
            onClick={() => dispatch(setNotify(true))}
            style={iconStyle}
          />
        </IconBox>
        <Img src="/favicon.ico" />
        <ProfileName>Dominic</ProfileName>
      </Settings>
    </NavStyle>
  );
}

export default Nav;

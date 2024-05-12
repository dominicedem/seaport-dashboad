import styled from "styled-components";
import { FaShip } from "react-icons/fa6";

const OverviewStyle = styled.div`
  display: grid;
  margin: 2rem auto;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  width: 94%;
  height: 82.8vh;
  background-color: var(--sidebar_background_color);
  border-radius: 0.7rem;
  padding: 2.5rem;
  gap: 2rem;
  box-shadow: 0 0.5rem 1rem 0.5rem #0000000a;
`;
const Header = styled.h1`
  display: flex;
  align-items: center;
  grid-column: 1/-1;
  font-size: ${(props) => (props.type === "ship" ? "2.1rem" : "2.5rem")};
  color: var(--black_text_color);
  padding-bottom: ${(props) => (props.type === "ship" ? "0" : "1.5rem")};
  border-bottom: ${(props) =>
    props.type === "ship" ? "none" : "2px solid var(--black_text_hover_color)"};
  gap: ${(props) => (props.type === "ship" ? "1rem" : "0")};
`;
const ShipDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;
const SubHeader = styled.p`
  font-size: 1.8rem;
  color: var(--ship_hover_color);
`;
const MoreDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: -15px;
`;
const TimeDes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  color: var(--theme_color);
  width: fit-content;
  font-size: 1.6rem;
`;
const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  color: var(--theme_color);
`;
const Location = styled.span`
  font-size: 1.4rem;
  color: var(--theme_color);
`;
const Line = styled.div`
  width: 100%;
  background-color: var(--ship_hover_color);
  height: 1px;
  margin-top: -15px;
`;
const ShipStyle = styled.div`
  justify-self: ${(props) => (props.type === "lastchild" ? "end" : "start")};
  width: 90%;
`;
const iconstyle = {
  fontSize: "2rem",
  color: "var(--black_text_color)",
};
function Overview() {
  return (
    <OverviewStyle>
      <Header>Hi Dominic, welcome!</Header>
      <ShipStyle>
        <ShipDetails />
      </ShipStyle>
      <ShipStyle type="lastchild">
        <ShipDetails type={true} />
      </ShipStyle>
    </OverviewStyle>
  );
}
function ShipDetails({ type }) {
  return (
    <ShipDetailsStyle>
      {!type ? (
        <Header type="ship">
          Incoming ship <FaShip style={iconstyle} />{" "}
        </Header>
      ) : (
        <Header type="ship">
          <FaShip style={iconstyle} />
          Incoming ship{" "}
        </Header>
      )}
      <Details>
        <SubHeader>{!type ? "Nigerian Spirit" : "Naija Pride"}</SubHeader>
        <MoreDetails>
          <TimeDes>
            Departure
            <Time>
              02/05/24 <p>11:00AM</p>
            </Time>
            <Location>IKEJA</Location>
          </TimeDes>
          <Line></Line>
          <TimeDes>
            Arrival
            <Time>
              12/10/24 <p>07:30AM</p>
            </Time>
            <Location>ISOLO</Location>
          </TimeDes>
        </MoreDetails>
        <SubHeader>{!type ? "Lagos Voyager" : "Benin Majesty"}</SubHeader>
        <MoreDetails>
          <TimeDes>
            Departure
            <Time>
              20/11/24 <p>04:00PM</p>
            </Time>
            <Location>IKEJA</Location>
          </TimeDes>
          <Line></Line>
          <TimeDes>
            Arrival
            <Time>
              02/05/24 <p>01:25AM</p>
            </Time>
            <Location>ISOLO</Location>
          </TimeDes>
        </MoreDetails>
        <SubHeader>{!type ? "Atlantic Explorer" : "Delta Star"}</SubHeader>
        <MoreDetails>
          <TimeDes>
            Departure
            <Time>
              21/03/24 <p>10:00PM</p>
            </Time>
            <Location>IKEJA</Location>
          </TimeDes>
          <Line></Line>
          <TimeDes>
            Arrival
            <Time>
              02/05/24 <p>03:30AM</p>
            </Time>
            <Location>ISOLO</Location>
          </TimeDes>
        </MoreDetails>
        <SubHeader>{!type ? "Abuja Pearl" : "Port Harcourt Titan"}</SubHeader>
        <MoreDetails>
          <TimeDes>
            Departure
            <Time>
              30/10/24 <p>02:01PM</p>
            </Time>
            <Location>IKEJA</Location>
          </TimeDes>
          <Line></Line>
          <TimeDes>
            Arrival
            <Time>
              12/09/24 <p>08:20AM</p>
            </Time>
            <Location>ISOLO</Location>
          </TimeDes>
        </MoreDetails>
      </Details>
    </ShipDetailsStyle>
  );
}

export default Overview;

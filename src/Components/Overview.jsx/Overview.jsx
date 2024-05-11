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
  gap: 3rem;
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
  gap: 1rem;
  margin-top: -10px;
`;
const TimeDes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  color: var(--theme_color);
  width: 15%;
  font-size: 1.5rem;
`;
const Time = styled.p`
  font-size: 1.6rem;
  color: var(--theme_color);
`;
const Line = styled.div`
  width: 70%;
  background-color: var(--ship_hover_color);
  height: 1px;
  margin-top: -15px;
`;
const ShipStyle = styled.div`
  justify-self: ${(props) => (props.type === "lastchild" ? "end" : "start")};
  width: 65%;
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
        <SubHeader>Ship name</SubHeader>
        <MoreDetails>
          <TimeDes>
            <Time>11:00</Time>
            Departure
          </TimeDes>
          <Line></Line>
          <TimeDes>
            <Time>07:30</Time>
            Arrival
          </TimeDes>
        </MoreDetails>
        <SubHeader>Ship name</SubHeader>
        <MoreDetails>
          <TimeDes>
            <Time>04:00</Time>
            Departure
          </TimeDes>
          <Line></Line>
          <TimeDes>
            <Time>01:25</Time>
            Arrival
          </TimeDes>
        </MoreDetails>
        <SubHeader>Ship name</SubHeader>
        <MoreDetails>
          <TimeDes>
            <Time>10:00</Time>
            Departure
          </TimeDes>
          <Line></Line>
          <TimeDes>
            <Time>03:30</Time>
            Arrival
          </TimeDes>
        </MoreDetails>
        <SubHeader>Ship name</SubHeader>
        <MoreDetails>
          <TimeDes>
            <Time>02:01</Time>
            Departure
          </TimeDes>
          <Line></Line>
          <TimeDes>
            <Time>08:20</Time>
            Arrival
          </TimeDes>
        </MoreDetails>
      </Details>
    </ShipDetailsStyle>
  );
}

export default Overview;

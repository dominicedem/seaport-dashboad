import styled from "styled-components";
import { setNotify } from "../../Slices/AppSlice";
import { useDispatch } from "react-redux";

const NotificationStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 0.8rem;
  background-color: var(--sidebar_background_color);
  box-shadow: 0 1rem 1rem 0.5rem #0001;
`;
const Header = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: var(--ship_row_text_color);
  align-self: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--ship_hover_color);
  width: 100%;
`;
const NotifyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem 2rem;
  cursor: pointer;
  &:hover {
    background: var(--notification_hover_color);
    width: 100%;
  }
`;
const Name = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--sidebar_background_color);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--theme_color);
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;
const Text = styled.span`
  font-size: ${(props) => (props.type === "time" ? "1.3rem" : "1.4rem")};
  color: var(--ship_row_text_color);
`;
const Alert = styled.span`
  font-size: 1.5rem;
  color: var(--theme_color);
`;

const NotiData = [
  {
    breach: true,
    crane: null,
    time: 4,
  },
  {
    breach: true,
    crane: null,
    time: 2,
  },
  {
    breach: false,
    crane: "B",
    time: 10,
  },
  {
    breach: false,
    crane: "E",
    time: 5,
  },
  {
    breach: false,
    crane: "G",
    time: 3,
  },
  {
    breach: true,
    crane: null,
    time: 4,
  },
];
function Notification() {
  return (
    <NotificationStyle>
      <Header>Your Notifications</Header>
      {NotiData.map((val, ind) => (
        <NotifyText data={val} key={ind} />
      ))}
    </NotificationStyle>
  );
}
function NotifyText({ data }) {
  const dispatch = useDispatch();
  return (
    <NotifyBox onClick={() => dispatch(setNotify(false))}>
      <Name>L</Name>
      <TextBox>
        {data.breach ? (
          <Text>
            <Alert>Security breach</Alert> detected
          </Text>
        ) : (
          <Text>
            <Alert>Crane {data.crane}</Alert> is due for maintainance
          </Text>
        )}
        <Text type="time">{data.time} hours ago</Text>
      </TextBox>
    </NotifyBox>
  );
}

export default Notification;

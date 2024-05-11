import styled from "styled-components";
import Table from "../Table/Table";
import { useSelector } from "react-redux";
import useTerminal from "../../hooks/useTerminal";
import Loading from "../Loading/Loading";

const TerminalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 94%;
  height: 92%;
  background-color: var(--sidebar_background_color);
  border-radius: 0.7rem;
  padding: 2.5rem;
  gap: 3rem;
  margin: 2rem auto;
  box-shadow: 0 0.5rem 1rem 0.5rem #0000000a;
  position: relative;
`;
const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--notification_hover_color);
  backdrop-filter: blur(4px);
`;
function Terminal() {
  const { token } = useSelector((state) => state.appData);
  const { data, isLoading } = useTerminal(token);
  console.log(data);
  return (
    <TerminalStyle>
      <Table data={data?.data} column={3}>
        Terminals And Container
      </Table>
      {isLoading && (
        <LoadingStyle>
          <Loading />
        </LoadingStyle>
      )}
    </TerminalStyle>
  );
}

export default Terminal;

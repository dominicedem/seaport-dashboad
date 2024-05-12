import styled from "styled-components";
import Table from "../Table/Table";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import useMaintainance from "../../hooks/useMaintainance";

const MaintainanceStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 94%;
  height: 82.8vh;
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
function Maintainance() {
  const { token } = useSelector((state) => state.appData);
  const { data, isLoading } = useMaintainance(token);
  return (
    <MaintainanceStyle className={data?.data.length > 7 && "scroll"}>
      <Table data={data?.data} column={4}>
        Check Maintainance Status
      </Table>
      {isLoading && (
        <LoadingStyle>
          <Loading />
        </LoadingStyle>
      )}
    </MaintainanceStyle>
  );
}

export default Maintainance;

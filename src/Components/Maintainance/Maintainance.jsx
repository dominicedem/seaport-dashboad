import styled from "styled-components";
import Table from "../Table/Table";

const MaintainanceStyle = styled.div`
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
`;
function Maintainance() {
  return (
    <MaintainanceStyle>
      <Table column={4}>Check Maintainance Status</Table>
    </MaintainanceStyle>
  );
}

export default Maintainance;

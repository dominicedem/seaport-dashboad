import styled from "styled-components";

const TableStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  background-color: var(--sidebar_background_color);
  width: 100%;
`;
const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.9rem;
  width: 100%;
`;
const Header = styled.h2`
  font-size: 2.5rem;
  color: var(--black_text_color);
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--black_text_hover_color);
  width: 100%;
`;
const Status = styled.h4`
  font-size: ${(props) => (props.type === "status" ? "1.8rem" : "1.5rem")};
  color: ${(props) =>
    props.type === "status"
      ? "var(--black_text_color)"
      : "var(--ship_hover_color)"};
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  border-bottom: ${(props) =>
    props.type === "head"
      ? "1.5px solid var(--theme_color)"
      : "1px solid var(--ship_hover_color)"};
`;
const Name = styled.span`
  font-size: 1.6rem;
  color: var(--ship_row_text_color);
`;
const Faulty = styled.p`
  font-size: 1.6rem;
  color: var(--red_exit_color);
`;

const TableData = [
  {
    body: ["Crane A1", "Filled", "abcd1234567, efgh1234567"],
  },
  {
    body: ["Crane B2", "Empty", "None"],
  },
  {
    body: ["Crane C1", "Filled", "abcd1234567, efgh1234567"],
  },
  {
    body: ["Crane C2", "Filled", "abcd1234567, efgh1234567"],
  },
  {
    body: ["Crane A2", "Empty", "None"],
  },
  {
    body: ["Crane B1", "Filled", "abcd1234567, efgh1234567"],
  },
  {
    body: ["Crane B4", "Good", "None"],
  },
];
const TableData2 = [
  {
    body: ["Crane A", "Faulty", "29th january 2024", "29th march 2024"],
  },
  {
    body: ["Crane B", "Good", "15th july 2023", "20th january 2024"],
  },
  {
    body: ["Crane C", "Faulty", "29th january 2024", "29th march 2024"],
  },
  {
    body: ["Crane D", "Faulty", "29th january 2024", "29th march 2024"],
  },
  {
    body: ["Crane E", "Good", "15th july 2023", "20th january 2024"],
  },
  {
    body: ["Crane F", "Faulty", "29th january 2024", "29th march 2024"],
  },
  {
    body: ["Crane G", "Good", "15th july 2023", "20th january 2024"],
  },
];

function Table({ children, column, data }) {
  return (
    <TableStyle>
      <Header>{children}</Header>
      <TableBox>
        <Status type={"status"}>Status</Status>
        <Status type={"date"}>Updated at 17th january 2024</Status>
      </TableBox>
      <TableBox>
        {column === 4 && (
          <>
            <Row type="head">
              <Name className="fourRow">Machine</Name>
              <Name className="fourRow">Status</Name>
              <Name className="fourRow">Last maintainance date</Name>
              <Name className="fourRow">predicted maintainance date</Name>
            </Row>
          </>
        )}
        {column === 3 && (
          <>
            <Row type="head">
              <Name className="threeRow">Name</Name>
              <Name className="threeRow">Status</Name>
              <Name className="threeRow">Container ID</Name>
            </Row>
          </>
        )}
        {column === 3
          ? TableData.map((val, ind) => (
              <TableRow key={ind} data={val.body} index={ind} />
            ))
          : data?.map((val, ind) => (
              <TableRow key={ind} data={val} index={ind} column={column} />
            ))}
      </TableBox>
    </TableStyle>
  );
}

function TableRow({ index, data, column }) {
  return (
    <Row>
      {column === 4 && (
        <>
          <Name className="fourRow">{data.name}</Name>
          <Name className="fourRow">
            {data.status === "Good" ? (
              `${data.status}`
            ) : (
              <Faulty>{data.status}</Faulty>
            )}
          </Name>
          <Name className="fourRow">{`${
            data.lastMaintenanceDate.split("/")[0]
          }th ${data.lastMaintenanceDate.split("/")[1]} ${
            data.lastMaintenanceDate.split("/")[2]
          }`}</Name>
          <Name className="fourRow">{`${
            data.nextMaintenanceDate.split("/")[0]
          }th ${data.nextMaintenanceDate.split("/")[1]} ${
            data.nextMaintenanceDate.split("/")[2]
          }`}</Name>
        </>
      )}
    </Row>
  );
}

export default Table;

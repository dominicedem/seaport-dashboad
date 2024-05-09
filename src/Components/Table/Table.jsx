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
  align-items: start;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  border-bottom: ${(props) =>
    props.type === "head"
      ? "1.5px solid var(--theme_color)"
      : "1px solid var(--ship_hover_color)"};
`;
const Name = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.6rem;
  color: var(--ship_row_text_color);
`;
const Faulty = styled.p`
  font-size: 1.6rem;
  color: var(--red_exit_color);
`;

const TableData = [
  {
    body: ["Terminals", "Status", "Container ID"],
  },
  {
    body: ["Crane A", "Filled", "abcd1234567, efgh1234567"],
  },
  {
    body: ["Crane B", "Empty", "None"],
  },
  {
    body: ["Crane C", "Filled", "abcd1234567, efgh1234567"],
  },
  {
    body: ["Crane D", "Filled", "abcd1234567, efgh1234567"],
  },
  {
    body: ["Crane E", "Empty", "None"],
  },
  {
    body: ["Crane F", "Filled", "abcd1234567, efgh1234567"],
  },
  {
    body: ["Crane G", "Good", "None"],
  },
];
const TableData2 = [
  {
    body: [
      "Machine",
      "Status",
      "Last Maintainance date",
      "Predicted maintaince date",
    ],
  },
  {
    body: ["Crane ", "Faulty", "29th january 2024", "29th march 2024"],
  },
  {
    body: ["Crane ", "Good", "15th july 2023", "20th january 2024"],
  },
  {
    body: ["Crane ", "Faulty", "29th january 2024", "29th march 2024"],
  },
  {
    body: ["Crane ", "Faulty", "29th january 2024", "29th march 2024"],
  },
  {
    body: ["Crane ", "Good", "15th july 2023", "20th january 2024"],
  },
  {
    body: ["Crane ", "Faulty", "29th january 2024", "29th march 2024"],
  },
  {
    body: ["Crane ", "Good", "15th july 2023", "20th january 2024"],
  },
];

function Table({ children, column }) {
  return (
    <TableStyle>
      <Header>{children}</Header>
      <TableBox>
        <Status type={"status"}>Status</Status>
        <Status type={"date"}>Updated at 17th january 2024</Status>
      </TableBox>
      <TableBox>
        {column === 3
          ? TableData.map((val, ind) => (
              <TableRow key={ind} data={val.body} index={ind} />
            ))
          : TableData2.map((val, ind) => (
              <TableRow key={ind} data={val.body} index={ind} column={column} />
            ))}
      </TableBox>
    </TableStyle>
  );
}

function TableRow({ index, data, column }) {
  return (
    <Row type={index === 0 ? "head" : ""}>
      {data.map((val, ind) => (
        <Name className={column === 3 ? "threeRow" : "fourRow"} key={ind}>
          {val === "Faulty" ? <Faulty>{val}</Faulty> : val}
          {/* {column === 4 && index !== 0 && ind === 3 && <Due>- Due</Due>} */}
        </Name>
      ))}
    </Row>
  );
}

export default Table;

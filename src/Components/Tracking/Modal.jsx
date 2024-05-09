import styled from "styled-components";
import Button from "../Button/Button";
import { setTrackFail, setTrackSuccess } from "../../Slices/TrackSlice";
import { useDispatch } from "react-redux";

const SuccessModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 0.7rem;
  background-color: var(--nav_background_color);
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 1rem;
  width: 85%;
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: var(--black_text_color);
  cursor: pointer;
`;
const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  background-color: inherit;
  border: 1px solid var(--ship_hover_color);
  padding: 0.3rem 1rem;
  position: relative;
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  border: none;
  color: var(--ship_hover_color);
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  font-size: 1.8rem;
  width: 100%;
  &:hover {
    cursor: no-drop;
  }
`;

const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: ${(props) => (props.type === "head" ? "2.5rem" : "2.5rem")};
  color: ${(props) =>
    props.type === "head"
      ? " var(--black_text_color)"
      : " var(--red_exit_color)"};
  gap: ${(props) => (props.type === "ship" ? "1rem" : "0")};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
`;
const ButtonBox = styled.div`
  justify-self: center;
  margin-top: 2.5rem;
`;
function Modal({ type }) {
  const dispatch = useDispatch();
  function handleClose() {
    type === "success"
      ? dispatch(setTrackSuccess(false))
      : dispatch(setTrackFail(false));
    // dispatch(setTrackFail(false));
  }
  return (
    <SuccessModalStyle>
      <HeadBox>
        {type === "success" ? (
          <Header type="head">Container details</Header>
        ) : (
          <Header type="fail">Container number not found</Header>
        )}
      </HeadBox>
      {type === "success" && (
        <Form>
          <Box>
            <Label>ID NUMBER</Label>
            <InputField>
              <Input disabled={true} type="text" value="Test" />
            </InputField>
          </Box>
          <Box>
            <Label>LOCATION</Label>
            <InputField>
              <Input disabled={true} type="text" value="Test" />
            </InputField>
          </Box>
          <Box>
            <Label>EXAMINATION STATUS</Label>
            <InputField>
              <Input disabled={true} type="text" value="Test" />
            </InputField>
          </Box>
          <Box>
            <Label>DAYS SPENT ON PORT</Label>
            <InputField>
              <Input disabled={true} type="text" value="Test" />
            </InputField>
          </Box>
        </Form>
      )}
      <ButtonBox onClick={() => handleClose()}>
        <Button type="normal">Okay</Button>
      </ButtonBox>
    </SuccessModalStyle>
  );
}

export default Modal;

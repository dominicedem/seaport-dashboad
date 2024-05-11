import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../Button/Button";
import { setTrackFail, setTrackSuccess } from "../../Slices/TrackSlice";
import { RxCross2 } from "react-icons/rx";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { setTerminal } from "../../Slices/SidebarSlice";
import useTrack from "../../hooks/useTrack";
import Loading from "../Loading/Loading";
import { setTrackId } from "../../Slices/AppSlice";

const TrackingStyle = styled.div`
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
const TrackingPage = styled.div`
  background: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  align-self: center;
  width: 60%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: inherit;
  align-items: center;
  gap: 4rem;
  width: 70%;
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: var(--ship_hover_color);
  cursor: pointer;
`;
const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  background-color: inherit;
  border: 1px solid var(--ship_hover_color);
  padding: 0.5rem 1rem;
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  border: none;
  color: var(--black_text_color);
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  font-size: 1.8rem;
  width: 100%;
`;
const Submit = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 0.7rem;
  background-color: var(--theme_color);
  border: none;
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--sidebar_background_color);
  cursor: pointer;
  &:hover {
    background-color: var(--theme_color_hover);
  }
`;
const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  border-bottom: 2px solid var(--black_text_hover_color);
  padding-bottom: 1rem;
  gap: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
`;
const Header = styled.div`
  font-weight: bold;
  font-size: ${(props) => (props.type === "head" ? "2.5rem" : "1.4rem")};
  color: ${(props) =>
    props.type === "head"
      ? " var(--black_text_color)"
      : " var(--ship_hover_color)"};
  gap: ${(props) => (props.type === "ship" ? "1rem" : "0")};
`;
const HeadText = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  color: var(--black_text_color);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
`;
const Guide = styled.p`
  font-size: 1.4rem;
  color: var(--red_exit_color);
`;
const TrackOverlay = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: #0006;
  backdrop-filter: blur(5px);
`;
const TrackBox = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const CancelBox = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;
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
const iconStyle = {
  fontSize: "2rem",
  color: "var(--red_exit_color)",
};
const linkStyle = {
  width: "fit-content",
  textDecoration: "none",
  color: "var(--sidebar_background_color)",
};
function Tracking() {
  const [containerNo, setContainerNo] = useState();
  const { trackSuccess, trackFail } = useSelector((state) => state.trackData);
  const dispatch = useDispatch();

  const { isTrackId } = useSelector((state) => state.appData);

  const { setTrack, data, isLoading, isFetched } = useTrack();

  function handleSubmit(e) {
    e.preventDefault();
    if (!containerNo) return;
    setTrack(containerNo);
    dispatch(setTrackId(true));
  }
  function handleOverlay(e) {
    if (e.target.className.split(" ").includes("overLay")) {
      dispatch(setTrackSuccess(false));
      dispatch(setTrackFail(false));
    }
  }
  function handleClose(type) {
    type === "success"
      ? dispatch(setTrackSuccess(false))
      : dispatch(setTrackFail(false));
  }

  useEffect(() => {
    if (!isLoading && isFetched && data?.status === "success" && isTrackId) {
      data?.status === "success" && dispatch(setTrackSuccess(true));
      setContainerNo("");
      dispatch(setTrackId(false));
    } else if (
      !isLoading &&
      isFetched &&
      data?.status === "error" &&
      isTrackId
    ) {
      dispatch(setTrackFail(true));
      setContainerNo("");
      dispatch(setTrackId(false));
    }
  }, [isLoading, isFetched, data?.status, dispatch, isTrackId]);
  return (
    <TrackingStyle>
      <HeaderBox>
        <HeadText>Track your container and shipment</HeadText>
        <Link
          onClick={() => dispatch(setTerminal(true))}
          style={linkStyle}
          to="/terminal"
        >
          <Button type="normal">Terminal</Button>
        </Link>
      </HeaderBox>
      <TrackingPage>
        <HeadBox>
          <Header type="head">Track</Header>
          <Header>Enter container number to track shipment</Header>
        </HeadBox>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Box>
            <Label htmlFor="id">CONTAINER NUMBER</Label>
            <InputField>
              <Input
                id="id"
                type="text"
                value={containerNo}
                onChange={(e) => setContainerNo(e.target.value)}
              />
            </InputField>
            <Guide>
              Container number is made up of 4 letters and 7 numbers
            </Guide>
          </Box>
          <Submit
            onClick={(e) => handleSubmit(e)}
            onSubmit={(e) => handleSubmit(e)}
          >
            Track
          </Submit>
        </Form>
      </TrackingPage>
      {trackSuccess && !isLoading && isFetched && (
        <TrackOverlay onClick={(e) => handleOverlay(e)} className="overLay">
          <TrackBox onClick={(e) => handleOverlay(e)} className="overLay">
            <CancelBox onClick={() => handleClose("success")}>
              <RxCross2 style={iconStyle} />
            </CancelBox>
            <Modal data={data?.data} type="success" />
          </TrackBox>
        </TrackOverlay>
      )}
      {trackFail && !isLoading && isFetched && (
        <TrackOverlay onClick={(e) => handleOverlay(e)} className="overLay">
          <TrackBox onClick={(e) => handleOverlay(e)} className="overLay">
            <CancelBox onClick={() => handleClose("fail")}>
              <RxCross2 style={iconStyle} />
            </CancelBox>
            <Modal type="fail" />
          </TrackBox>
        </TrackOverlay>
      )}
      {isLoading && isTrackId && (
        <LoadingStyle>
          <Loading />
        </LoadingStyle>
      )}
    </TrackingStyle>
  );
}

export default Tracking;

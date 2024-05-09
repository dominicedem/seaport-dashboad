import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { setZoom } from "../../Slices/SecuritySlice";

const ZoomedStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  position: relative;
`;
const Img = styled.img`
  width: 100vw;
`;
const CancelBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 5%;
`;
const iconStyle = {
  fontSize: "3rem",
  color: "var(--red_exit_color)",
};
function Zoomed() {
  const { zoomImg } = useSelector((state) => state.securityData);
  const dispatch = useDispatch();
  return (
    <ZoomedStyle>
      <Img src={`${zoomImg.img}`} />
      <CancelBox onClick={() => dispatch(setZoom(false))}>
        <RxCross2 style={iconStyle} />
      </CancelBox>
    </ZoomedStyle>
  );
}

export default Zoomed;

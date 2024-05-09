import { useState } from "react";
import styled from "styled-components";
import { TbZoomScan } from "react-icons/tb";
import Zoomed from "./Zoomed";
import { useDispatch, useSelector } from "react-redux";
import { setZoom, setZoomImg } from "../../Slices/SecuritySlice";

const SurveillanceStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 94%;
  height: 82.8vh;
  background-color: var(--sidebar_background_color);
  border-radius: 0.7rem;
  padding: 2.5rem;
  gap: 3rem;
  margin: 2rem auto;
  box-shadow: 0 0.5rem 1rem 0.5rem #0000000a;
  position: relative;
  overflow-y: scroll;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  color: var(--black_text_color);
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--black_text_hover_color);
  width: 100%;
  gap: 2rem;
`;
const Dot = styled.span`
  display: flex;
  align-items: center;
  background-color: var(--red_exit_color);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  top: 5%;
  left: 27.5%;
`;
const Update = styled.span`
  font-size: 1.4rem;
  color: var(--ship_hover_color);
`;
const ImgBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.5rem;
  width: 100%;
`;
const ImgCon = styled.div`
  position: relative;
  border-radius: 0.3rem;
  grid-column: ${(props) => (props.type === "first" ? "1/-2" : "")};
  grid-row: ${(props) => (props.type === "first" ? "1/-2" : "")};
`;
const Img = styled.img`
  width: 100%;
  filter: brightness(90%);
`;
const Form = styled.form`
  display: flex;
  flex-direction: inherit;
  align-items: start;
  gap: 2rem;
  width: 100%;
  align-self: start;
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
  cursor: pointer;
  border: ${(props) =>
    props.type === "range" ? "none" : "1px solid var(--ship_hover_color)"};
  padding: 0.5rem 1rem;
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  border: none;
  color: var(--black_text_color);
  border-radius: 0.7rem;
  font-size: 1.8rem;
  width: 100%;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 35%;
`;
const Select = styled.select`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  font-size: 1.8rem;
  cursor: pointer;
  border: none;
  color: var(--ship_row_text_color);
`;
const Option = styled.option`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 35%;
  &:hover {
    background: var(--theme_color_light);
  }
`;
const Zoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 7%;
  right: 3%;
`;
const ZoomedBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  backdrop-filter: brightness(30%);
`;
const iconStyle = {
  fontSize: "3rem",
  color: "var(--sidebar_background_color)",
  cursor: "pointer",
};
function Surveillance() {
  const [range, setRange] = useState(0);
  const dispatch = useDispatch();
  const { zoom } = useSelector((state) => state.securityData);
  function handleOverlay(e) {
    if (e.target.className.split(" ").includes("overLay")) {
      dispatch(setZoom(false));
    }
  }
  function handleZoom(img) {
    dispatch(setZoom(true));
    dispatch(setZoomImg({ img: `${img}` }));
  }
  return (
    <SurveillanceStyle>
      <Header>
        Security camera live <Dot></Dot>
        <Update>Updated at 2nd june, 2024 1:08:25AM</Update>
      </Header>
      <ImgBox>
        <ImgCon type="first">
          <Img src="/sea2.jpeg" />
          <Zoom>
            <TbZoomScan
              onClick={() => handleZoom("/sea2.jpeg")}
              style={iconStyle}
            />
          </Zoom>
        </ImgCon>
        <ImgCon>
          <Img src="/seaport.jpeg" />
          <Zoom>
            <TbZoomScan
              onClick={() => handleZoom("/seaport.jpeg")}
              style={iconStyle}
            />
          </Zoom>
        </ImgCon>
        <ImgCon>
          <Img src="/sea2.jpeg" />
          <Zoom>
            <TbZoomScan
              onClick={() => handleZoom("/sea2.jpeg")}
              style={iconStyle}
            />
          </Zoom>
        </ImgCon>
        <ImgCon>
          <Img src="/seaport.jpeg" />
          <Zoom>
            <TbZoomScan
              onClick={() => handleZoom("/seaport.jpeg")}
              style={iconStyle}
            />
          </Zoom>
        </ImgCon>
        <ImgCon>
          <Img src="/sea3.jpeg" />
          <Zoom>
            <TbZoomScan
              onClick={() => handleZoom("/sea3.jpeg")}
              style={iconStyle}
            />
          </Zoom>
        </ImgCon>
        <ImgCon>
          <Img src="/seaport1.jpeg" />
          <Zoom>
            <TbZoomScan
              onClick={() => handleZoom("/seaport1.jpeg")}
              style={iconStyle}
            />
          </Zoom>
        </ImgCon>
      </ImgBox>
      <Form>
        <Box>
          <Label htmlFor="id">Camera</Label>
          <InputField>
            <Select>
              <Option className="one">None</Option>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5</Option>
              <Option>6</Option>
            </Select>
          </InputField>
        </Box>
        <Box>
          <Label>Brightness</Label>
          <InputField type="range">
            <Input
              className="rangeSlider"
              value={range}
              type="range"
              max={7}
              onChange={(e) => setRange(e.target.value)}
            />
          </InputField>
        </Box>
      </Form>
      {zoom && (
        <ZoomedBox onClick={(e) => handleOverlay(e)} className="overLay">
          <Zoomed />
        </ZoomedBox>
      )}
    </SurveillanceStyle>
  );
}

export default Surveillance;

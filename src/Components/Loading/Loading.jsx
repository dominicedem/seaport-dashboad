import { ImSpinner3 } from "react-icons/im";
import styled from "styled-components";

const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const iconStyle = {
  fontSize: "4rem",
  color: "var(--theme_color)",
};
function Loading() {
  return (
    <LoadingStyle>
      <ImSpinner3 className="spinner" style={iconStyle} />
    </LoadingStyle>
  );
}

export default Loading;

import styled from "styled-components";

const ButtonStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  border-radius: 0.7rem;
  background-color: var(--theme_color);
  border: none;
  width: ${(props) => (props.type === "normal" ? "fit-content" : "100%")};
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--sidebar_background_color);
  cursor: pointer;
  &:hover {
    background-color: var(--theme_color_hover);
  }
`;
function Button({ children, type }) {
  return <ButtonStyle type={type}>{children}</ButtonStyle>;
}

export default Button;

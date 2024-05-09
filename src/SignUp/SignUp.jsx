import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../Slices/AppSlice";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";

const SignUpStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;
const Description = styled.div`
  background: linear-gradient(
      var(--theme_background_color),
      var(--theme_background_color)
    ),
    url("/seaport1.jpeg");
  width: 100%;
  background-size: cover;
`;
const SignUpPage = styled.div`
  margin: 10rem auto;
  background: var(--nav_background_color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  align-self: center;
  width: 60%;
`;
const Header = styled.h1`
  font-weight: bold;
  font-size: ${(props) => (props.type === "head" ? "2.5rem" : "1.4rem")};
  color: ${(props) =>
    props.type === "head"
      ? " var(--black_text_color)"
      : " var(--ship_hover_color)"};
  gap: ${(props) => (props.type === "ship" ? "1rem" : "0")};
`;
const Form = styled.form`
  display: flex;
  flex-direction: inherit;
  align-items: center;
  gap: 2rem;
  width: 100%;
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
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
`;
const IconStyle = {
  fontSize: "2rem",
  color: "var(--ship_hover_color)",
  cursor: "pointer",
};
function SignUp() {
  const [id, setId] = useState();
  const [reveal, setReveal] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (id === "12345" && password === "password") {
      navigate("/");
      dispatch(setIsAuth(true));
    }
  }
  return (
    <SignUpStyle>
      <Description></Description>
      <SignUpPage>
        <HeadBox>
          <Header type="head">Sign In</Header>
          <Header>Welcome back! Please enter your details</Header>
        </HeadBox>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Box>
            <Label htmlFor="id">ID</Label>
            <InputField>
              <Input
                id="id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <CgProfile style={IconStyle} />
            </InputField>
          </Box>
          <Box>
            <Label htmlFor="pass">Password</Label>
            <InputField>
              <Input
                id="pass"
                type={!reveal ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!reveal ? (
                <PiEyeSlash
                  onClick={() => setReveal((el) => !el)}
                  style={IconStyle}
                />
              ) : (
                <PiEyeLight
                  onClick={() => setReveal((el) => !el)}
                  style={IconStyle}
                />
              )}
            </InputField>
          </Box>
          <Submit
            onClick={(e) => handleSubmit(e)}
            onSubmit={(e) => handleSubmit(e)}
          >
            Sign In
          </Submit>
        </Form>
      </SignUpPage>
    </SignUpStyle>
  );
}

export default SignUp;

//import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #FF9A3C;
  background: url("images/newsletter.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  border-radius:6px;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  background-color:#B1D1C5;
  color: black;
  flex: 8;
  padding-left: 20px;
  ::placeholder { 
  color: black;
  opacity: 0.8; 
}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #FAC213;
  color: black;
  cursor: pointer;
  
  &:hover {
    background-color: #AA530E;
    color: white;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"/>
        <Button>
      SEND
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

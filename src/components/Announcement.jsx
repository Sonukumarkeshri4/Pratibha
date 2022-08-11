import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #950101;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container><i>Pratibha is empowering rural people. Be a part of our family, Call us - <u>7004043711 </u> </i> </Container>;
};

export default Announcement;

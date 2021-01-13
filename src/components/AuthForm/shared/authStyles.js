import { Avatar, Box, Button, Paper } from "@material-ui/core";
import styled from "styled-components";

const StyledLoginAvatar = styled(Avatar)`
  background-color: #08cb85;
`;

const StyledSignupAvatar = styled(Avatar)`
  background-color: #9746e6;
`;

const StyledButton = styled(Button)`
  margin-bottom: 10px;
`;

const StyledFormBox = styled(Box)`
  height: 150px;
`;

const StyledFormPaper = styled(Paper)`
  margin: 100px auto;
  padding: 20px;
  height: 480px;
  width: 380px;
`;

const StyledTitle = styled.h2`
  font-size: 2.3rem;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: "Raleway";
`;

export {
  StyledLoginAvatar,
  StyledSignupAvatar,
  StyledButton,
  StyledFormPaper,
  StyledFormBox,
  StyledTitle,
};

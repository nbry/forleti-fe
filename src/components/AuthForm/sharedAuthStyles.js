import { Avatar, Button, Paper } from "@material-ui/core";
import styled from "styled-components";

const StyledAvatar = styled(Avatar)`
  background-color: #08cb85;
`;

const StyledSubmitButton = styled(Button)`
  margin: 8px 0;
`;
const StyledFormPaper = styled(Paper)`
  margin: 100px auto;
  padding: 20px;
  height: 55vh;
  width: 380px;
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export { StyledAvatar, StyledSubmitButton, StyledFormPaper, StyledTitle };

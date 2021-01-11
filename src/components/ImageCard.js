import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

function ImageCard() {
  return (
    <StyledCard>
      <StyledCardMedia
        image={process.env.PUBLIC_URL + "/assets/blog.jpg"}
        title="Contemplative Reptile"
      />
      <CardContent>
        <StyledTitle gutterBottom variant="h5" component="h2">
          Lizard
        </StyledTitle>
        <StyledDescription variant="body2" component="p">
          Default Material UI description for lizards
        </StyledDescription>
      </CardContent>
    </StyledCard>
  );
}

export default ImageCard;

//STYLES:
const StyledCard = styled(Card)`
  max-width: 600px;
  background: rgb(0, 0, 0, 0.5);
`;

const StyledCardMedia = styled(CardMedia)`
  height: 400px;
`;

const StyledTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

const StyledDescription = styled(Typography)`
  font-size: 1rem;
  color: #ddd;
`;

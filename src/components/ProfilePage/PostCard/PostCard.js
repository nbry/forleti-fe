import { Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function PostCard() {
  return (
    <StyledPaper elevation={5}>
      {/* Implement Dynamic card generation later */}
      <h3>Testing Post Title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        tortor enim, adipiscing in semper a, pellentesque quis sem. Vivamus eu
        odio at tellus sollicitudin viverra. Sed dignissim molestie imperdiet.
        Nulla sit amet tortor eu nisl vestibulum dignissim. Donec scelerisque
        vulputate tortor, non dapibus massa molestie at. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Etiam a mauris sit amet augue suscipit dapibus non in lectus. Nunc
        mattis eros ligula, ut tincidunt sapien. Nulla eget velit ipsum.
        Suspendisse potenti. Suspendisse et sem at sem sagittis lobortis.
        Quisque lacinia, nisl in elementum aliquet, arcu neque rhoncus tellus,
        at ornare mi enim sit amet sem. Phasellus a nisi vel ipsum laoreet
        mollis.
      </p>
    </StyledPaper>
  );
}

export default PostCard;

// STYLES:
const StyledPaper = styled(Paper)`
  min-height: 300px;
  width: 95%;
`;

import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 0.5rem;
  background: #f0f0f0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  border: 3px solid #0f0f0f;
  color: #0f0f0f;
`;

function PostCard({ post: { id, text, userId } }) {
  return (
    <Div>
      <p>
        {userId}&nbsp;|&nbsp;<span>{text}</span>
      </p>
    </Div>
  );
}

export default PostCard;

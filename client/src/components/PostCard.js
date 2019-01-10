import React from "react";

function PostCard({ post: { id, text, userId } }) {
  return (
    <div>
      <p>
        {userId}&nbsp;|&nbsp;<span>{text}</span>
      </p>
    </div>
  );
}

export default PostCard;

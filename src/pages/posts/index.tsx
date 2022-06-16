import Link from "next/link";
import React from "react";

const Post = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a> Back to Home</a>
        </Link>
      </h2>
    </>
  );
};

export default Post;

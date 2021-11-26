import Link from "next/link";
import { useState } from "react";

const PostCard = (props) => {
  const { post, link } = props;
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="like" onClick={(e) => {
        setLiked(!liked)
        if (!liked) {
          setCount(count + 1)
        }
      }}>{liked ? "♥" : "♡"} {count}</div>
      <Link href={link}><a>open</a></Link>
    </div>
  )
}

export default PostCard;

//♡ ♥
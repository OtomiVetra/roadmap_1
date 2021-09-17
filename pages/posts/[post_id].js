import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const API_URL = "http://localhost:3001";

const UserPage = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const router = useRouter()
  const { post_id } = router.query
  useEffect(() => {
    if (!post_id) return false;
    fetch(`${API_URL}/posts/${post_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.item);
      });
    fetch(`${API_URL}/comments?postId=${post_id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.items);
      });
  }, [post_id])
  return (
    <div className="container">
      <div>
        {!!post && (
          <div className="item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )}
      </div>
      <div className="items">
        {comments.map((comment) => {
          return (
            <div className="item" key={comment.id}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserPage;
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/main";
import PostArticle from "../../components/posts/Article";
import CommentToast from "../../components/comments/Toast";
//const API_URL = "/api";
const API_URL = "http://localhost:3001";

//ss
const UserPage = () => {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
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
  useEffect(() => {
    if (!post) return false
    fetch(`${API_URL}/users/${post.userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.item);
      })
  }, [post])
  return (
    <MainLayout>
      <div className="row">
        <div className="col-lg-6">
          {!!post && (
            <PostArticle post={post} user={user} />
          )}
        </div>
        <div className="col-lg-6">
          {comments.map((comment) => {
            return (
              <CommentToast comment={comment} key={comment.id} />
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}

export default UserPage;
import { comment } from "../../data/mock";

const CommentToast = ({ comment }) => {
  const { name, body, email } = comment
  return (
    <div className="toast toast-comment showing mb-3">
      <div className="toast-header">
        <strong className="me-auto">{name}</strong>
        <small>{email}</small>
        {/* <button
          type="button"
          className="btn-close"
        /> */}
      </div>
      <div className="toast-body">{body}</div>
    </div>

  )
}

export default CommentToast;
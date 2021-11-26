import Link from "next/link";

const UserCard = (props) => {
  const { user, link } = props
  return (
    <div className="text-center">
      <img src={`https://i.pravatar.cc/150?u=${user.id}`} className="bd-placeholder-img rounded-circle" />
      <h2>{user.name}</h2>
      <p>
        {user.email}
      </p>
      {(!!link) && (
        <p>
          <Link href={link}><a className="btn btn-secondary">View details</a></Link>
        </p>
      )}
    </div>
  )
}

export default UserCard;
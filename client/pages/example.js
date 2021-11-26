const User = (props) => {
  return (
    <div className="item_template">
      <li className="card">
        <img src="#" alt="#" className="card__image"></img>
        <div className="card__info">
          <h2 className="card__title"></h2>
          <button className="card__button" type="button"></button>
          <button className="card__delete-button"></button>
        </div>
      </li>
    </div>
  )
}


const IndexPage = () => {
  const name = "John"
  const src = "https://placekitten.com/408/287"
  return (
    <>
      <User name="John" src={src} />
      <h2 className="title">hello! {name}</h2>
      <p>hello</p>
      <img src={src} />
      <User name="Dave" src="https://placekitten.com/408/232" />
    </>
  )

}

export default IndexPage;




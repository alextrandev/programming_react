import "./Box.css"

const Box = (props) => {
  return(
    <div className="box">
    <h1>Name: {props.name}</h1>
    <p>Title: {props.title}</p>
    <p>Location: {props.location}</p>
    </div>
  )
}

export default Box
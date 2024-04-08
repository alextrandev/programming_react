import "./Box.css"

const Box = (props) => {
  return(
    <div className="bg-opacity-35 bg-white rounded shadow px-5 py-4 m-3">
    <h1>Name: {props.name}</h1>
    <p>Title: {props.title}</p>
    <p>Location: {props.location}</p>
    </div>
  )
}

export default Box
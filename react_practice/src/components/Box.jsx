import "./Box.css"

const Box = ({name, title, location}) => {
  return(
    <div className="bg-opacity-35 bg-white rounded shadow px-5 py-4 m-3">
    <h1>Name: {name}</h1>
    <p>Title: {title}</p>
    <p>Location: {location}</p>
    </div>
  )
}

export default Box
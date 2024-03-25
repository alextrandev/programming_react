const Box = (props) => {
  return(
    <div>
    <h1>Name: {props.name}</h1>
    <p>Age: {props.age}</p>
    <p>Title: {props.title}</p>
    </div>
  )
}

export default Box
export default function View(props) {
  return (
    <>
      <p>Firstname: {props.firstName}</p>
      <p>Lastname: {props.lastName}</p>
      <p>Phone: {props.phone}</p>
      <p>E-mail: {props.email}</p>
      <p>Message: {props.message}</p>
    </>
  )
}

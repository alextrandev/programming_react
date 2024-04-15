export default function View({firstName, lastName, phone, email, message}) {
  return (
    <>
      <p>Firstname: {firstName}</p>
      <p>Lastname: {lastName}</p>
      <p>Phone: {phone}</p>
      <p>E-mail: {email}</p>
      <p>Message: {message}</p>
    </>
  )
}

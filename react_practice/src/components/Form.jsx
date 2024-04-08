export default function Form({inputChangeHandler}) {
  return (
    <form className="flex flex-col items-start gap-2" onChange={inputChangeHandler}>
        <label htmlFor="firstName">Firstname</label>
        <input type="text" name="firstName" id="firstName"/>
        <label htmlFor="lastName">Lastname</label>
        <input type="text" name="lastName" id="lastName"/>
        <label htmlFor="phone">Phone</label>
        <input type="phone" name="phone" id="phone"/>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email"/>
        <label htmlFor="message">Message</label>
        <input type="text" name="message" id="message"/>
    </form>
  )
}
export default function LogInButton({ loginHandler, isLoggedIn }) {
  return (
    <button onClick={loginHandler}>
      Login
    </button>
  )
}

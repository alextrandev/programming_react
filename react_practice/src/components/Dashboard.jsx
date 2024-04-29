export default function Dashboard({ user }) {
  return (
    <div>
      {user === 'Alex'
        ? (<h1>Welcome to dashboard, {user}</h1>)
        : (<h1>Welcome to dashboard guest</h1>)
      }
    </div>
  )
}

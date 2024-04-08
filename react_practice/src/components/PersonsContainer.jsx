import Box from './Box'

function PersonsContainer({persons}) {
  return (
        <div className='container'>
          {persons.map(person => (
            <Box 
              key={person.id}
              name={person.name} 
              title={person.title}
              location={person.location}
            />
          ))}
        </div>
  )
}

export default PersonsContainer
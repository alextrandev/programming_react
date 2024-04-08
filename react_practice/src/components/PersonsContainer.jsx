import Box from './Box'

function PersonsContainer({persons}) {
  return (
        <div className='grid grid-cols-2 gap-3 m-10'>
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
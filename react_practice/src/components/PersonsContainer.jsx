import Box from './Box'

function PersonsContainer({persons}) {
  return (
        <div className='grid grid-cols-2 gap-3 m-10'>
          {persons.map(({id, name, title, location}) => (
            <Box 
              key={id}
              name={name} 
              title={title}
              location={location}
            />
          ))}
        </div>
  )
}

export default PersonsContainer
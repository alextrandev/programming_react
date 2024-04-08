function Counter(props) {
  return (
        <div>
          <p className="text-xl">Counter: {props.counter}</p>
          <button className="bg-green-500 rounded shadow py-1 px-2 text-white m-1" onClick={props.clickIncreaseHandler}>Increase</button>
          <button className="bg-yellow-500 rounded shadow py-1 px-2 text-white m-1" onClick={props.clickDecreaseHandler}>Decrease</button>
          <button className="bg-red-500 rounded shadow py-1 px-2 text-white m-1" onClick={props.clickResetHandler}>Reset</button>
        </div>
  )
}

export default Counter
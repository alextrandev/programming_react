function Counter({counter, clickIncreaseHandler, clickDecreaseHandler, clickResetHandler}) {
  return (
        <div className="m-5 bg-white bg-opacity-35 rounded shadow p-4">
          <p className="text-xl">Counter: {counter}</p>
          <button className="bg-green-500 rounded shadow py-1 px-2 text-white m-1" onClick={clickIncreaseHandler}>Increase</button>
          <button className="bg-yellow-500 rounded shadow py-1 px-2 text-white m-1" onClick={clickDecreaseHandler}>Decrease</button>
          <button className="bg-red-500 rounded shadow py-1 px-2 text-white m-1" onClick={clickResetHandler}>Reset</button>
        </div>
  )
}

export default Counter
const ErrorHandle = () => {
  let count = 0

  const handleClick = () => {
    count = count + 1
    console.log(count)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  )
}
export default ErrorHandle

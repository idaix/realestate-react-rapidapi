const Button = ({ children, css }) => {
  return (
    <button 
      type="button"
      className={`${css} inline-block px-6 py-2.5  font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`}
    >
      {children}
    </button>

  )
}

export default Button
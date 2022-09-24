const Select = ({ children, label, onChange, value }) => {
  return (
    <div className="flex flex-col capitalize flex-1">
        <label className="text-gray-500 text-sm" for={label}>{label}</label>
        <select 
          id={label}
          onChange={onChange}
          className="bg-primary-light text-primary rounded px-2 py-1 outline-none"
        >
          {children}
        </select>
    </div>
  )
}

export default Select
import React from 'react'

const Select = ({ data, title }) => {
  return (
    <>
        <select className="bg-primary-light text-primary rounded px-2 py-1 outline-none capitalize flex-1">
            <option selected>{title}</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
        </select>
    </>
  )
}

export default Select
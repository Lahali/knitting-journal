import React from "react"

const InputGroup = ({ placeholder, type, name }) => {
  return (
    <div className="flex flex-col w-4/6 gap-1 my-5">
      <label htmlFor={name}>{name}</label>
      <input
        placeholder={placeholder}
        type={type}
        className="bg-[#D9D9D9] p-3 rounded"
      />
    </div>
  )
}

export default InputGroup

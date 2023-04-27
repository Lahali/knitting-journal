import React, { forwardRef } from "react"

const InputGroup = forwardRef(
  (
    { placeholder = "text", type = "text", labelText = "text", id = "text" },
    ref
  ) => (
    <div className="flex flex-col w-4/6 gap-1 my-5">
      <label htmlFor={id}>{labelText}</label>
      <input
        placeholder={placeholder}
        type={type}
        className="bg-[#D9D9D9] p-3 rounded"
        ref={ref}
      />
    </div>
  )
)

export default InputGroup

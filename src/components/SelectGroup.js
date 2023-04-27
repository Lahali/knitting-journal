import React, { forwardRef } from "react"

const SelectGroup = forwardRef(({ id, labelText }, ref) => (
  <div className="flex flex-col w-4/6 gap-1 my-5">
    <label htmlFor={id}>{labelText}</label>
    <select name={id} className="bg-[#D9D9D9] p-3 rounded" ref={ref}>
      <option value="none">Choose an option</option>
      <option value="crochet">Crochet</option>
      <option value="knit">Knit</option>
    </select>
  </div>
))

export default SelectGroup

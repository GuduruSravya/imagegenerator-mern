import React from 'react'

const Form = ({labelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleSurprisMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-900'
        >
          {labelName}
        </label>
        {
          isSurpriseMe && (
            <button type="button" 
            onClick={handleSurprisMe}
            className='font-semibold border text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'>
              Surprise ME!

            </button>
          )
        }
      </div>
      <input 
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className='bg-grey-50 border-gray-300 text-gray-900
      text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block w-full p-3'
      />
    </div>
  )
}

export default Form
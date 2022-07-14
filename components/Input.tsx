import { useEffect, useRef } from 'react';

interface PropsInputType {
  type?: string;
  name: string;
  value: string | number;
  className?: string;
  autoComplete?: string;
  required: boolean;
  isFocused: boolean;
  handleChange(p:any):void;
}

const Input = ({ type = 'text', name, value, className, autoComplete = "on", required, isFocused, handleChange}:PropsInputType ) => {
  
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isFocused) {
      input.current.focus()
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      <input
      type={type}
      name={name}
      aria-label={name}
      value={value}
      className={
      `border-gray-500 focus:border-red focus:ring focus:ring-red-300 focus:ring-opacity-50 rounded-lg shadow-sm ` +
      className
      }
      ref={input}
      autoComplete={autoComplete}
      required={required}
      onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

const Label = ({ forInput, value, className, children }) => {
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}

Input.label = Label

export default Input

const Input = ({ label, type, name, onChange, value, placeholder }) => {
  return (
    <div className="flex flex-col space-y-2 items-start">
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder={placeholder} type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
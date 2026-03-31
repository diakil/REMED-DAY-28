function FormInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div className="mb-3 text-start">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default FormInput

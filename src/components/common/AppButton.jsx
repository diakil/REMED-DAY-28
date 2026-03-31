function AppButton({ children, className = 'btn btn-primary', ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export default AppButton

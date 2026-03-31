function Loader({ text = 'Loading...' }) {
  return (
    <div className="d-flex align-items-center gap-2" role="status">
      <div className="spinner-border spinner-border-sm" aria-hidden="true"></div>
      <span>{text}</span>
    </div>
  )
}

export default Loader

import AppButton from '../../../components/common/AppButton'

function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
      <AppButton
        type="button"
        className="btn btn-outline-secondary"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </AppButton>
      <span className="fw-semibold">
        Page {page} of {totalPages}
      </span>
      <AppButton
        type="button"
        className="btn btn-outline-secondary"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </AppButton>
    </div>
  )
}

export default Pagination

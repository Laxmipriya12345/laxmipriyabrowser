import './index.css'

const SearchHistoryItems = props => {
  const {companyDetails, deleteDomain} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = companyDetails

  const onDelete = () => {
    deleteDomain(id)
  }

  return (
    <li className="list shadow-lg">
      <p className="time">{timeAccessed}</p>

      <div className="domains">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="para">{title}</p>
        <p className="dom">{domainUrl}</p>
      </div>
      <button className="btn" type="button" testid="delete" onClick={onDelete}>
        <img
          className="delete"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default SearchHistoryItems

import './index.css'

const History = props => {
  const {eachHistoryItem, onDelete} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryItem

  const deleteHistoryItem = () => {
    onDelete(id)
  }

  return (
    <li className="history-list-item">
      <div className="list-sub-item-1">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="list-sub-item-2">
        <div className="sub-flex-con">
          <img
            className="logo-img"
            src={logoUrl}
            alt="domain logo"
            className="image"
          />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <div className="list-sub-item-3">
          <button
            type="button"
            className="btn"
            onClick={deleteHistoryItem}
            data-testid="delete"
          >
            <img
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="image"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default History

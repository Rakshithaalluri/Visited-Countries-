/* eslint-disable react/no-unknown-property */
import './index.css'

const CountryItem = props => {
  const {countryDetails, onRemoveItem} = props
  const {id, name, imageUrl, isVisited} = countryDetails

  const removeItem = () => {
    onRemoveItem(id)
  }

  return (
    <li className="country-list-item">
      {isVisited && (
        <>
          <img src={imageUrl} alt="thumbnail" className="country-image" />
          <div className="country-details">
            <p className="con-name"> {name} </p>
            <button
              type="button"
              className="remove-button"
              onClick={removeItem}
            >
              Remove
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default CountryItem

import './index.css'

const TabItem = props => {
  const {tabData, isActive, onTabClick} = props
  const {tabId, displayText} = tabData

  const extraClass = isActive ? 'extra' : ''

  const onTab = () => {
    onTabClick(tabId)
  }
  return (
    <li>
      <button className={`tab-btn ${extraClass}`} type="button" onClick={onTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

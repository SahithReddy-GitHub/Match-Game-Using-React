import './index.css'

const ImageItem = props => {
  const {imageData, onImageClick} = props
  const {id, thumbnailUrl} = imageData

  const onImage = () => {
    onImageClick(id)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={onImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ImageItem

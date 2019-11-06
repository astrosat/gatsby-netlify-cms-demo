import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems, heading }) => (
  <div>
    <div className="modules-header-div">
      {heading}
    </div>
    {gridItems.map(item => (
      <div className="story-container-div" key={item.text}>
        <p className="story-text">{item.text}</p>
        <PreviewCompatibleImage imageInfo={item} />
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid

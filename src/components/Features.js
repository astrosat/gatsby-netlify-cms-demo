import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({name, gridItems, heading }) => (

  <div>
    <div className="modules-header-div">
      {heading}
    </div>

  {gridItems.map((item, index) => {

    const alternatingRows = index % 2 === 0 ? 'stories-container' : 'stories-container-reverse';

    return (
      <div
        key={item.text}
        className={
          name === 'stories' || name === 'modules'
          ? alternatingRows
          : 'regular-layout'
        }
      >

        <div className='image-div'>
          <PreviewCompatibleImage imageInfo={item} />
        </div>

        <div className='text-div'>
          <p className={'stories-text'}>{item.text}</p>
          <Link to="/">
            Find More
          </Link>
        </div>
      </div>
    )
  })}
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

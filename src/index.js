import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Component = ({ children }) => (
  <div className={styles.view}>
    <h1 className={styles.title}>{children}</h1>
  </div>
)

Component.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Component

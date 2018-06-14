import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import style from './style.css'

const Button = ({
  children,
  fill,
  onClick,
  disabled,
}) => (
  <button
    className={classNames(style.button, style[fill])}
    onClick={onClick}
    disabled={disabled}
  >
    { children }
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  fill: PropTypes.oneOf([
    'outline', 'clean',
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  fill: null,
  disabled: false,
}

export default Button

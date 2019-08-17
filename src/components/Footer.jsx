import React, { memo } from "react"
import PropTypes from 'prop-types'

const Footer = ({ buttons }) =>
 buttons.map(({ name, onClick }) => (
  <button type='button' onClick={onClick} key={name}>
   {name}
  </button>
 ))

Footer.propTypes = {
 buttons: PropTypes.arrayOf(
  PropTypes.shape({
   name: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
  })
 ).isRequired
}

export default memo(Footer)

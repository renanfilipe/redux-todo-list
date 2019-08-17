import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Footer } from '../components'
import { setVisibilityFilter, SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../actions'

const FooterContainer = () => {
 const dispatch = useDispatch()
 const buttons = [
  {
   name: 'Show all',
   onClick: () => dispatch(setVisibilityFilter(SHOW_ALL))
  },
  {
   name: 'Show completed',
   onClick: () => dispatch(setVisibilityFilter(SHOW_COMPLETED))
  },
  {
   name: 'Show incompleted',
   onClick: () => dispatch(setVisibilityFilter(SHOW_INCOMPLETED))
  }
 ]

 return <Footer buttons={buttons} />
}

export default memo(FooterContainer)

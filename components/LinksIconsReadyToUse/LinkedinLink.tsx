import React from 'react'
import LinkedinLinkIcon from '../../public/assets/IconLinks/LinkedinLinkIcon'

const LinkedinLink = () => {
  const url = 'https://www.linkedin.com/in/kacperpieron/'

  return (
    <a href={url} target='blank' rel="noopener noreferrer">
        <LinkedinLinkIcon />
    </a>
  )
}

export default LinkedinLink
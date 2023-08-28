import React from 'react'
import GithubLinkIcon from '../../public/assets/IconLinks/GithubLinkIcon'

const GithubLink = () => {
  const url = 'https://github.com/seyy'

  return (
    <a href={url} target='blank' rel='noopener noreferrer'>
        <GithubLinkIcon />
    </a>
  )
}

export default GithubLink
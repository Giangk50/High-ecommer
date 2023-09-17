import React, { FC, useEffect, useState } from 'react'
import BackToTopIcon from '../Icons/BackToTopIcon'

const BackToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setIsVisible(scrollTop > 0)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-20 right-4 rounded-full bg-main p-2 transition-opacity duration-300 hover:bg-hover ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } z-50 cursor-pointer lg:bottom-4`}
      onClick={scrollToTop}
    >
      <BackToTopIcon />
    </div>
  )
}

export default BackToTop

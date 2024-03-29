import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import {useState, useEffect} from 'react'
import cn from 'classnames'
import Link from 'next/link'
import useDelayedRender from 'use-delayed-render'

import styles from 'styles/mobile-menu.module.css'

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {mounted: isMenuMounted, rendered: isMenuRendered} = useDelayedRender(isMenuOpen, {
    enterDelay: 20,
    exitDelay: 300,
  })

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <AiOutlineMenu className="absolute w-5 h-5 text-gray-900" data-hide={isMenuOpen} />
        <GrClose className="absolute w-5 h-5 text-gray-900" data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute bg-gray-100',
            isMenuRendered && styles.menuRendered,
          )}
        >
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300"
            style={{transitionDelay: '150ms'}}
          >
            <Link href="/" className="flex w-auto pb-4">
              Home
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300"
            style={{transitionDelay: '175ms'}}
          >
            <Link href="/about" className="flex w-auto pb-4">
              About
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300"
            style={{transitionDelay: '200ms'}}
          >
            <Link href="/blog" className="flex w-auto pb-4">
              Writing
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300"
            style={{transitionDelay: '250ms'}}
          >
            <Link href="/bookmarks" className="flex w-auto pb-4">
              Bookmarks
            </Link>
          </li>
        </ul>
      )}
    </>
  )
}

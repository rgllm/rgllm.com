'use client'

import {useRouter} from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

import Footer from 'components/Footer'
import MobileMenu from 'components/MobileMenu'
import Weather from './Weather'

function NavItem({href, text}) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive ? 'font-semibold text-[#24292f]' : 'font-normal text-[#24292f]',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all hover:bg-[#ededed] duration-120',
          `umami--click--menu-${text.toLowerCase()}`,
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  )
}

export default function Container({children}) {
  return (
    <div className="bg-gray-50 ">
      <div className="flex flex-col justify-center px-8">
        <nav className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 border-gray-200 sm:pb-16 bg-gray-50 bg-opacity-60">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/blog" text="Writing" />
            <NavItem href="/bookmarks" text="Bookmarks" />
          </div>
          <Weather />
        </nav>
      </div>
      <main id="skip" className="flex flex-col justify-center px-8 bg-gray-50">
        {children}
        <Footer />
      </main>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <header className="text-gray-900 bg-blue-500 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">Car Blog </span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"/"} className="mr-5 hover:text-gray-900">Blog</Link>
      <Link href={"/Contact"} className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
  </div>
 </header>

    </div>
  )
}

export default Header
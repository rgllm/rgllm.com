import Link from 'next/link'
import React from 'react'

export default function ProjectCard({href, name, icon, description}) {
  return (
    (<Link href={href} passHref className={`umami--click--homepage-${name}`}>

      <li className="w-full mb-4 cursor-pointer transform hover:scale-[1.01] transition-all">
        <div className="flex p-4 pl-0 border-0 border-gray-600 border-solid rounded-lg align-center">
          <div className="flex flex-col justify-center mr-4 align-center">{icon}</div>
          <div className="flex flex-col">
            <h3 className="mb-0 text-gray-900 font-base font-weight-bold">{name}</h3>
            <p className="font-normal text-gray-600">{description}</p>
          </div>
        </div>
      </li>

    </Link>)
  );
}

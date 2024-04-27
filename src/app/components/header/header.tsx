import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i´m Laíza! 👋</h1>
            <h2>Development Software</h2>
          </div>
          <Image
            src="/me.jpeg"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}
import Link from 'next/link';
import React from 'react';

export default function RootLayout({children}: {children:React.ReactNode}){
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
        <body>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/settings">Settings</Link></li>
          </ul>
          {children}
          <div>footer</div>
        </body>
    </html>
  )
}
export default function RootLayout({children}: {children:React.ReactNode}){
  return (
    <html>
      <head/>
        <body>
          <div>Header</div>
          {children}
          <div>footer</div>
        </body>
    </html>
  )
}
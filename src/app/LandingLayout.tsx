import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react'
interface Iprops{
    children: any;
}
const LandingLayout: React.FC<Iprops> = ({children}) =>{
  return (
    <div>
    <body>
        <div>
        {children}
        <hr/>
        </div>
      </body>
    </div>
  )
}

export default LandingLayout

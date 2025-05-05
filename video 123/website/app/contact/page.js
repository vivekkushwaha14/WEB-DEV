import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
        <Script>
            {`alert("welcome to contact page");` }
        </Script>
      this is contact
    </div>
  )
}

export default contact
export const metadata = {
    title: " Contact Facebook - connect with the world",
    description: "This is page where you can contact facebook and we connect with the world using facebook",
  };

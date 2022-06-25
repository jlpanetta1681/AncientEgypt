import React from 'react'
import Image from 'next/image'

function Hieroglyphics() {
  return (
 <div>
    <div>The languages of the gods</div>
<Image
 src='/hieroglyphs.jpg' 
 alt='glyphs' 
 width='250'
 height='250'

 />
<Image
 src='/hieroglyphs2.jpg' 
 alt='glyphs' 

 width='250'
 height='250'
 />
 </div>
  )
}

export default Hieroglyphics;
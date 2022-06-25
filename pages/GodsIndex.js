import Image from 'next/image';

function GodsIndex() {
  return (
<div>
<Image
 src='/nubis.jpg' 
 alt='glyphs' 
 layout='fill'
 />
    <h1 className='header'>
    List of gods page
    </h1>
</div>

  )
}

export default GodsIndex
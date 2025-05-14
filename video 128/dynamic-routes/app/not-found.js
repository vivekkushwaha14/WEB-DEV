import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center'>
        <p className='text-4x1 font-bold mb-4'>Not Found</p>
        <p className='text-lg text-gray-600'>Could not find requested resource</p>
        <Link href="/" className='text-blue hover:underline' >Return home</Link>
      
    </div>
  )
}
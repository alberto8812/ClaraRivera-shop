import Image from 'next/image'
import { titleFont } from '../../config/fonts'

export default function login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className={titleFont.className}>login page</h1>
    </div>
  )
}

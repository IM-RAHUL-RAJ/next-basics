import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
function Home() {

//clicking button and routing

const router = useRouter();
const handleInput=()=>{
    router.push("/");
}
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
     
          <a onClick={()=>router.push("/")}>Blog Post</a>
       
      </li>
      <li>
     
     <a onClick={handleInput}>Blog Post 2 </a>
  
 </li>
    </ul>
  )
}

export default Home
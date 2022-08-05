import React from 'react'
import {useRouter} from 'next/router';

const blogno = () => {
    const router = useRouter();
    const number=router.query.blogno;
  return (
    <div>
      this is blog {number}
    </div>
  )
}

export default blogno

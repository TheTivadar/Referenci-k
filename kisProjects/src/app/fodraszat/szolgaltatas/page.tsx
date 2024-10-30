import Arak from '@/app/ui/fodraszat/arak'
import BlogSection from '@/app/ui/fodraszat/blogSection'
import ClientReview from '@/app/ui/fodraszat/clientReview'
import Szolgaltatasok2 from '@/app/ui/fodraszat/szolgaltatasok2'
import React from 'react'

const Szolgaltatas = () => {
  return (
    <div>
        <Szolgaltatasok2 />
        <Arak />
        <ClientReview />
        <BlogSection />
    </div>
  )
}

export default Szolgaltatas
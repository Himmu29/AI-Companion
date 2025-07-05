export const dynamic = 'force-dynamic'; 
import CompanionsList from '@/components/CompanionList'
import CompanionCard from '@/components/CompanionCard'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSession } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async() => {

  const companions = await getAllCompanions({limit:3});
  const recentSessionCompanions = await getRecentSession(10);

  return (
    <div>
        <h1 className='px-5'>Popular Companions</h1>
        <section className='home-section px-5 py-5'>
          {companions.map((companion)=>(
            <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
            />
          ))}
          
        </section>

        <section className='home-section px-5'>
            <CompanionsList
              title="Recently completed sessions"
              companions={recentSessionCompanions}
              classNames="w-2/3 max-lg:w-full"
            />
            <Cta/>
        </section>
    </div>
    
  )
}

export default Page
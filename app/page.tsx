import ComapnionsList from '@/components/ComapnionsList'
import CompanionCard from '@/components/CompanionCard'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div>
        <h1 className='px-5'>Popular Companions</h1>
        <section className='home-section px-5 py-5'>
            <CompanionCard
              id="123"
              name="Neura the Brainy Explorer"
              topic="Neural Network of the Brain"
              subject="science"
              duration={45}
              color="#ffda6e"
            />
            <CompanionCard
              id="456"
              name="Countsy the Number Wizard"
              topic="Derivatives and Integrals"
              subject="maths"
              duration={30}
              color="#e5d0ff"
            />
            <CompanionCard
              id="789"
              name="Verba the vocabulary builder"
              topic="langauge"
              subject="English Literature"
              duration={30}
              color="#BDE7FF"
            />
        </section>

        <section className='home-section px-5'>
            <ComapnionsList
              title="Recently completed sessions"
              companions={recentSessions}
              classNames="w-2/3 max-lg:w-full"
            />
            <Cta/>
        </section>
    </div>
    
  )
}

export default Page
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Benefits from '@/components/Benefits'
import Courses from '@/components/Courses'
import Instructor from '@/components/Instructor'
import Testimonials from '@/components/Testimonials'
import LeadCapture from '@/components/LeadCapture'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Courses />
        <Instructor />
        <Testimonials />
        <LeadCapture />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

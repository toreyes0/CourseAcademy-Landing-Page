import React from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import {
  HomeFeature,
  HomeHero,
  HomePopularCourse,
  HomeTestimonial,
  HomeOurMentors,
  HomeNewsLetter,
} from '@/components/home'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HomeHero />
      <HomePopularCourse />
      <HomeFeature />
      <HomeTestimonial />
      <HomeOurMentors />
      <HomeNewsLetter />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home

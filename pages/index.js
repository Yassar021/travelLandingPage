import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"
import About from "../components/about"
import Activity from "../components/activity"
import Destination from "../components/destination"
import Footer from "../components/footer"
import Hero from "../components/hero"
import HotelRestaurant from "../components/hotelRestaurant"
import Travel from "../components/travel"

const Index = () => {
  return(
    <>
    <Head>
      <title>Travel Design</title>
    </Head>
    
    <Hero />
    
    
    <Container maxW='8xl' pt='120px'>
      <Destination />
      <HotelRestaurant />
      <Travel />
      <Activity />
      <About />
    </Container>

    <Footer />
    </>
  )
}

export default Index
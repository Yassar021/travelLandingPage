import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import CardDestination from "./cardDestination"

const Destination = () => {
    return(
        <Box>
            <Text fontSize='32px' fontWeight='600' color='#161414'>Popular Destinations</Text>
            <SimpleGrid columns={{base:2,md:3,lg:6,xl:6,'2xl':6}} spacing='32px'  mt='64px'>
                <CardDestination image={'/a-desti.png'}  title={'Big Sur'} desc={'California, USA'} />
                <CardDestination image={'/b-desti.png'}  title={'Prescott'} desc={'Arizona, USA'}  />
                <CardDestination image={'/c-desti.png'}  title={'Fort Mayers'} desc={'Florida, USA'}  />
                <CardDestination image={'/d-desti.png'}  title={'Tucson'} desc={'Arizona, USA'}  />
                <CardDestination image={'/e-desti.png'}  title={'ST. Joseph'} desc={'Michigan, USA'}  />
                <CardDestination image={'/f-desti.png'}  title={'Madrid'} desc={'Spain'}  />
            </SimpleGrid>
        </Box>
    )
}

export default Destination
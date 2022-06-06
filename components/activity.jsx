import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import CardActivity from "./cardActivity"

const Activity = () => {
    return(
        <Box  pt='120px'>
            <Flex direction='row' justifyContent='space-between'> 
                <Text fontSize='32px' fontWeight='600' color='#161414'>Activities</Text>
                <Button 
                    rightIcon={
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4767 9.16664L9.00671 4.69664L10.185 3.51831L16.6667 9.99998L10.185 16.4816L9.00671 15.3033L13.4767 10.8333H3.33337V9.16664H13.4767Z" fill="#5243C2"/>
                        </svg>
                        }   
                        size='md'
                        height='44px'
                        width={{base:'105px',md:'105px',lg:'105px',xl:'105px','2xl':'105px'}}
                        border='1px'
                        borderColor='#F6F4FF'
                        color='#5243C2'
                        bgColor='#F6F4FF'
                        _hover={{ bg: '#F6F4FF' }}
                        _active={{
                           bg: '#F6F4FF',
                           transform: 'scale(0.98)',
                           borderColor: '#bec3c9',
                        }}
                        >
                            View all
                        </Button>
            </Flex>

            <SimpleGrid mt='64px' columns={{base:'1',md:2, lg:4,xl:4,'2xl':4}} spacing='32px'>
                <CardActivity image={'a-activy.png'} title='Sailing' />
                <CardActivity image={'b-activy.png'} title='Climbing' />
                <CardActivity image={'c-activy.png'} title='Skiing' />
                <CardActivity image={'d-activy.png'} title='Hiking' />
            </SimpleGrid>
        </Box>
    )
}

export default Activity
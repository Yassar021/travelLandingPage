import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"

const About = () => {
    return(
        <Box pt='120px' pb='120'>
            <Flex direction={{base:'column',md:'column',lg:'row',xl:'row','2xl':'row'}} justifyContent='center' textAlign={{base:'center',md:'center',lg:'justify',xl:'left','2xl':'left'}} alignItems={{base:'center',md:'center',lg:'justify',xl:'left','2xl':'left'}}>
                <Box my='auto' mr='32px'>
                    <Text fontSize='32px' fontWeight='600' color='#161414'>About Us</Text>
                    <Text fontSize='16px' fontWeight='400' color='#5B5B5B' my='32px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
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
                            Read More
                        </Button>
                </Box>
                <Image src='/about.png' maxW='556px' maxH='488px' alt='' />
            </Flex>
        </Box>
    )
}

export default About
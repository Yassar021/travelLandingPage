import { useDisclosure, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Input, Stack, Text, Show, Hide, Flex } from "@chakra-ui/react"
import React from "react";

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button rightIcon={<svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0027 12.7014H10.0027" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.0027 5.70142H7.00269" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.0027 19.7014H7.00269" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        } ref={btnRef} fontFamily='Poppins' bgColor='#0E1035' color='#fff' w='auto' h='48px' onClick={onOpen}>
          
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
                    <Stack direction='column' spacing='24px'>
                        <Text fontFamily='Poppins' fontSize='14px' fontWeight='600' color='#161414'>Home</Text>
                        <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#161414'>Hotels</Text>   
                        <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#161414'>Restaurants</Text>
                        <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#161414'>Tours</Text>
                        <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#161414'>Destinations</Text>   
                        <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#161414'>Activities</Text>
                        <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#161414'>Contact</Text>
                    </Stack>
                    <Stack direction='row' mt='60px'>
                        <Image w='48px' h='48px' src='/a-hero.png' alt='' />
                        <Box>
                            <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#161414'>Holla,</Text>
                            <Text fontFamily='Poppins' fontSize='14px' fontWeight='600' color='#161414'>Ales Nesetril</Text>     
                        </Box>
                    </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button colorScheme='blue'>Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

const Hero = () => {
    return(
        <Box pt='64px' px={{base:'10px',md:'16px',lg:'60px',xl:'120px','2xl':'120px'}} pb='820px' bgImage='/bg-hero.png' borderRadius='0px 0px 54px 54px' backgroundRepeat='no-repeat' bgPosition='center' backgroundSize='cover'>
            <Box>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Image src='/logo.png' w='88ox' h='36px' alt="logo" />
                    <Flex display={{base:'inline', md:'inline', lg:'none', xl:'none', '2xl': 'none'}}>
                        <DrawerExample />
                    </Flex>
                    
                    <Hide below='lg'>
                        <Stack direction='row' spacing='42px'>
                            <Text fontFamily='Poppins' fontSize='14px' fontWeight='600' color='#fff'>Home</Text>
                            <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#E5E5E5'>Hotels</Text>   
                            <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#E5E5E5'>Restaurants</Text>
                            <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#E5E5E5'>Tours</Text>
                            <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#E5E5E5'>Destinations</Text>   
                            <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#E5E5E5'>Activities</Text>
                            <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#E5E5E5'>Contact</Text>
                        </Stack>
                        <Stack direction='row'>
                            <Box textAlign='right'>
                                <Text fontFamily='Poppins' fontSize='14px' fontWeight='400' color='#E5E5E5'>Holla,</Text>
                                <Text fontFamily='Poppins' fontSize='14px' fontWeight='600' color='#fff'>Ales Nesetril</Text>     
                            </Box>
                            <Image w='48px' h='48px' src='/a-hero.png' alt='' />
                        </Stack>
                    </Hide>
                </Stack>
            </Box>
            <Box  position='absolute' mt='150px' ml={{xl:'210px','2xl':'350px'}}>
                <Stack d='column' alignItems='center'>
                    <Text fontSize='48px' fontWeight='600' color='#fff'>Discover the most engaging places</Text>
                    <Button 
                            leftIcon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM9.71 19.667C8.72341 17.5743 8.15187 15.3102 8.027 13H4.062C4.25659 14.5389 4.89392 15.9882 5.89657 17.1717C6.89922 18.3552 8.22401 19.2221 9.71 19.667ZM10.03 13C10.181 15.439 10.878 17.73 12 19.752C13.1523 17.6766 13.8254 15.3695 13.97 13H10.03ZM19.938 13H15.973C15.8481 15.3102 15.2766 17.5743 14.29 19.667C15.776 19.2221 17.1008 18.3552 18.1034 17.1717C19.1061 15.9882 19.7434 14.5389 19.938 13ZM4.062 11H8.027C8.15187 8.68979 8.72341 6.42569 9.71 4.333C8.22401 4.77788 6.89922 5.64475 5.89657 6.8283C4.89392 8.01184 4.25659 9.4611 4.062 11ZM10.031 11H13.969C13.8248 8.6306 13.152 6.32353 12 4.248C10.8477 6.32345 10.1746 8.63052 10.03 11H10.031ZM14.29 4.333C15.2766 6.42569 15.8481 8.68979 15.973 11H19.938C19.7434 9.4611 19.1061 8.01184 18.1034 6.8283C17.1008 5.64475 15.776 4.77788 14.29 4.333Z" fill="white"/>
                                </svg>
                            }   
                            mt='32px'
                            size='lg'
                            height='72px'
                            width={{base:'273px',md:'273px',lg:'343px',xl:'343px','2xl':'343px'}}
                            border='1px'
                            borderColor='#7B61FF'
                            fontFamily='Poppins'
                            fontSize='22px'
                            color='#fff'
                            bgColor='#7B61FF'
                            borderRadius='31px'
                            _hover={{ bg: '#7B61FF' }}
                            _active={{
                            bg: '#7B61FF',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                            }}
                            >
                            Discover on 3D Globe
                    </Button>
                </Stack>
            </Box>
            <Box ml={{lg:'40px',xl:'100px','2xl':'250px'}} mt='610px' position='absolute'>
                <Flex d='row'  bgColor='#fff' justifyContent='space-between' borderRadius='12px'>
                        <Box p={{lg:'12px',xl:'24px','2xl':'24px'}}>
                            <Flex d='row' alignItems='center'>
                                <Stack>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 20.9L16.95 15.95C17.9289 14.971 18.5955 13.7237 18.8656 12.3659C19.1356 11.008 18.9969 9.60058 18.4671 8.32154C17.9373 7.0425 17.04 5.94929 15.8889 5.18015C14.7378 4.41101 13.3844 4.00049 12 4.00049C10.6156 4.00049 9.26222 4.41101 8.11109 5.18015C6.95996 5.94929 6.06275 7.0425 5.53292 8.32154C5.00308 9.60058 4.86442 11.008 5.13445 12.3659C5.40449 13.7237 6.07111 14.971 7.05 15.95L12 20.9ZM12 23.728L5.636 17.364C4.37734 16.1053 3.52019 14.5017 3.17293 12.7558C2.82567 11.01 3.00391 9.20041 3.6851 7.55588C4.36629 5.91136 5.51984 4.50575 6.99988 3.51683C8.47992 2.5279 10.22 2.00006 12 2.00006C13.78 2.00006 15.5201 2.5279 17.0001 3.51683C18.4802 4.50575 19.6337 5.91136 20.3149 7.55588C20.9961 9.20041 21.1743 11.01 20.8271 12.7558C20.4798 14.5017 19.6227 16.1053 18.364 17.364L12 23.728ZM12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96084 13.4142 9.58577C13.0391 9.2107 12.5304 8.99998 12 8.99998C11.4696 8.99998 10.9609 9.2107 10.5858 9.58577C10.2107 9.96084 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13ZM12 15C10.9391 15 9.92172 14.5786 9.17158 13.8284C8.42143 13.0783 8 12.0608 8 11C8 9.93912 8.42143 8.9217 9.17158 8.17156C9.92172 7.42141 10.9391 6.99998 12 6.99998C13.0609 6.99998 14.0783 7.42141 14.8284 8.17156C15.5786 8.9217 16 9.93912 16 11C16 12.0608 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15Z" fill="#FFA800"/>
                                    </svg>
                                </Stack>
                                <Box ml='10px'>
                                    <Text color='#5B5B5B' fontSize='14px' fontWeight='300'>Location</Text>
                                    <Text color='#161414' fontSize={{lg:'14px',xl:'16px','2xl':'16px'}} fontWeight='500'>Explore nearby destinations</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box ml='40px' p={{lg:'12px',xl:'24px','2xl':'24px'}}>
                            <Flex d='row' alignItems='center'>
                                <Stack>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 21C4.90905 21 4.32389 20.8836 3.77792 20.6575C3.23196 20.4313 2.73588 20.0998 2.31802 19.682C1.90016 19.2641 1.56869 18.768 1.34254 18.2221C1.1164 17.6761 1 17.0909 1 16.5C1 15.9091 1.1164 15.3239 1.34254 14.7779C1.56869 14.232 1.90016 13.7359 2.31802 13.318C2.73588 12.9002 3.23196 12.5687 3.77792 12.3425C4.32389 12.1164 4.90905 12 5.5 12C6.69347 12 7.83807 12.4741 8.68198 13.318C9.52589 14.1619 10 15.3065 10 16.5C10 17.6935 9.52589 18.8381 8.68198 19.682C7.83807 20.5259 6.69347 21 5.5 21ZM5.5 19C6.16304 19 6.79893 18.7366 7.26777 18.2678C7.73661 17.7989 8 17.163 8 16.5C8 15.837 7.73661 15.2011 7.26777 14.7322C6.79893 14.2634 6.16304 14 5.5 14C4.83696 14 4.20107 14.2634 3.73223 14.7322C3.26339 15.2011 3 15.837 3 16.5C3 17.163 3.26339 17.7989 3.73223 18.2678C4.20107 18.7366 4.83696 19 5.5 19ZM18.5 21C17.9091 21 17.3239 20.8836 16.7779 20.6575C16.232 20.4313 15.7359 20.0998 15.318 19.682C14.9002 19.2641 14.5687 18.768 14.3425 18.2221C14.1164 17.6761 14 17.0909 14 16.5C14 15.9091 14.1164 15.3239 14.3425 14.7779C14.5687 14.232 14.9002 13.7359 15.318 13.318C15.7359 12.9002 16.232 12.5687 16.7779 12.3425C17.3239 12.1164 17.9091 12 18.5 12C19.6935 12 20.8381 12.4741 21.682 13.318C22.5259 14.1619 23 15.3065 23 16.5C23 17.6935 22.5259 18.8381 21.682 19.682C20.8381 20.5259 19.6935 21 18.5 21ZM18.5 19C19.163 19 19.7989 18.7366 20.2678 18.2678C20.7366 17.7989 21 17.163 21 16.5C21 15.837 20.7366 15.2011 20.2678 14.7322C19.7989 14.2634 19.163 14 18.5 14C17.837 14 17.2011 14.2634 16.7322 14.7322C16.2634 15.2011 16 15.837 16 16.5C16 17.163 16.2634 17.7989 16.7322 18.2678C17.2011 18.7366 17.837 19 18.5 19ZM11.023 10.305L13 12V18H11V13L8.281 10.734C8.03904 10.5677 7.83666 10.3502 7.68822 10.0969C7.53977 9.84363 7.44892 9.56076 7.4221 9.26841C7.39528 8.97605 7.43315 8.68137 7.53303 8.4053C7.6329 8.12923 7.79233 7.87853 8 7.671L10.828 4.843C11.0137 4.6572 11.2342 4.50981 11.4769 4.40925C11.7197 4.30869 11.9798 4.25693 12.2425 4.25693C12.5052 4.25693 12.7653 4.30869 13.0081 4.40925C13.2508 4.50981 13.4713 4.6572 13.657 4.843L15.071 6.257C16.13 7.31982 17.5038 8.01248 18.988 8.232L18.978 10.247C16.9642 10.0152 15.0884 9.10742 13.657 7.672L11.023 10.305ZM16 5C15.4696 5 14.9609 4.78929 14.5858 4.41421C14.2107 4.03914 14 3.53043 14 3C14 2.46957 14.2107 1.96086 14.5858 1.58579C14.9609 1.21071 15.4696 1 16 1C16.5304 1 17.0391 1.21071 17.4142 1.58579C17.7893 1.96086 18 2.46957 18 3C18 3.53043 17.7893 4.03914 17.4142 4.41421C17.0391 4.78929 16.5304 5 16 5Z" fill="#FFA800"/>
                                    </svg>
                                </Stack>
                                <Box ml='10px'>
                                    <Text color='#5B5B5B' fontSize='14px' fontWeight='300'>Activities</Text>
                                    <Text color='#161414' fontSize='16px' fontWeight='500'>All Activities</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box p={{lg:'12px',xl:'24px','2xl':'24px'}}>
                            <Flex d='row' alignItems='center'>
                                <Stack>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.6667 3H21.6667C21.9319 3 22.1863 3.10536 22.3738 3.29289C22.5613 3.48043 22.6667 3.73478 22.6667 4V20C22.6667 20.2652 22.5613 20.5196 22.3738 20.7071C22.1863 20.8946 21.9319 21 21.6667 21H3.66669C3.40147 21 3.14712 20.8946 2.95958 20.7071C2.77204 20.5196 2.66669 20.2652 2.66669 20V4C2.66669 3.73478 2.77204 3.48043 2.95958 3.29289C3.14712 3.10536 3.40147 3 3.66669 3H7.66669V1H9.66669V3H15.6667V1H17.6667V3ZM4.66669 9V19H20.6667V9H4.66669ZM6.66669 13H11.6667V17H6.66669V13Z" fill="#FFA800"/>
                                    </svg>
                                </Stack>
                                <Box ml='10px'>
                                    <Text color='#5B5B5B' fontSize='14px' fontWeight='300'>When</Text>
                                    <Text color='#161414' fontSize='16px' fontWeight='500'>Choose a Date</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box mx='40px' p={{lg:'12px',xl:'24px','2xl':'24px'}}>
                            <Flex d='row' alignItems='center'>
                                <Stack>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.33337 22C2.33337 19.8783 3.17623 17.8434 4.67652 16.3431C6.17681 14.8429 8.21164 14 10.3334 14C12.4551 14 14.4899 14.8429 15.9902 16.3431C17.4905 17.8434 18.3334 19.8783 18.3334 22H16.3334C16.3334 20.4087 15.7012 18.8826 14.576 17.7574C13.4508 16.6321 11.9247 16 10.3334 16C8.74207 16 7.21595 16.6321 6.09073 17.7574C4.96552 18.8826 4.33337 20.4087 4.33337 22H2.33337ZM10.3334 13C7.01837 13 4.33337 10.315 4.33337 7C4.33337 3.685 7.01837 1 10.3334 1C13.6484 1 16.3334 3.685 16.3334 7C16.3334 10.315 13.6484 13 10.3334 13ZM10.3334 11C12.5434 11 14.3334 9.21 14.3334 7C14.3334 4.79 12.5434 3 10.3334 3C8.12337 3 6.33337 4.79 6.33337 7C6.33337 9.21 8.12337 11 10.3334 11ZM18.6174 14.703C20.0227 15.3359 21.2154 16.3612 22.052 17.6557C22.8886 18.9502 23.3335 20.4587 23.3334 22H21.3334C21.3336 20.844 20.9999 19.7125 20.3725 18.7416C19.745 17.7707 18.8505 17.0017 17.7964 16.527L18.6164 14.703H18.6174ZM17.9294 3.413C18.9369 3.8283 19.7983 4.53354 20.4044 5.43923C21.0104 6.34492 21.3338 7.41024 21.3334 8.5C21.3338 9.87233 20.8211 11.1952 19.8959 12.2088C18.9708 13.2224 17.7 13.8535 16.3334 13.978V11.965C17.0743 11.8589 17.7617 11.518 18.2947 10.9925C18.8276 10.4669 19.1781 9.78432 19.2945 9.04493C19.411 8.30555 19.2874 7.5483 18.9418 6.88435C18.5962 6.22041 18.0468 5.68475 17.3744 5.356L17.9294 3.413Z" fill="#FFA800"/>
                                    </svg>
                                </Stack>
                                <Box ml='10px'>
                                    <Text color='#5B5B5B' fontSize='14px' fontWeight='300'>Guest</Text>
                                    <Text color='#161414' fontSize='16px' fontWeight='500'>1 Guest</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box p={{lg:'12px',xl:'24px','2xl':'24px'}}>
                                <Button 
                                    size='lg'
                                    height='60px'
                                    width={{base:'60px',md:'60px',lg:'60px',xl:'60px','2xl':'60px'}}
                                    border='1px'
                                    borderColor='#7B61FF'
                                    color='#fff'
                                    bgColor='#7B61FF'
                                    _hover={{ bg: '#7B61FF' }}
                                    _active={{
                                    bg: '#7B61FF',
                                    transform: 'scale(0.98)',
                                    borderColor: '#bec3c9',
                                    }}
                                    >
                                        <Stack>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="white"/>
                                        </svg>
                                        </Stack>
                            </Button>
                        </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Hero


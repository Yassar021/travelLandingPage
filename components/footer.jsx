import { Box, Button, Container, Flex, HStack, Image, Input, Link, Stack, Text } from "@chakra-ui/react"

const Footer = () => {
    return(
        <Box bgColor='#F9F9F9' py='120px' px={{lg:'120px',xl:'200px','2xl':'360px'}}>
        
                <Stack direction='row' spacing='32px'>
                    <Box>
                        <Image src="/logo2.png" h='35.42px' alt='' />
                        <Text mt='16px' mb='32px'fontSize='13px' color='#5B5B5B' >We always make our customers happy by providing<br /> as many choises as possible</Text>
                        <HStack spacing='34px'>
                            <Link>
                                <Stack>
                                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 0.0825195C6.63599 0.0825195 0.666656 6.05185 0.666656 13.4159C0.666656 20.0705 5.54266 25.5865 11.9173 26.5879V17.2692H8.53066V13.4159H11.9173V10.4785C11.9173 7.13719 13.9067 5.29185 16.9533 5.29185C18.412 5.29185 19.9373 5.55185 19.9373 5.55185V8.83185H18.2573C16.6 8.83185 16.084 9.85985 16.084 10.9145V13.4159H19.7813L19.1907 17.2692H16.084V26.5879C22.4573 25.5879 27.3333 20.0692 27.3333 13.4159C27.3333 6.05185 21.364 0.0825195 14 0.0825195Z" fill="#5243C2"/>
                                    </svg>
                                </Stack>
                            </Link>
                            <Link>
                                <Stack>
                                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.5493 7.95725C28.5314 8.40751 27.452 8.70322 26.3467 8.83458C27.5117 8.13783 28.3836 7.04127 28.8 5.74925C27.7067 6.39992 26.508 6.85592 25.2587 7.10258C24.4195 6.20469 23.3072 5.6092 22.0946 5.4087C20.8821 5.20819 19.6373 5.41391 18.5537 5.99386C17.4701 6.5738 16.6085 7.4955 16.1028 8.61564C15.5971 9.73579 15.4757 10.9916 15.7573 12.1879C13.5402 12.0768 11.3711 11.5006 9.39106 10.4968C7.411 9.49299 5.66418 8.08398 4.26401 6.36125C3.7684 7.21252 3.50795 8.18022 3.50934 9.16525C3.50934 11.0986 4.49334 12.8066 5.98934 13.8066C5.10402 13.7787 4.23819 13.5396 3.46401 13.1093V13.1786C3.46428 14.4662 3.90983 15.7141 4.72514 16.7107C5.54044 17.7073 6.67532 18.3912 7.93734 18.6466C7.1155 18.8693 6.25375 18.9021 5.41734 18.7426C5.77317 19.8509 6.46668 20.8202 7.4008 21.5147C8.33491 22.2093 9.46285 22.5943 10.6267 22.6159C9.46998 23.5244 8.14558 24.1959 6.72918 24.5921C5.31279 24.9884 3.83218 25.1016 2.37201 24.9253C4.92094 26.5645 7.88814 27.4347 10.9187 27.4319C21.176 27.4319 26.7853 18.9346 26.7853 11.5653C26.7853 11.3253 26.7787 11.0826 26.768 10.8453C27.8598 10.0561 28.8021 9.07861 29.5507 7.95858L29.5493 7.95725Z" fill="#5243C2"/>
                                    </svg>
                                </Stack>
                            </Link>
                            <Link>
                                <Stack>
                                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 3.08252C19.6227 3.08252 20.0747 3.09585 21.496 3.16252C22.916 3.22919 23.8827 3.45185 24.7333 3.78252C25.6133 4.12119 26.3547 4.57985 27.096 5.31985C27.774 5.98638 28.2986 6.79264 28.6333 7.68252C28.9627 8.53185 29.1867 9.49985 29.2533 10.9199C29.316 12.3412 29.3333 12.7932 29.3333 16.4159C29.3333 20.0385 29.32 20.4905 29.2533 21.9119C29.1867 23.3319 28.9627 24.2985 28.6333 25.1492C28.2996 26.0396 27.7748 26.846 27.096 27.5119C26.4293 28.1896 25.6231 28.7142 24.7333 29.0492C23.884 29.3785 22.916 29.6025 21.496 29.6692C20.0747 29.7319 19.6227 29.7492 16 29.7492C12.3773 29.7492 11.9253 29.7359 10.504 29.6692C9.08399 29.6025 8.11732 29.3785 7.26666 29.0492C6.37642 28.7152 5.57003 28.1904 4.90399 27.5119C4.22587 26.8454 3.70123 26.0391 3.36666 25.1492C3.03599 24.2999 2.81332 23.3319 2.74666 21.9119C2.68399 20.4905 2.66666 20.0385 2.66666 16.4159C2.66666 12.7932 2.67999 12.3412 2.74666 10.9199C2.81332 9.49852 3.03599 8.53319 3.36666 7.68252C3.7003 6.79209 4.22506 5.98561 4.90399 5.31985C5.57022 4.64149 6.37656 4.11683 7.26666 3.78252C8.11732 3.45185 9.08266 3.22919 10.504 3.16252C11.9253 3.09985 12.3773 3.08252 16 3.08252ZM16 9.74919C14.2319 9.74919 12.5362 10.4516 11.2859 11.7018C10.0357 12.9521 9.33332 14.6477 9.33332 16.4159C9.33332 18.184 10.0357 19.8797 11.2859 21.1299C12.5362 22.3801 14.2319 23.0825 16 23.0825C17.7681 23.0825 19.4638 22.3801 20.714 21.1299C21.9643 19.8797 22.6667 18.184 22.6667 16.4159C22.6667 14.6477 21.9643 12.9521 20.714 11.7018C19.4638 10.4516 17.7681 9.74919 16 9.74919ZM24.6667 9.41585C24.6667 8.97383 24.4911 8.5499 24.1785 8.23734C23.8659 7.92478 23.442 7.74919 23 7.74919C22.558 7.74919 22.134 7.92478 21.8215 8.23734C21.5089 8.5499 21.3333 8.97383 21.3333 9.41585C21.3333 9.85788 21.5089 10.2818 21.8215 10.5944C22.134 10.9069 22.558 11.0825 23 11.0825C23.442 11.0825 23.8659 10.9069 24.1785 10.5944C24.4911 10.2818 24.6667 9.85788 24.6667 9.41585ZM16 12.4159C17.0609 12.4159 18.0783 12.8373 18.8284 13.5874C19.5786 14.3376 20 15.355 20 16.4159C20 17.4767 19.5786 18.4941 18.8284 19.2443C18.0783 19.9944 17.0609 20.4159 16 20.4159C14.9391 20.4159 13.9217 19.9944 13.1716 19.2443C12.4214 18.4941 12 17.4767 12 16.4159C12 15.355 12.4214 14.3376 13.1716 13.5874C13.9217 12.8373 14.9391 12.4159 16 12.4159Z" fill="#5243C2"/>
                                    </svg>
                                </Stack>
                            </Link>
                        </HStack>
                    </Box>
                    <Box>
                        <Text fontSize='18px' fontWeight='600' color='#161414' >About</Text>
                        <Text mt='20px' fontSize='13px' fontWeight='400' color='#5B5B5B' >About Us</Text>
                        <Text my='12px' fontSize='13px' fontWeight='400' color='#5B5B5B' >Features</Text>
                        <Text fontSize='13px' fontWeight='400' color='#5B5B5B' >News</Text>
                        <Text mt='12px' fontSize='13px' fontWeight='400' color='#5B5B5B' >Menu</Text>
                    </Box>
                    <Box>
                        <Text fontSize='18px' fontWeight='600' color='#161414' >About</Text>
                        <Text mt='20px' fontSize='13px' fontWeight='400' color='#5B5B5B' >About Us</Text>
                        <Text my='12px' fontSize='13px' fontWeight='400' color='#5B5B5B' >Features</Text>
                        <Text fontSize='13px' fontWeight='400' color='#5B5B5B' >News</Text>
                        <Text mt='12px' fontSize='13px' fontWeight='400' color='#5B5B5B' >Menu</Text>
                    </Box>
                    <Box>
                        <Text fontSize='18px' fontWeight='600' color='#161414' >About</Text>
                        <Text mt='20px' fontSize='13px' fontWeight='400' color='#5B5B5B' >About Us</Text>
                        <Text my='12px' fontSize='13px' fontWeight='400' color='#5B5B5B' >Features</Text>
                        <Text fontSize='13px' fontWeight='400' color='#5B5B5B' >News</Text>
                        <Text mt='12px' fontSize='13px' fontWeight='400' color='#5B5B5B' >Menu</Text>
                    </Box>

                    <Box>
                        <Text fontSize='18px' fontWeight='600' color='#161414'>
                            Subscribe on our destination review <br />newsletters
                        </Text>

                        <HStack  mt='20px' spacing='16px'>
                            <Box p='16px' w='300px' h='82px' bgColor='#fff' borderRadius='12px' shadow='lg' >
                                <Flex direction='row'>
                                    <Stack justifyContent='center' mr='16px'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM20 7.238L12.072 14.338L4 7.216V19H20V7.238ZM4.511 5L12.061 11.662L19.502 5H4.511Z" fill="#FFA800"/>
                                        </svg>
                                    </Stack>
                                    <Box>
                                        <Text ml='12px' fontSize='14px' fontWeight='300'>Your Email</Text>
                                        <Input border='none' borderRadius='none' textDecoration='none' w='220px' placeholder="johndoe@gmail.com" h='28px' id='email' type='email' />
                                    </Box>
                                </Flex>
                            </Box>
                            <Box shadow='lg'>
                                <Button
                                    size='md'
                                    height='82px'
                                    width={{base:'80px',md:'80px',lg:'80px',xl:'80px','2xl':'80px'}}
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
                                        <Stack><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="white"/>
                                        </svg></Stack>
                                    </Button>
                            </Box>
                        </HStack>
                    </Box>
                </Stack>
            
        </Box>
    )
}

export default Footer
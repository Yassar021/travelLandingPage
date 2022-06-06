import { Box, Image, Text } from "@chakra-ui/react"

const CardDestination = ({image, title, desc}) => {
    return(
        <Box>
            <Image src={image} w='203px' h='181px' borderRadius='12px' alt='' />
            <Text mt='8px' fontSize='16px' fontWeight='500' color='#161414'>{title}</Text>
            <Text fontSize='16px' fontWeight='500' color='#979797'>{desc}</Text>
        </Box>
    )
}

export default CardDestination
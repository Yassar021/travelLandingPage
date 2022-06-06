import { Box, Image, Text } from "@chakra-ui/react"

const CardActivity = ({image, title}) => {
    return(
        <Box>
            <Image src={image} w='320px' h='380px'  alt='' />
            <Text mt='16px' fontSize='16px' fontWeight='500' color='#161414'>{title}</Text>
        </Box>
    )
}

export default CardActivity
import { Component } from 'react'
import { Text, Center, Image, Spacer, Box, Divider, Stack } from '@chakra-ui/react'

class Footer extends Component {
    render() {
        return (
            <Center p={5}>
                <Divider />
                <Box w='10%'>
                    <Center>
                        <Text>From EthPorto with    </Text>
                        <Spacer />
                        <Image boxSize='15px' src='/red-heart-icon.svg' />
                    </Center>
                </Box>
            </Center>
        )
    }
}

export default Footer;
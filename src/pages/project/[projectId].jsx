import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import { Center, VStack, Text, Heading } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react';

const ProjectDetails = () => {

    const address = useAddress();
    const router = useRouter()

    return (
        <Layout>
            <Center>
                <VStack>
                    <Center>
                        <Heading>Coming Soon...</Heading>
                        <Text>Dev too tired zzz...</Text>
                    </Center>
                </VStack>
            </Center>
        </Layout >
    )
}

export default ProjectDetails;
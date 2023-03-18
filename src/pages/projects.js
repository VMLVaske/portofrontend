import React, { Component } from 'react'
import Layout from '@/components/layout'
import { Row, Spacer, Col, Grid } from '@nextui-org/react';
import {
    SimpleGrid, Stack, Card, CardHeader, CardBody, CardFooter,
    Heading, Button, ButtonGroup, Text, Divider, Image,
    Center, Box, Container
} from '@chakra-ui/react';
import { useRouter } from 'next/router'
import FundingModal from '@/components/modals/fundingModal'

export default function Projects() {

    const router = useRouter();

    return (
        <Layout>
            <Center>
                <Box w='90%'>
                    <Center>
                        <Container >
                            <Row justify="center">
                                <Heading>Projects</Heading>
                            </Row>
                            <Divider />
                            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                                <Card maxW='sm' variant='outline'>
                                    <CardBody>
                                        <Image
                                            src='/pothole.png'
                                            alt='pothole'
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>Fix Pothole on Sesame Street</Heading>
                                            <Text>
                                                This projects needs funding to repair a pothole on Sesame Street.
                                                Several residents have vanished in the direct vicinity of the pothole.
                                                We should do something about it.
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                $10.500,-
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Spacer />
                                    <Divider />
                                    <Spacer />
                                    <CardFooter>
                                        <ButtonGroup spacing='2'>
                                            <FundingModal />
                                            <Button
                                                variant='ghost'
                                                colorScheme='blue'
                                                onClick={() =>
                                                    router.push(`/project/1`)
                                                }>
                                                More Details
                                            </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                                <Divider />
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src='/cato.png'
                                            alt='Cats everywhere'
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>Fund local Shelter</Heading>
                                            <Text>
                                                The kitty invasion has hit the local shelter and we have a true feline crisis on our paws.
                                                <br />
                                                Help fund this project, so that any cat can be herded toward their final wizard destination.
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                $2.500,-
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Spacer />
                                    <Divider />
                                    <Spacer />
                                    <CardFooter>
                                        <ButtonGroup spacing='2'>
                                            <FundingModal />
                                            <Button
                                                variant='ghost'
                                                colorScheme='blue'
                                                onClick={() =>
                                                    router.push(`/project/2`)
                                                }>
                                                More Details
                                            </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>

                            </SimpleGrid>

                        </Container>
                    </Center>
                </Box>
            </Center>

        </Layout>
    )
}

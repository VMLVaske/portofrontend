import React, { Component } from 'react'
//import { Center, AbsoluteCenter, Flex, Box, Spacer, Image, VStack, Grid, GridItem, Container } from '@chakra-ui/react'

import Head from 'next/head'
import Layout from '@/components/layout'
import { Container, Row, Spacer, Divider, Col, Grid } from '@nextui-org/react';
import { Heading, Text, Box, AspectRatio, SimpleGrid, Image, Center } from '@chakra-ui/react'

import { NextPage } from 'next';

class Home extends Component {

  render() {

    //const { height, width } = useWindowDimensions();

    return (
      <Layout>
        <div>
          <Head>
            <title>Test Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Container fluid md gap={3}>

              <Spacer />

              <Row justify="center">
                <Heading>
                  Home
                </Heading>
              </Row>

              <Spacer />
              <Divider />
              <Spacer />

              <SimpleGrid columns={2}>
                <Box>
                  <video className='VideoTag' autoPlay loop muted>
                    <source src={"/ssqyCz.mp4"} type='video/mp4' />
                  </video>
                </Box>
                <Box justify="center">

                  <Heading>Idea</Heading>
                  <Text>
                    There is no person in the history of mankind <br/> who actually likes to do their taxes.
                  </Text>
                  <Spacer />
                  <Text as='b'>So why not change that :) </Text>
                </Box>
              </SimpleGrid>

              <Spacer />
              <Divider />
              <Spacer />

              <Box>
                <Heading>How?</Heading>
              </Box>

              <SimpleGrid columns={2}>
                <Box w="600px" h="100%" justify="center" p={4}>
                  <Image src='/picture1.png' alt='Picture 1' />
                </Box>
                <Box w="600px" h="100%" justify="center" p={4}>
                  <Image src='/picture2.png' alt='Picture 2' />
                </Box>
              </SimpleGrid>

              <Divider />

              <Box w="1000px" h="100%" justify="center" p={4}>
                <Image src='/picture3.png' alt='Picture 3' />
              </Box>

              <Divider />

              <Center>
                <Box w="600px" h="100%" justify="center" p={4}>
                  <Image src='/picture4.png' alt='Picture 4' />
                </Box>
                <Heading>SO: </Heading>
                <Box w="600px" h="100%" justify="center" p={4}>
                  <Image src='/picture5.png' alt='Picture 5' />
                </Box>
              </Center>

              <Divider />

              <Box>
                <Heading>So that you're in control of how your money is spent. </Heading>
                <Box w="1000px" h="100%" justify="center" p={4}>
                  <Image src='/picture6.png' alt='Picture 6' />
                </Box>
              </Box>



              <Spacer />
              <Divider />
              <Spacer />

            </Container>
          </main>
        </div>
      </Layout>
    )
  }
}

export default Home;
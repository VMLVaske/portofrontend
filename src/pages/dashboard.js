import React, { Component } from 'react'
import { Center, Box, Heading, Card, CardBody } from '@chakra-ui/react'
import Layout from '@/components/layout'
import {Spacer } from '@nextui-org/react';

class Dashboard extends Component {

    render() {

        return (
            <Layout>
                <Center>
                    <Box>
                        <Center>
                            <Card>
                                <CardBody>
                                    <Heading>Coming soon...</Heading>
                                </CardBody>
                            </Card>
                        </Center>
                    </Box>
                </Center>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
            </Layout>
        )
    }
}

export default Dashboard;
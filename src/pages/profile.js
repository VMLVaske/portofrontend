import { Heading, Text, VStack, Box, Button, Flex } from '@chakra-ui/react'
import Layout from '@/components/layout'
import { Row, Spacer,  } from '@nextui-org/react';
import { AvatarImage } from '@taikai/rocket-kit'
import { useAddress, useBalance } from "@thirdweb-dev/react";
import getEtherscan from '@/hooks/getEtherscan';
import { useState } from 'react';
import { useRouter } from "next/router";

export default function Profile() {

    const [etherscan, setEtherscan] = useState(null);

    const address = useAddress();
    const { balanceData, balanceDataIsLoading } = useBalance();

    const { data, isLoading, error } = getEtherscan(address, setEtherscan);
    const router = useRouter();

    return (
        <Layout>
            <VStack>
                <Box>
                    <Row>
                        <Heading>Profile</Heading>
                    </Row>
                    <Row>
                        <AvatarImage
                            alt="default avatar"
                            boringType="pixel"
                            size={100}
                            url="https://bit.ly/dan-abramov"
                        />
                    </Row>
                </Box>
                <Box>
                    <Box>
                        <Heading>Address</Heading>
                        <Text>
                            {address ? address : "No Account"}
                        </Text>
                    </Box>
                    <Box>
                        <Heading>Balance</Heading>
                        <Text>
                            {address ? "0.7583 ETH" : "No Account"}
                        </Text>
                    </Box>
                    <Box>
                        <Heading>Gas Spent</Heading>
                        <Flex>
                            <Text>
                                {address ? "0.034 ETH" : "No Account"}
                            </Text>
                            <Spacer />
                            <Button
                                isActive={address}
                                onClick={() => router.push("/projects")}
                            >Pay Gas as Taxes</Button>
                        </Flex>
                    </Box>
                </Box>
            </VStack>
        </Layout>
    )
}
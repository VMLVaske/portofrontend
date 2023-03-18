import { ThemeChanger } from "../navbar/themeChanger";
import {
    //Button,
    Grid,
    Spacer,
    //Text,
    Container,
    Row,
} from "@nextui-org/react";
import { Image, Button, Text, } from '@chakra-ui/react'

import { useState } from "react";
import { useRouter } from "next/router";
import {
    useAddress,
    useDisconnect,
    useMetamask,
    useNetworkMismatch,
    useNetwork,
} from "@thirdweb-dev/react";

import useAuthenticate from "../../hooks/useAuthenticate";


export default function Navbar() {
    const router = useRouter();

    const address = useAddress();
    const disconnect = useDisconnect();
    const connectWithMetamask = useMetamask();
    const { login, authenticate, logout } = useAuthenticate();
    const isMitsmatched = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authMessage, setAuthMessage] = useState("N/A");

    return (
        <Grid.Container gap={2} justify="center" alignItems="center">
            <Spacer />
            <Grid>
                <Image
                    src='/logo_orig.png'
                    alt="logo"
                    w="200px"
                />

            </Grid>
            <Grid>
                <Button
                    variant='solid'
                    onClick={() => router.push("/")}>Home</Button>
            </Grid>
            <Grid>
                <Button
                    variant='solid'
                    onClick={() => router.push("/dashboard")}>
                    <Text>Dashboard</Text>
                </Button>
            </Grid>
            <Grid>
                <Button
                    variant='solid'
                    onClick={() => router.push("/projects")}>
                        <Text>Projects</Text>
                        </Button>
            </Grid>
            <Grid>
                <Button
                    variant='solid'
                    onClick={() => router.push("/profile")}>
                        <Text>Profile</Text>
                        </Button>
            </Grid>
            <Grid>
                <ThemeChanger />
            </Grid>
            <Grid>
                {address ? (
                    <Container>
                        <Row>
                            <Button
                                variant='solid'
                                onClick={disconnect}>
                                Disconnect Wallet
                            </Button>
                        </Row>
                    </Container>
                ) : (
                    <Button
                        variant='solid'
                        onClick={connectWithMetamask}>
                        Connect Wallet
                    </Button>
                )}
            </Grid>

        </Grid.Container>
    );
}
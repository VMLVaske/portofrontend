import React, { Component } from 'react';
import { Button } from '@chakra-ui/react'
import { Web3Connection } from '@taikai/dappkit';
import { ethers } from 'ethers';
import { AvatarImage } from '@taikai/rocket-kit'

class Web3Profile extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            connected: false,
        }

    }

    async connectUser() {

        const url = "http://localhost:8545";
        const provider = new ethers.providers.JsonRpcProvider(url);

        const web3Connection = new Web3Connection({
            web3Host: process.env.GOERLI_NODE_URL,
            web3CustomProvider: provider,
            //privateKey: process.env.WALLET_PRIVATE_KEY,
        })

        await web3Connection.start();
        //await web3Connection.connect(); // if a privateKey was provided, can be ignored

        this.setState({ connected: true });

    }

    async disconnectUser() {
        this.setState({ connected: false });
    }

    handleClick() {
        this.state.connected ? this.disconnectUser() : this.connectUser();
    }

    render() {
        return (
            <div>
                <AvatarImage
                    alt="default avatar"
                    boringType="pixel"
                    size={100}
                    url="/logo.png"
                />
                <Button
                    onClick={this.handleClick}>
                    {this.state.connected ? "Disconnect" : "Connect"}
                </Button>
            </div>
        )
    }
};

export default Web3Profile;

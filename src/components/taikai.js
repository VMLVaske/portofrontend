import { Web3Connection, ERC20 } from '@taikai/dappkit';
import { Button } from "@chakra-ui/react"
import {useAddress} from "@thirdweb-dev/react";

export default async function taikaiWeb3() {

    const address = useAddress();

    const startConnection = async () => {
        const connection = new Web3Connection({ web3Host: process.env.WEB3_HOST_PROVIDER });
        await connection.start(); // start web3 connection so assignments are made
        await connection.connect(); // connect web3 by asking the user to allow the connection (this is needed for the user to _interact_ with the chain)
    }

    const deployer = async () => {
        const connection = new Web3Connection({ web3Host: process.env.WEB3_HOST_PROVIDER });
        const erc20Deployer = new ERC20(connection);
        await erc20Deployer.loadAbi(); // load abi contract is only needed for deploy actions
        const tx =
            await erc20Deployer.deployJsonAbi(
                'Token Name', // the name of the token
                '$tokenSymbol', // the symbol of the token
                "1000000000000000000000000", // the total amount of the token (with 18 decimals; 1M = 1000000000000000000000000)
                await erc20Deployer.connection.getAddress() // the owner of the total amount of the tokens (your address)
            );
        console.log("Tx: ", tx)
    }

    const sendTransaction = async (connection, txAddress, amount) => {
        const myToken = new ERC20(connection, txAddress);

        await myToken.start() // load contract and connection into the class representing your token
        await myToken.transferTokenAmount(address, amount); // transfer 1 token from your address to other address
    }

    return (
        <Box>
            <Button onClick={startConnection}>Connect</Button>
            <Button onClick={deployer}>Deploy Contract</Button>
            <Button onClick={sendTransaction}>Send Transaction</Button>
        </Box>
    )
}
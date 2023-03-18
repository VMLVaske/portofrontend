
import React, { useState } from 'react'
import { Button, Box, Text } from '@chakra-ui/react'
import { getAddressData } from '../utils/etherscan'
import { useAddress } from "@thirdweb-dev/react";

async function UserData() {

    const [data, setData] = useState(null);

    const address = useAddress();

    const fetchData = async () => {
        try {
            const response = await getAddressData(address);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box>
            <Text>Data: </Text>
            {data && <Text>{data}</Text>}
        </Box>
    )
}

export default UserData;
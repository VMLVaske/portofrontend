import { useTheme } from "next-themes";
import { Dropdown, Text, Button, Container } from "@nextui-org/react";

import {
    useNetworkMismatch,
    useNetwork,
    useChainId,
} from "@thirdweb-dev/react";
import { useState } from "react";

export const NetworkIndicator = () => {
    const chainId = useChainId();
    const isMismatched = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();

    const [selectedColor, setSelectedColor] = useState("success");

    return (
        <Container justify="center" align="center">
            <Dropdown>
                <Dropdown.Button auto flat color={selectedColor}>
                    Network
                </Dropdown.Button>
                <Dropdown.Menu color={selectedColor}>
                    <Dropdown.Item key="mumbai">Mumbai</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    );
};
import { Text, Modal, Input } from '@nextui-org/react'
import { useState } from "react";
import { Button } from "@chakra-ui/react"

export default function FundingModal(props) {

    // Modal
    const [visible, setVisible] = useState(false);

    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);


    const fund = async () => {
        try {
            console.log("inside buy method of Funding component - code needs to be added here")
            closeHandler();
        } catch (e) {
            console.log("failed to create direct listing for NFT", e)
        }
    };

    return (
        <div>
            <Button auto flat onClick={handler}>
                Fund
            </Button>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" b size={18}>
                        Fund this project
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        size="md"
                        placeholder="How much do you want to fund?"
                        type="number"
                        onChange={e => setQuantity(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Cancel
                    </Button>
                    <Button auto onClick={fund}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
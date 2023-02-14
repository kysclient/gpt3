import {Button, Flex, Input} from "@chakra-ui/react";
import React from "react";

interface IMessageFooterProps {
    inputMessage: string
    setInputMessage: React.Dispatch<string>
    handleSendMessage: () => void;
}


export function MessagesFooter({inputMessage, setInputMessage, handleSendMessage}: IMessageFooterProps) {
    return (
        <Flex w="100%" mt="5">
            <Input
                placeholder="Type Something..."
                border="none"
                borderRadius="none"
                _focus={{
                    border: "1px solid black",
                }}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        handleSendMessage();
                    }
                }}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
            />
            <Button
                bg="black"
                color="white"
                borderRadius="none"
                _hover={{
                    bg: "white",
                    color: "black",
                    border: "1px solid black",
                }}
                disabled={inputMessage.trim().length <= 0}
                onClick={handleSendMessage}
            >
                Send
            </Button>
        </Flex>
    )
}
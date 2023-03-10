import React, {useEffect, useRef, useState} from "react";
import {
    Avatar,
    Box,
    Button,
    Flex,
    FormControl,
    Heading,
    Icon,
    IconButton,
    Input, Spinner,
    Text,
    useColorMode
} from "@chakra-ui/react";
import {ChatType} from "../../types";
import {RiSendPlaneFill} from 'react-icons/ri';
import {Message} from "../Message";

interface IMessagesProps {
    messages: ChatType[]
    sendMessage: () => void;
    setInputMessage: React.Dispatch<string>
    inputMessage: string
    loading: boolean
}

export function Messages({loading, inputMessage, setInputMessage, messages, sendMessage}: IMessagesProps) {
    const {colorMode} = useColorMode();

    const AlwaysScrollToBottom = () => {
        const elementRef = useRef<HTMLUListElement>(null);
        useEffect(() => elementRef.current?.scrollIntoView());
        return <div id="jimmyjohnson" ref={elementRef as unknown as React.RefObject<HTMLDivElement>}/>;
    };


    return (
        <Box
            h="100vh"
            display="flex"
            flexDirection="column"
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            transition="background-color 200ms"
        >
            <Flex
                align="center"
                position="sticky"
                top={0}
                zIndex={19}
                p={4}
                h={'81px'}
                borderBottom="1px solid"
                borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                transitionDuration="200ms"
                bg={colorMode === 'light' ? 'white' : 'gray.800'}
            >
                {/*{recipient ? (*/}
                {/*    <Avatar src={recipient?.photoURL} />*/}
                {/*) : (*/}
                {/*    <Avatar name={recipientEmail[0]} bg={colorMode === 'light' ? 'teal.600' : 'teal.500'} />*/}
                {/*)}*/}

                <Box ml={4} flex={1}>
                    <Heading as="h3" size="lg">
                        kysclient@gmail.com
                    </Heading>
                    <Text>
                        Last active:{' '}
                        {/*{recipient?.lastActive?.toDate() ? (*/}
                        {/*    <TimeAgo datetime={recipient?.lastActive?.toDate()} />*/}
                        {/*) : (*/}
                        {/*    'Unavailable'*/}
                        {/*)}*/}
                    </Text>
                </Box>
            </Flex>
            <Box
                id="msg-box"
                p={6}
                pb={0}
                flex={1}
                width={"100%"}
                overflowY="scroll"
                className="invisible"
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}
            >
                {
                    messages.map((message, idx) => (
                        <Message key={idx} loading={loading} message={message}/>
                    ))
                }
                {
                    loading &&
                    <Text
                        w="fit-content"
                        p={4}
                        rounded="md"
                        margin={2}
                        minW="71px"
                        maxW="80%"
                        pb={6}
                        position="relative"
                        textAlign="left"
                        wordBreak="break-word"
                        bg={colorMode === 'light' ? 'gray.300' : 'gray.500'}
                    >
                        <Spinner/>
                    </Text>
                }
                {/*{showMessages()}*/}
                {/*<Box ref={endOfMessages} id="jimmyjohnson">*/}
                {/*    /!* scroll target empty div *!/*/}
                {/*</Box>*/}
                <AlwaysScrollToBottom/>
            </Box>
            <FormControl p={2} zIndex={3} display="flex" alignItems="centre">
                <Input
                    placeholder="Type Something..."
                    position="sticky"
                    bottom={0}
                    value={inputMessage}
                    onKeyPress={(e) => {
                        e.stopPropagation()
                        // e.preventDefault()
                        if (e.key === "Enter") {
                            sendMessage();
                        }
                    }}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <IconButton
                    ml={2}
                    onClick={sendMessage}
                    icon={<Icon as={RiSendPlaneFill}/>}
                    _focus={{boxShadow: 'none'}}
                    size="md"
                    isRound
                    aria-label={"sendButton"}/>
                <Button hidden disabled={!inputMessage} onClick={sendMessage}>
                    send
                </Button>
            </FormControl>
        </Box>
    )
}
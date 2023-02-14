import {Spinner, useColorMode} from "@chakra-ui/react";
import {ChatType} from "../../types";
import {Flex, Stack} from '@chakra-ui/layout';
import {
    Avatar,
    IconButton,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Box,
    Heading,
    Text,
} from '@chakra-ui/react';

interface IMessageProps {
    loading: boolean
    message: ChatType
}

export function Message({message, loading}: IMessageProps) {
    const {colorMode} = useColorMode();

    return (
        <Box>
            {message.from === 'ME' ? (
                <Text
                    w="fit-content"
                    p={4}
                    rounded="md"
                    margin={2}
                    ml="auto"
                    maxW="80%"
                    pb={6}
                    position="relative"
                    textAlign="right"
                    wordBreak="break-word"
                    bg={colorMode === 'light' ? 'teal.600' : 'teal.500'}
                    minW="71px"
                    color="white"
                >
                    {' '}
                    {message.text}
                    {/* {message.timestamp ? moment(message.timestamp).format('LT') : '...'} */}
                    <Text
                        as="span"
                        color="white"
                        p={4}
                        fontSize="9px"
                        position="absolute"
                        bottom="-2px"
                        textAlign="right"
                        right="0"
                    >
                        {/*{moment(message.timestamp).format('LT')}*/}
                    </Text>
                </Text>
            ) : (
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
                    {message.text}


                    {/*<Text*/}
                    {/*    as="span"*/}
                    {/*    color={colorMode === 'light' ? 'black' : 'white'}*/}
                    {/*    p={4}*/}
                    {/*    fontSize="9px"*/}
                    {/*    position="absolute"*/}
                    {/*    bottom="-2px"*/}
                    {/*    textAlign="right"*/}
                    {/*    left="0"*/}
                    {/*>*/}
                    {/*{moment(message.timestamp).format('LT')}*/}
                    {/*</Text>*/}
                </Text>
            )}
        </Box>
    );
}
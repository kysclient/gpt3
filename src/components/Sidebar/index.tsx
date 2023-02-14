import {Avatar, Button, Flex, Icon, IconButton, Stack, useColorMode} from "@chakra-ui/react";

export function Sidebar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Flex
                direction="column"
                w="300px"
                h="100vh"
                overflowY="scroll"
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}
            >
                <Flex
                    align="center"
                    justify="space-between"
                    position="sticky"
                    top={0}
                    zIndex={199}
                    p={4}
                    h={'81px'}
                    borderBottom="1px solid"
                    borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                    transitionDuration="200ms"
                    bg={colorMode === 'light' ? 'white' : 'gray.800'}
                    // borderRight={
                    //     router.query.id ? 'none' : `1px solid ${colorMode === 'light' ? '#E2E8F0' : '#2D3748'}`
                    // }
                >
                    <Avatar
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                    />
                    <Stack isInline>
                        {/*do somethin*/}
                    </Stack>
                </Flex>
                <Flex
                    direction="column"
                    borderRight="1px solid"
                    borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                    bg={colorMode === 'light' ? 'white' : 'gray.800'}
                    transitionDuration="200ms"
                    flex="1"
                >
                    <Flex direction="column" p={4}>
                        <Button
                            _focus={{ boxShadow: 'none' }}
                            letterSpacing="wide"
                            textTransform="uppercase"
                            fontSize="md"
                            // onClick={createChat}
                        >
                            ADD MODEL
                        </Button>
                    </Flex>
                    {/*{chatPreviews}*/}
                </Flex>
            </Flex>
        </>
    )

}
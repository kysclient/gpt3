import {Button, useToast} from "@chakra-ui/react";

export function ConnectButton() {
    const toast = useToast()

    const makeToast = () => {
        toast({
            title: '010 7687 1592',
            description: 'kysclient@gmail.com',
            status: 'success',
            position: 'top-right',
            isClosable: true,
        });
    }
    return (
        <Button size="sm" onClick={makeToast} colorScheme="blue">
            Contact
        </Button>
    );
}
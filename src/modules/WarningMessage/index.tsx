import {Alert, AlertDescription, AlertIcon, Box} from "@chakra-ui/react";
import React from "react";

export default function WarningMessage({message}: any) {
    return (
        <Box my={4}>
            <Alert status="warning" borderRadius={4}>
                <AlertIcon />
                <AlertDescription>{message}</AlertDescription>
            </Alert>
        </Box>
    );
}
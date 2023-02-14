import {Default} from "../../layout/Default";
import {Button, HStack, IconButton, Input} from "@chakra-ui/react";
import {useState} from "react";
import {SearchIcon} from "@chakra-ui/icons";
import {Configuration, OpenAIApi} from "openai";

export function Search() {
    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const [searchText, setSearchText] = useState("")


    const sendOnClick = async () => {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: searchText,
            temperature: 0,
            max_tokens: 100000,
        });
        console.log('response : ', response)
        setSearchText('')
    }
    return (
        <Default pageName={"Search Page"}>
            <HStack mt='4' mb='4' style={{position:'relative'}}>
                <Input
                    data-testid="new-todo-input"
                    h='46'
                    // borderColor={!statusInput ? 'red.300' : 'transparent'}
                    variant='filled'
                    placeholder='입력하세요.'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <IconButton
                    style={{position:'absolute', right:'0'}}
                    aria-label={"search"}
                    icon={<SearchIcon/>}
                    onClick={sendOnClick}
                />
            </HStack>
        </Default>
    )
}
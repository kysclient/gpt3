import {Search} from "../components/Search";
import {Default} from "../layout/Default";
import {Box, Flex} from "@chakra-ui/react";
import {Messages} from "../components/Messages";
import {MessagesFooter} from "../components/MessageFooter";
import {useState} from "react";
import {ChatType} from "../types";
import {Sidebar} from "../components/Sidebar";
import {Configuration, OpenAIApi} from "openai";
import {text} from "stream/consumers";


export default function ChatPage() {
    const [loading, setLoading] = useState(false)
    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const [messages, setMessages] = useState<ChatType[]>([
        { from: "BOT", text: "Hi,This is ChatBot with GPT-3" },
        {
            from: "BOT",
            text:
                "Say anything you want."
        }
    ]);
    const [inputMessage, setInputMessage] = useState("");

    const handleSendMessage = async () => {
        if (!inputMessage.trim().length) {
            return;
        }
        setLoading(true)
        const data = inputMessage;

        setMessages((old) => [...old, { from: "ME", text: data }]);
        setInputMessage("");

        const response = await openai.createCompletion({
            // model: "text-davinci-003",
            model: "text-curie-001",
            prompt: data,
            temperature: 0,
            max_tokens: 2000,
        })
            .then(value => {
                setMessages((prev) => {
                    return [...prev, {from:"BOT", text: value.data.choices[0].text as string}]
                })
            })
        setLoading(false)
        console.log('response : ', response)

    };

    return (
        <Default pageName={"Chat Page"}>
            <Flex>
                <Sidebar />
                <Box
                    flex="1"
                    overflow="scroll"
                    // h="100vh"
                    css={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                    }}
                >
                    <Messages loading={loading} inputMessage={inputMessage} setInputMessage={setInputMessage} messages={messages} sendMessage={handleSendMessage}/>
                </Box>
            </Flex>

        </Default>
        )
}

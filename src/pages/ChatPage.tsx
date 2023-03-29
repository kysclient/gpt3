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
import WarningMessage from "../modules/WarningMessage";


export default function ChatPage() {
    const {Translate} = require('@google-cloud/translate').v2;
    const translate = new Translate();

    const [warning, setWarning] = useState('')
    const [loading, setLoading] = useState(false)
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
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
        if(loading) {
            window.alert('봇의 응답을 기다리는중입니다.')
            return;
        }
        if (!inputMessage.trim().length) {
            return;
        }
        translateText(inputMessage)

        setLoading(true)
        const data = inputMessage;

        setMessages((old) => [...old, { from: "ME", text: data }]);
        setInputMessage("");
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: data,
                temperature: 0,
                max_tokens: 2000,
            })
                .then(value => {
                    setMessages((prev) => {
                        return [...prev, {from:"BOT", text: value.data.choices[0].text as string}]
                    })
                })
        }catch (e) {
            console.log('something wrong... : ', e)
        }
        setLoading(false)
    };

    async function translateText(text: string) {
        // Translates the text into the target language. "text" can be a string for
        // translating a single piece of text, or an array of strings for translating
        // multiple texts.
        const target = 'e.g'
        let [translations] = await translate.translate(text, target);
        translations = Array.isArray(translations) ? translations : [translations];
        console.log('Translations:');
        translations.forEach((translation: string, i: number) => {
            console.log(`${text[i]} => (${target}) ${translation}`);
        });
    }


    return (
        // <Default pageName={"Chat Page"}>
            <Flex>
                {warning && <WarningMessage message={warning} />}
                <Sidebar />
                <Box
                    flex="1"
                    overflow="scroll"
                    h="100vh"
                    w="calc(100vw - 300px)"
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

        // </Default>
        )
}

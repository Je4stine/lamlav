import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

 
const steps = [
    {
        id: '0',
        message: 'Hey there!',
        trigger: '1',
    }, 
    {
        id: '1',
        message: 'Please write your Name',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Book a Safari' },
            { value: 2, label: 'Speak to us' },
 
        ],
        end: true
    }
];
 
// Creating our own theme
const theme = {
    background: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: '#075e54',
    headerFontColor: '#ffffff',
    headerFontSize: '20px',
    botBubbleColor: '#DCF8C6',
    botFontColor: '#000000',
    userBubbleColor: '#ECE5DD',
    userFontColor: '#000000',
  };
  
 
// Set some properties of the bot
const config = {
    // botAvatar: {imBot},
    floating: true,
};
 
function Bot() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Lamalav Safaris"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default Bot;
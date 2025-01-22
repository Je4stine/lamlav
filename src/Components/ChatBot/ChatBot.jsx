import React,{useState}from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Avatar from '../../Assets/PNG/avatart.png'; 



const Bot =()=> {
	
	const steps = [
		{
			id: '0',
			message: 'Hello there! How are you today? What is your name?',
			trigger: '2',
		},
		{
			id: '2',
			user: true,
			trigger: '3',
		}, 
		{
			id: '3',
			message: "Hello {previousValue}, how can I help you?",
			trigger: '4'
		}, 
		{
			id: '4',
			options: [
				{ value: 1, label: 'Book a Safari', trigger: () => window.open('https://wa.me/+254716251932') },
				{ value: 2, label: 'Talk to our agent', trigger: () => window.open('https://wa.me/+254716251932') },
			],
			end: true
		}
	];
	
	const theme = {
		background: '#C9FF8F',
		headerBgColor: '#197B22',
		headerFontSize: '20px',
		botBubbleColor: '#197B22',
		headerFontColor: 'white',
		botFontColor: 'white',
		userBubbleColor: '#FF5733',
		userFontColor: 'white',
	};
	
	const config = {
		botAvatar: Avatar,
		floating: true,
	};

	const logs =()=>{
		console.log("Rendering...")
	}

	logs()
    return (
        <div className="">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="LamLav Leisure Safaris"
					recognitionEnable={true}
	//				speechSynthesis={{ enable: true, lang: 'en' }}
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}

export default Bot;

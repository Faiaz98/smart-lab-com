import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const projectID = 'e3f1ad60-265b-4ae3-ac1a-9d25298b925f';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine 
            height = "100vh"
            projectID = {projectID}
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed { ... chatAppProps}/>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;
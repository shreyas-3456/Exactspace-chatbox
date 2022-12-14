import { useRef, useState } from 'react';
import ChatMessage from './ChatMessage';

function ChatRoom() {
	const dummy = useRef();

	const [messages, setMessages] = useState([]);

	const [formValue, setFormValue] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();
		// Convert the input text to a string of Unicode character codes
		const inputAsUnicode = formValue
			.split('')
			.map((char) => char.charCodeAt(0))
			.join(',');
		const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin'];
		const newMessage = {
			username: userList[Math.floor(Math.random() * userList.length)],
			// Use the String.fromCodePoint method to convert the Unicode character codes to a string
			text: String.fromCodePoint(...inputAsUnicode.split(',')),
			likes: 0,
		};

		setMessages([...messages, newMessage]);
		setFormValue('');

		dummy.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<main>
				{messages &&
					messages.map((msg, index) => (
						<ChatMessage key={index} message={msg} />
					))}

				<span ref={dummy}></span>
			</main>

			<form onSubmit={sendMessage}>
				<input
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
					placeholder="say something nice"
				/>

				<button type="submit" disabled={!formValue}>
					🕊️
				</button>
			</form>
		</>
	);
}

export default ChatRoom;

import React, { useState } from 'react';

function ChatMessage({ message }) {
	const [likes, setLikes] = useState(message.likes);
	const increaseLike = () => {
		setLikes(likes + 1);
	};
	return (
		<>
			<div>
				<h5>{message.username} sent :</h5>
				<div className="text-like-container">
					<p>{message.text}</p>
					<button className="like" type="click" onClick={increaseLike}>
						<img src="https://img.icons8.com/material-outlined/24/null/facebook-like--v2.png" />
						{likes}
					</button>
				</div>
			</div>
		</>
	);
}
export default ChatMessage;

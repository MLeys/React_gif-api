import { useState } from 'react';


export default function Form({ liftGifInfo }) {
	const [image, setImage] = useState('')

	function handleChange(e) {
		setImage(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault();
		
		liftGifInfo(image)
	}

	return (
		<form onSubmit={handleSubmit}>
		
			<label>Movie: </label>
			<input
				type="text" 
				name="image" 
				placeholder='search gifs' 
				value={image}
				onChange={handleChange}
			/>
			<button type="submit"> This is the form</button>
		</form>
	);
}


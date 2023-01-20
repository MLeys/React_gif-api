import { useState } from 'react';


export default function Form({ liftGifSearch }) {
	const [image, setImage] = useState('');
	function handleChange(e) {
		setImage(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()

		liftGifSearch(image)
	}


	return (
		<form onSubmit={handleSubmit}>
		
			<label>Search: </label>
			<input
				type="text" 
				name="image" 
				placeholder='search gifs' 
				value={image}
				onChange={handleChange}
			/>
			<button > Find Gif</button>
		</form>
	);
}


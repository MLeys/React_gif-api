import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './Components/Form/Form'
import GifInfo from './Components/GifInfo/GifInfo'

function App() {
  const [gifInfo, setGifInfo] = useState({});
  // const [gifSearch, setGifSearch] = useState('');

  const apiKey = 'cNrZAlUIqTDtPraU14lcnB2qB3WHnhmf'
  const apiLimit = 1
  const apiRating = 'r'
  
  function liftGifSearch(gifSearch) {
    // setGifSearch(gifSearch)
    makeApiCall(gifSearch)
  }

  async function makeApiCall(gifSearch) {

  
    try {
      console.log(gifSearch, "<--- GIF SEARCH")
      const apiSearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=cNrZAlUIqTDtPraU14lcnB2qB3WHnhmf&q=${gifSearch}`
      const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
      const url = gifSearch ? apiSearchUrl : apiUrl;
      const responseJson = await fetch(url);
      const data = await responseJson.json();
      console.log(data.data)
      
      setGifInfo(gifSearch ? {image_url: data.data[0].images.downsized_large.url } : {image_url: data.data.images.downsized_large.url });

    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    console.log("useEffect START")

    makeApiCall()
  }, []);


  return (
    <div className="App">
      <div>Giphy WOOT WOOT</div>
      <div>
        <Form liftGifSearch={liftGifSearch}/>
        <GifInfo gifData={gifInfo}
        />
      </div>
    </div>
  )
}

export default App

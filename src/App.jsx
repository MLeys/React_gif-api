import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './Components/Form/Form'
import GifInfo from './Components/GifInfo/GifInfo'

function App() {
  const [gifInfo, setGifInfo] = useState({});
  const [gifImage, setGifImage] = useState('');

  function liftGifInfo(info) {
    setGifInfo(info)
  }

  
  const apiKey = 'cNrZAlUIqTDtPraU14lcnB2qB3WHnhmf'
  const apiLimit = 1
  const apiRating = 'r'


  useEffect(() => {
    console.log("useEffect START")
    // https://www.
    // ?limit=${apiLimit}?rating=${apiRating} 
    async function makeApiCall() {
      const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
      try {
        const responseJson = await fetch(apiUrl);
        const data = await responseJson.json()
        setGifInfo({image_url: data.data.images.downsized_large.url })

      } catch(err) {
        console.log(err)
      }
    }
    makeApiCall()
  }, [])

  return (
    <div className="App">
      <div>Giphy WOOT WOOT</div>
      <div>
        <Form liftGifInfo={liftGifInfo} />
        <GifInfo gifData={gifInfo}
        />
      </div>
    </div>
  )
}

export default App

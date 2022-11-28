import { useEffect,useState } from "react";

const API_KEY=import.meta.env.VITE_GIPHY_API;
const TEST=import.meta.env.VITE_TEST;

const useFetch =({keyword})=>{

    //console.log(TEST)
    const [gifUrl,setGifUrl]=useState("");
    const ENDPOINT=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&offset=0&rating=g&lang=en`

    const fetchGifs = async()=>{

        try {
           // console.log(`${ENDPOINT}&q=${keyword.split(" ").join("")}`)
            const response=await fetch(`${ENDPOINT}&q=${keyword.split(" ").join("")}`)

            const {data}=await response.json();


            setGifUrl(data[0]?.images?.downsized_medium.url)
        } catch (error) {
            setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
        }
    }


    useEffect(() => {
        if (keyword) fetchGifs();
      }, [keyword]);
    
      return gifUrl;
}

export default useFetch;
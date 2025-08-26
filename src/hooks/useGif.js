import { useEffect, useState } from "react";
import axios from "axios";

function useGif(tag) {
  let API_KEY = "";

  const [gif, setgif] = useState("");
  const [loading, setloading] = useState(false);
  async function fetdata(tag) {
    setloading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imagesource = data.data.images.downsized_large.url;
    setgif(imagesource);
    setloading(false);
  }
  useEffect(() => {
    fetdata("car");
  }, []);

  return {
    gif,
    loading,
    fetdata,
  };
}
export default useGif;


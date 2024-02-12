import 'whatwg-fetch';

export const getGifs = async(category) =>{

    //link... &q = query: lo que se quiere buscar
    //...&limit: En este caso, como son GIF lo que se solicita, un límite de 10 gifs
    const url = `https://api.giphy.com/v1/gifs/search?api_key=mK8UvjCYrXaa0X8vnoxCKHTGX0qMjzYG&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    //Información que contiene la data. Para mayor información, es recomendable hacerle un clg
    //y ver que se puede extraer
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;

  }
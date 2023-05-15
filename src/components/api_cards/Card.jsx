import { useState, useEffect } from "react"
import {Card, Div} from './styled'
import axios, { all } from 'axios'
import { AiOutlineStar } from 'react-icons/ai' ;
import { IconContext } from "react-icons";


export default function Cards(props) {

    

const API_KEY = 'a80332ecd67498023b64c67499fbd152';
const API_BASE = 'https://api.themoviedb.org/3';

const [filmes, setFilmes] = useState([])
const [colorIcone, setColorIcone] = useState('#fff')

useEffect(() => {

    setApi(`${API_BASE}${props.url}api_key=${API_KEY}`, `${'https://image.tmdb.org/t/p/w500/'}`);

},[])

function setApi(urlendereco, urlimage ){

    const getFilms = async (urlendereco, urlimage ) => {
        await axios.get(`${urlendereco}`).then(resposta => { 

            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    image: `${urlimage}${item.poster_path}`
                }
            });

            setFilmes(allApi)
          
        }).catch(error => alert(`desculpe, houve um falha ${error}`));
        
    };

    getFilms(urlendereco, urlimage)

};



    return (
        <Div>
            {filmes.map((item, id )=> (
                <Card key={id} className={'cards'}>
                    <img src={item.image} alt={item.title} />
                    <div>
                        <h3>{item.title.length > 17 ? item.title.slice(0, 17) + ' ' + '...' : item.title}</h3>
                        <p>{item.release_date.split('').slice(0, 4).join(' ')}</p>
                        <IconContext.Provider  value={{ className:'icone' , color: colorIcone}} >
                            <span onClick={() => setColorIcone( colorIcone === '#fff' ? '#48ff00' : '#fff')} ><AiOutlineStar/></span>
                         </IconContext.Provider>
                    </div>
                </Card>
            ))}
        </Div>
    )
}
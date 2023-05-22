import { useState, useEffect } from "react"
import {Card, Div, CardHover} from './styled'
import axios, { all } from 'axios'
import { AiOutlineStar } from 'react-icons/ai' ;
import { IconContext } from "react-icons";


export default function Cards(props) {

    

const API_KEY = 'a80332ecd67498023b64c67499fbd152';
const API_BASE = 'https://api.themoviedb.org/3';

const [filmes, setFilmes] = useState([])
const [colorIcone, setColorIcone] = useState('#fff')
const [quantidadeFilmes, setquantidadeFilmes] = useState(10)




useEffect(() => {

    setApi(`${API_BASE}${props.generoFilmes}api_key=${API_KEY}&per_page=10`, `${'https://image.tmdb.org/t/p/w500/'}`);
 
    setApi(`${API_BASE}${props.url}api_key=${API_KEY}`, `${'https://image.tmdb.org/t/p/w500/'}`);
    
},[props.generoFilmes])

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
          
        }).catch(error => console.log(`desculpe, houve um falha ${error}`));
        
    };

    getFilms(urlendereco, urlimage)

};


    const handleHover = () => {

        let card = document.querySelectorAll('.cardHover')
        // let cardHon = document.querySelectorAll('.cardHover')

        card.forEach((item)=>{
            item.addEventListener('mouseover', ()=>{
                for(let i = 0; i < card.length; i++){
                    card[i].classList.add('cardHover')
                    // cardHon[i].classList.remove('cardHover')
                }
                console.log('click')
                item.classList.remove('cardHover')
                // item.classList.add('cardHover')
            })
        
        })

     
    };

    useEffect(()=>{
        const handlesair = () => {

            let card = document.querySelectorAll('.cardHover')
            // let cardHon = document.querySelectorAll('.cardHover')
    
            card.forEach((item)=>{
                item.addEventListener('onmouseout', ()=>{
                    for(let i = 0; i < card.length; i++){
                        item[i].classList.add('cardHover')
                        // cardHon[i].classList.remove('cardHover')
                    }
                    console.log('click22')
                    
                })
            
            })
    
         
        };
        handlesair()
    })

   
  
    return (
        <Div>
            {filmes.slice(0,props.quantidadeFilmes).map((item, id )=> (
                <Card key={item.id} >
                    <img src={item.image} alt={item.title} />
                    <div>
                        <h3>{item.title.length > 17 ? item.title.slice(0, 17) + ' ' + '...' : item.title}</h3>
                        <p>{item.release_date.split('').slice(0, 4).join(' ')}</p>
                        <IconContext.Provider  value={{ className:'icone' , color: colorIcone}} >
                            <span onClick={() => setColorIcone( colorIcone === '#fff' ? '#48ff00' : '#fff')} ><AiOutlineStar/></span>
                        </IconContext.Provider>
                        <CardHover className={"cardHover"} onMouseEnter={()=> handleHover()}>
                            <h3>{item.title.length > 17 ? item.title.slice(0, 17) + ' ' + '...' : item.title}</h3>
                            <p>{item.overview.length > 500 ? item.overview.slice(0, 500) + ' ' + '...' : item.overview}</p>
                        </CardHover>
                    </div>
                </Card>
            ))}
        </Div>
    )
}
import React, {useState} from "react";
import Cards from "../api_cards/Card";
import { IoIosArrowBack } from 'react-icons/io' ;
import { IoIosArrowForward } from 'react-icons/io' ;
import { IconContext } from "react-icons";
import {Containner,CorrentSlid,Section,Title} from './styled';


function Carrosel(){

    const [acao, setAcao] = useState('/discover/movie?with_genres=28&language=pt-BR&page=1&')
    const [emAlta, setEmAlta] = useState('/movie/top_rated?language=pt-BR&page=1&')
    const [popular, setPopular] = useState('/movie/popular?&language=pt-BR&page=1&')

    const [count,setCount] = useState(0)
    const [cont,setCont] = useState(0)
    
    let newMagin = count;
    let contador = cont;

    const handMarginRigth = ()=>{
        let widthCorrentSlid = document.querySelector('#correntSlid').offsetWidth;
        let cards = document.querySelectorAll('.cards');
        let widthCard = document.querySelector('.cards').offsetWidth;
        console.log(cards.length)
        console.log(widthCorrentSlid)

        if(newMagin <  (cards.length * widthCard) - widthCorrentSlid  ){
            let carouselContainer = document.querySelector('#correntSlid');

            setCont(contador = contador + 1)
            setCount(newMagin = newMagin + (widthCard ))
            carouselContainer.scrollLeft = newMagin ;
            console.log(newMagin)
        }

    }

    const handMarginLeft = ()=>{

        let widthCorrentSlid = document.querySelector('#correntSlid').offsetWidth;
        let cards = document.querySelectorAll('.cards');
        let widthCard = document.querySelector('.cards').offsetWidth;
        console.log(widthCorrentSlid)

        if(newMagin >  0 ){
            let carouselContainer = document.querySelector('#correntSlid');

            setCont(contador = contador - 1)
            setCount(newMagin = newMagin - (widthCard))
            carouselContainer.scrollLeft = newMagin ;
            console.log(newMagin)
        }

    }


    return(
        <Section>
            <Title>
                <h2>Últimos lançamentos</h2>
            </Title>
            <Containner>
                <CorrentSlid id={'correntSlid'}>
                    <Cards url={popular}/>
                </CorrentSlid>
                <div className={'bnt'}>
                    <IconContext.Provider  value={{className:'direcionais'}} >
                        <span onClick={()=> handMarginLeft()} ><IoIosArrowBack/></span>
                        <span onClick={()=> handMarginRigth()} ><IoIosArrowForward/></span>
                    </IconContext.Provider >
                </div>
            </Containner>
        </Section>
    )
}

export default Carrosel;

//stilo do card das imagens / textos

import styled from "styled-components"

export const Card = styled.section`
    
    width: 220px;
    background-color: black;
    display: inline-block;
    color: #fff;
    padding-bottom: 5px;
    flex-direction:column;
    z-index: 2;
    position: relative;
    cursor: pointer;
    user-select: none;
    outline:none;
    transform: scale(0.9);
   
    @media(max-width:425px){
        max-width: 110px;
    }
    @media(max-width:375px){
        max-width: 147px;
    }
    @media(max-width:320px){
        min-width: 250px;
    }
   
   

    span{
     
        display: flex;
        justify-content:center;
        align-items: center;
        position:absolute;
        bottom: 10px;
        right: 8px;
        width: 25px;
        height: 25px;
        z-index: 2;
        background: #525252 url('https://cdn.icon-icons.com/icons2/1558/PNG/512/353442-bookmark-circle-favorite-favorites-favourite-like-star_107512.png') no-repeat center / 100% 100%;
        transition: all 0.2s;
        cursor: pointer;
        border-radius: 50%;
        border: none;
    }
    span:hover{
        transform: scale(1.2);
    }
 

    img{
        width: 100%;
       
    }


    h3{
        font-size: 14px;
        font-weight:600;
        margin: 10px 0px;
        max-width: 160px;
    }

    p{
        font-size: 12px;
        font-weight:300;
        color: #b4b4b4;
    }


    &:hover .cardHover{
        opacity: 1;
    }

   
  
`;


export const Div = styled.div`
    display: flex;
    background-color: #000000;
    position:relative;
    
`;

export const CardHover = styled.article`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    position:absolute;
    padding: 15px;
    opacity:0;
    transition: all 0.3s;
    color: #ffffff;
    top: 0;
    left:0;
    z-index:1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg,  #000000 15%, #000000d5 45%, rgba(0, 0, 0, 0.808) 40%);
    overflow: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth; /* Suaviza a rolagem */
    transition: scroll-duration 1s; /* Define a duração da rolagem suave */
  
    &::-webkit-scrollbar {
        width: 1px; /* Largura da barra de rolagem */
      
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff0000; /* Cor de fundo da barra de rolagem */ 
    }
    
`;
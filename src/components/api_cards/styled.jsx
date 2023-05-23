
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
        justify-content:flex-end;
        align-items: center;
        position:absolute;
        top: 15px;
        right: 15px;
        width: 100%;
        height: 20px;
        z-index: 2;
        cursor: pointer;
 
    }
    .icone{
        span{
            width: 100%;
         
        }
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
    text-align: center;
    position:absolute;
    padding: 6px;
    opacity:0;
    transition: all 0.3s;
    top: 0;
    left:0;
    z-index:1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg,  #000000 15%, #000000d5 45%, rgba(0, 0, 0, 0.808) 40%);
    overflow: auto;
`;
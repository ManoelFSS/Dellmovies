import styled from "styled-components"

export  const SecaoDeFilmes = styled.section`
    background-color: #000;

    nav{
        width: 100%;
     
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        
        ul{
            display: flex;
            flex-wrap:wrap;
            width: 80%;
            list-style: none;
            justify-content: space-between;
         
            @media(max-width:812px){
                justify-content: center;

            }

            li{
      
                padding: 10px 15px;
                font-size: 12px;
                font-weight: 300;
                color: #fff;
                cursor: pointer;
                border-bottom: solid 2px #000;
                transition: all 0.3s;
                &:hover{
                    border-bottom: solid 2px red;
                }
                @media(max-width:812px){
                  text-align: center;
                  width: 70.8px;
                
                }

                
            }
        }
    }

    .ativo{
        border-bottom: solid 2px red;
    }

`;

export  const Areafimes = styled.section`
    display: flex;
    justify-content: center;
    background-color: black;
    
    div{
        max-width: 78.5%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      

        @media(max-width:577px){
            max-width: 100%;
        }

        section{
            width: 220px;
            display: inline-block;
            color: #fff;
            padding-bottom: 5px;
            flex-direction:column;
            position: relative;
            cursor: pointer;
            transform: scale(0.9);
    
            @media(max-width:320px){
                min-width: 250px;
            }
        }
    }
 
`;




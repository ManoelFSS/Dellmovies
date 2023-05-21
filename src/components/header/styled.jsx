import styled from 'styled-components';

export const Headers = styled.header`
    display: flex;
    justify-content: center;
    background: #000000 url(${props=> props.back}) no-repeat center / cover;
    height: 100vh;
    position: relative;

    section{
        display: flex;
        padding: 10px 30px;
        min-height: 10vh;
        width: 100%;
        background-color: #0000001f;
        backdrop-filter: blur(10px);
        position: fixed;
        z-index:1;
        @media(max-width:670px){
            padding: 10px 10px;
        }
     
      
        div:nth-child(1){
            flex: 1;
            display: flex ;
            align-items: center;
           
            @media(max-width:1098px){
                max-width: 200px;
               
            }
            img{
                height: 10vh;
                @media(max-width:466px){
                    height:5vh;
        
                }
            }
        }

        div:nth-child(3){
            flex: 1;
            display: flex ;
            justify-content: flex-end;
            align-items: center;
            padding-left: 10px;

            @media(max-width:904px){
                display:none ;
            }

            aside{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 20%;

                img{  
                 height:10vh ;
                 margin-top: 10px;
                }
            }

              
            a{
                text-decoration: none;
                color: #fff;
            }
         
        
        }
        nav{
            flex: 1;
            display: flex ;
            align-items: center;
            justify-content: center;
            
          
            ul{
                display: flex;
                list-style: none;
                gap: 10px;
              
                li{
                    padding: 2% 40px;
                    border-radius: 20px;
                    color: #fff;
                    text-shadow: 0px 2px 8px #0000005C;
                    @media(max-width:366px){
                        padding: 2% 20px;
        
                    }
                }

                li:hover, .ativo{
                    background-color: #747474;
                    box-shadow: 0px 2px 10px 2px #0000005C;

                }
            }
        }
    }    
  
`;



export const  HeaderGradient = styled.header`

    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    padding-bottom: 10px;
    background-image: linear-gradient(0deg,  #000000 3%, #000000f9 6%, rgba(0, 0, 0, 0.24) 91%);

    @media(max-width:670px){
        align-items:flex-end;
       
    }
`;

export const Input = styled.input`

    width: ${props => props.widthInput};
    margin-right: 10px;
    text-align: center;
    padding: 4px;
    font-size: 12px;
    border: none;
    padding: 5px;
    border: solid 1px ${props=> props.bordColor};
    font-size: 14px;
    border-radius: 10px;
    background-color: transparent;
    transition: all 0.5s;
    color: #fff;

    &::placeholder {
        text-align: center;
        color: #fff;
        font-weight: 300;
        font-size: 14px;
        text-shadow: 0px 2px 8px #0000005C;
    }
    &:focus,  &:hover, &:active {
        width: 200px ;
        border: solid 1px #cecece;
        outline: none;
        transition: all 0.5s;
        border-radius: 10px;
    }
    
`;

export const  Containner = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    padding: 10px 30px 30px 50px;
   
    @media(max-width:670px){
        padding: 10px 10px;
        
    }
`;


export const  Avaliacao = styled.div`

    display: flex;
    gap: 20px;
  
    span{
        font-size: 20px ;
    }
    span:nth-child(3){
        background-color: yellow ;
        padding: 0 5px;
        color: #000000;
        font-weight: bold;
    }
    img {
        height:24px ;
    }
`;


export const Descricao = styled.div`
   width: 600px;
   margin-left:11%;
   @media(max-width:670px){
    width: 100%;
    margin-left:0%; 
  }
  @media(max-width:466px){
    padding-bottom:20px;
  }

  h1{
    font-size: 24px;
    font-weight: bolder;
    @media(max-width:670px){
        font-size: 20px;
    }
  }

  div{
    font-size: 12px;
    padding: 4px 0px;
  }

  p{
    font-size: 14px;
    @media(max-width:670px){
        font-size: 11px;
    }
  }

`;




export const Conteiner_btns = styled.div`
    display:flex ;
    flex-wrap: wrap;
    gap: 20px;
    
    @media(max-width:466px){
        justify-content: center;
        gap: 0px;
    }
    
 
    img{
        height: 2vh;
    }
    
    .btnAssistir,  .btnTraler{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        min-width: 170px;
        height: 40px;
        color: #fff;
        background-color: #D53A00;
        margin-top: 10px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
       
        @media(max-width:466px){
            min-width: 250px;
        }
    }
    .btnTraler{
    
        background-color: #717171;
      
    }
`;




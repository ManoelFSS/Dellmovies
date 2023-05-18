import styled from 'styled-components';

export const Headers = styled.header`
    background: #000000 url(${props=> props.back}) no-repeat center / cover;
    min-height: 100vh;
    position: relative;
    @media(max-width:670px){
        height: 120vh;
    }
    @media(max-width:460px){
        height: 100vh;
    }

  
    .headerGradient{
        display: flex;
        align-items: center;
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
    
        div{
            width: 77%;
          
            @media(max-width:670px){
                width:90%;
                height: 70%;
            }
            
            @media(max-width:450px){
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: flex-end;
                border: solid 1px red;
            }
          
            article{
                display: flex;
                flex-direction: column;
                gap: 4px;
                max-width: 600px;
                line-height: 30px;
                letter-spacing: 1px;
              
                @media(max-width:670px){
                    max-width: 100%;
                }

                span{
                    font-size: 12px;
                    text-shadow: 0px 2px 8px #000000;
                }

                p{
                    font-size: 14px;
                    font-weight: 100;
                    @media(max-width:670px){
                        line-height: 20px;
                        font-size: 13px;
                    }
                }
            }
        }
    }

    section{
        display: flex;
        padding: 10px 30px;
        min-height: 12vh;
        width: 100%;
        background-color: #0000001f;
        backdrop-filter: blur(10px);
        position: fixed;
        z-index:1;

        div:nth-child(1){
            flex: 1;
            display: flex ;
            align-items: center;

            img{
                max-height: 7vh;
                min-height:6vh ;
            }
            img ~ input{
                width: 200px;
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
                }

                li:hover, .ativo{
                    background-color: #747474;
                    box-shadow: 0px 2px 10px 2px #0000005C;

                }
            }
        }
        div:nth-child(3){
            flex: 1;
            display: flex ;
            align-items: center;
            justify-content: flex-end;

            aside{
                display:flex ;
                align-items: center;
                gap: 5px;
               img{
                 height: 7vh;
                 margin-top: 10px;
                 cursor: pointer;
               }

               a{
                color: #fff;
                text-decoration: none;
                font-weight: 300;
                font-size: 14px;
                text-shadow: 0px 2px 8px #0000005C;
               }
            }
           
        }
    }
    .avaliacao{
        display: flex;
        gap: 20px;
        span{
            font-size: 20px !important;
            
        }
        span:nth-child(3){
            background-color: yellow !important;
            padding: 0 6px;
            color: #000000;
            font-weight: bold;
        }
        img {
            height:24px ;
        }
    }
    
`;
export const Conteiner_btns = styled.div`
    display:flex ;
    margin-top: 20px;
    max-height: 100px;
    gap: 10px;
    @media(max-width:450px){
        margin-top: 20px;
        max-height: 100px;
        
    }
 
    img{
        height: 2vh;
    }
    
    .btnAssistir,  .btnTraler{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 170px;
        height: 40px;
        color: #fff;
        background-color: #D53A00;
        margin-top: 10px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        padding: 10px;
        @media(max-width:450px){
            min-width: 250px;
        }
    }
    .btnTraler{
    
        background-color: #717171;
      
    }
`;


export const Input = styled.input`
    width: ${props=> props.widthInput};
    padding: 5px;
    border: none;
    font-size: 14px;
    font-weight: 300;
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


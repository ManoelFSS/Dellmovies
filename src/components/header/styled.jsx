import styled from 'styled-components';

export const Headers = styled.header`
    background: url(${props=> props.back}) no-repeat center / cover;
    height: 100vh;
    position: relative;
    
    .headerGradient{
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 100vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        background-image: linear-gradient(0deg,  #000000 3%, #000000f9 6%, rgba(0, 0, 0, 0.24) 91%);
        div{
            width: 76%;
            height: 60vh;
          
            article{
                display: flex;
                flex-direction: column;
                gap: 4px;
                max-width: 600px;
                line-height: 30px;
                letter-spacing: 1px;
              
                @media(max-width:450px){
                    max-width: 100%;
                }

                span{
                    font-size: 12px;
                    text-shadow: 0px 2px 8px #000000;
                }
                p{
                    font-size: 14px;
                    font-weight: 100;
                
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


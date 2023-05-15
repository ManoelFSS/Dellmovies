import styled from 'styled-components';

export const Headers = styled.header`
    background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKYL8YIRGaKHPBx-K261_OsGpc75lZmUWOQ&usqp=CAU') no-repeat center / cover;
    height: 100vh;
    position: relative;
    
    .headerGradient{
        height: 100vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(0deg,  #000000 3%, #000000f9 6%, rgba(0, 0, 0, 0.041) 91%);
    }

    section{
        display: flex;
        padding: 0px 30px;
        min-height: 10vh;
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
                height: 6vh;
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
                    padding: 10px 40px;
                    border-radius: 20px;
                    color: #fff;
                }

                li:hover, .ativo{
                    background-color: #747474;
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
        }
        &:focus,  &:hover, &:active {
            width: 200px ;
            border: solid 1px #cecece;
            outline: none;
            transition: all 0.5s;
            border-radius: 10px;
        }
     

        
     
`;
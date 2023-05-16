import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
`;

export const Title = styled.div`
     width: 76%;
     color: #fff;
     font-weight: bold;
     font-size: 0.8rem;
     padding: 5px 0px;
`;

export const Containner = styled.section`
    width: 100%;
    display: flex;

    justify-content: center;
    position: relative;
    background-color: #000000;

    .bnt{

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 4%;
        width: 100%;
        height: 10vh;
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        color: #717171;
   

        @media(max-width:864px){
            padding: 0px 2%;
        }
    
    }

    .direcionais{
        font-size: 70px;
        font-weight:700;
        @media(max-width:581px){
            font-size: 40px;
        }
    }
   
`;

export const CorrentSlid = styled.div`
    display: flex;
    max-width: 78%;
    min-width: 200px;
    overflow: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth; /* Suaviza a rolagem */
    transition: scroll-duration 1s; /* Define a duração da rolagem suave */
`;


import React, {useState} from "react";
import {Headers, Input} from './styled'
import Logo from '../../assets/logo.png'
import Lupa from '../../assets/lupa.png'

export default function Header(){

    const [widthInput,setwidthInput] = useState('60px')

   const  handelInput = (e)=>{
        e.target.value !== '' ? setwidthInput('200px') :  setwidthInput('60px');
        
   }
    return (
        <Headers>
            <section>
                <div>
                    <img src={Logo} alt="DELL MOVIES" />
                </div>
                <nav>
                    <ul>
                        <li>Séries</li>
                        <li className={'ativo'}>Filmes</li>
                    </ul>
                </nav>
                <div>
                    <aside>           
                        <img src={Lupa} alt="pesquisa"  />
                        <Input widthInput={widthInput}  type="search" placeholder="Filtro" id={'pesquisar'}  onChange={(e)=> handelInput(e)}/>
                        <a href="#">Login</a>
                    </aside>
                </div>
            </section>
            <div className={'headerGradient'}></div>
        </Headers>
    )
}
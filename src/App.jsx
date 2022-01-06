import './App.css'

import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

import React from 'react'


export default () => (
    <div className='App'>
        <h1> Fundamentos React </h1>
        <div className="Cards">
            <Card titulo="#09 - Comunicação Direta " color="#283655  ">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização COndicional " color="#8C6954">
                <ParOuImpar numero={21} />
                <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'test@mail.com' }}></UsuarioInfo>
            </Card>

            <Card titulo="#07 - Desafio Repetição " color="#E19D29">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#E9514C">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Lima">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="José" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={10} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    subtitulo="Rodrigo"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);

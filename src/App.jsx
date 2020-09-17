import React from "react";
import './App.css'
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";

export default (props) =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#10  Contador" color="#ADC4CC">
                <Contador passo={10} valor={100}/>
            </Card>
            <Card titulo="#09  Input" color="#DD5F32">
                <Input />
            </Card>
            <Card titulo="#08  Comunicação Indireta" color="#000">
                <Super>
                </Super>
            </Card>
            <Card titulo="#07 Comunicação Direta" color="#29ABA4">
                <Pai sobrenome="Freitas"/>
            </Card>
            <Card titulo="#06 Condicional v2" color="#FA6900">
                <CondicionalComIf numero={10}/>
            </Card>
            <Card titulo="#05 Condicionalv1" color="#E94C6F" >
                <Condicional numero={11}/>
            </Card>
            <Card titulo="#04 Repetição" color="#008BBA">
                <Repeticao/>
            </Card>
            <Card titulo="#03 Componente Com Filho" color="#FF85CB">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 Componente Com Parâmetro" color="#5BB12F">
                <ComParametro titulo="Esse é o titulo"
                              subtitulo="Esse é o subtitulo">
                </ComParametro>
            </Card>
            <Card titulo="#01 Primeiro Componente" color="#9B539C">
                <Primeiro/>
            </Card>
        </div>
    </div>
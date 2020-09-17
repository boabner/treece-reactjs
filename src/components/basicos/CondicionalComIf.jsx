import React from "react";

import If from './If'

export default props => {

    return (
        <div>
            <h2>O Número é {props.numero}</h2>
            <If test={props.numero % 2 === 0}>
                <spam>Par</spam>
            </If>
            <If test={props.numero % 2 === 1}>
                <spam>ímpar</spam>
            </If>
        </div>
    )
}
import React from "react";
import Item from './item/index'

function List(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }]
    return (
        <aside className="listaTarefas">
            <h1>Estudos do dia</h1>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List
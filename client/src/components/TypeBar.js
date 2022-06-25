import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const {goods} = useContext(Context)
    return (
        <ListGroup className="list-group-horizontal ms-0">
            {goods.types.map(type =>
                <ListGroup.Item 
                style={{cursor:'pointer'}}
                active={type.id === goods.selectedType.id}
                onClick={() => type.id === goods.selectedType.id ? goods.setSelectedType(-1) : goods.setSelectedType(type)}
                key={type.id}>
                    <h6 style={{margin:3, padding:0, userSelect:'none'}}>{type.name}</h6>
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;

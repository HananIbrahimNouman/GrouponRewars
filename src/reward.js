import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';


const Container = styled.div`
padding: 8px;
margin-bottom: 8px;
height:27px;
`;

export default class Reward extends React.Component {
    render() {
        const { reward, index, isFirstColumn } = this.props;
        return (
            <Draggable draggableId={reward.id} index={index}>
                {(provided, snapshot) => (
                    <React.Fragment>
                        <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{reward.content}
                        </Container>
                        {snapshot.isDragging && isFirstColumn &&(<Container>{reward.content}</Container>)}
                    </React.Fragment>
                )}
            </Draggable>
        );
    }
}



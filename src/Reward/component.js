import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import ClearIcon from '@material-ui/icons/Clear';


const Container = styled.div`
padding: 8px;
margin-bottom: 8px;
height:27px;
`;

export default class Reward extends React.Component {
    render() {
        const { reward, index, isFirstColumn, removeReward, columnId} = this.props;
        return (
            <Draggable draggableId={reward.id} index={index}>
                {(provided, snapshot) => (
                    <React.Fragment>
                        <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            {reward.content}
                            {!isFirstColumn && reward.content && (<button onClick={()=>removeReward({columnId, rewardIndex:index})}><ClearIcon/></button>)}
                        </Container>
                        {snapshot.isDragging && isFirstColumn &&(<Container>{reward.content}</Container>)}
                    </React.Fragment>
                )}
            </Draggable>
        );
    }
}



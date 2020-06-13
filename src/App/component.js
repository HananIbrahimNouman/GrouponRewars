import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { v4 as uuid } from "uuid";
import Column from '../Column'


const Container = styled.div`
  display: flex;
  width:700px;
  margin:30px auto;
`;
const Title = styled.h1`
  text-align:center;
`;
const Save = styled.button`
    margin-left:50%;
    margin-right:50%;
    position: relative;
`;

export default class App extends React.Component {

    onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return
        }


        const sourceColumn = this.props.columns[source.droppableId];
        const destinationColumn = this.props.columns[destination.droppableId];
        const sourceRewards = Array.from(sourceColumn.rewards);
        const destinationRewards = Array.from(destinationColumn.rewards);
        const item = sourceColumn.rewards[source.index];
        let newSourceColumn;
        let newDestinationColumn;

        if (sourceColumn.id === destinationColumn.id) {
            return;
        }

        if (source.droppableId === 'C0') {
            destinationRewards[source.index] = { ...item, id: uuid() };
        } else {
            sourceRewards[source.index] = { content: '', id: uuid() };
            destinationRewards[source.index] = { ...item, id: draggableId };
            newSourceColumn = {
                ...sourceColumn,
                rewards: sourceRewards
            }
            this.props.setColumn(newSourceColumn)
        }

        newDestinationColumn = {
            ...destinationColumn,
            rewards: destinationRewards
        }

        this.props.setColumn(newDestinationColumn)

    }
    render() {
        const {columns} = this.props;
        const columnsKeys = columns && Object.keys(columns);
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Title>Groupon Rewards!</Title>
                <Container>
                    <Column id='C0' />
                    {columnsKeys && columnsKeys.slice(1,columnsKeys.length).map(coulmnId => {
                        return <Column key={coulmnId} id={coulmnId}/>
                    })}
                </Container>
                <Save onClick={()=>localStorage.setItem('columns',JSON.stringify(columns))}>SAVE</Save>
            </DragDropContext>
        )
    }
}






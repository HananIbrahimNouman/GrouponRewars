import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data'
import Column from './column'
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { v4 as uuid } from "uuid";

const Container = styled.div`
  display: flex;
  width:700px;
  margin:30px auto;
`;
const Title = styled.h1`
  text-align:center;
`;
class App extends React.Component {
  state = initialData;
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return
    }

console.log(1111111)
console.log(source.index,"source.indexsource.indexsource.index")

    const sourceColumn = this.state.columns[source.droppableId];
    const destinationColumn = this.state.columns[destination.droppableId];
    const sourceRewards = Array.from(sourceColumn.rewards);
    const destinationRewards = Array.from(destinationColumn.rewards);
    const item = sourceColumn.rewards[source.index];
    let newSourceColumn;
    let newDestinationColumn;

    if (sourceColumn.id === destinationColumn.id) {
      return;
    }
    console.log(222222)

    if (source.droppableId === 'C0') {
      console.log(333333)
      destinationRewards[source.index]=  {...item,id:uuid()};

      newSourceColumn = {
        ...sourceColumn,
      }

      console.log(destinationRewards,"destinationRewardsdestinationRewards")

    } else {
      sourceRewards[source.index]=  {content:'',id:uuid()};
      destinationRewards[source.index]=  {...item,id:draggableId};
      newSourceColumn = {
        ...sourceColumn,
        rewards: sourceRewards
      }
    }

    newDestinationColumn = {
      ...destinationColumn,
      rewards: destinationRewards
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn,
      }

    }
    console.log(newState,"newState")
    this.setState(newState)
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Title>Groupon Rewards!</Title>
        <Container>
          <Column key='C0' column={this.state.columns['C0']} rewards={this.state.columns['C0'].rewards} />
          {this.state.columnOrder.map(coulmnId => {
            const column = this.state.columns[coulmnId];
            const rewards = column.rewards;
            return <Column key={column.id} column={column} rewards={rewards} />
          })}
        </Container>
      </DragDropContext>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



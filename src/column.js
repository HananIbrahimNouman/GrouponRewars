import React from 'react';
import styled from 'styled-components';
import Reward from './reward'
import { Droppable } from 'react-beautiful-dnd';


const Container = styled.div`
  margin: 8px 0;
  border:1px solid lightgrey;
  border-radius: 2px;
  width:150px;
  display:flex;
  flex-direction: column;
  text-align: center;
  height:320px;
`;
const Title = styled.h3`
  padding: 2px;
`;

const RewardList = styled.div`
  padding: 8px;
`;



export default class Column extends React.Component {
  render() {
    const isFirstColumn = this.props.column.id === 'C0';
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} isDropDisabled={isFirstColumn}>
          {(provided) => (
          <RewardList ref={provided.innerRef} {...provided.droppableProps}>
            {this.props.rewards.map((reward,index) => {
            return <Reward reward={reward} key={reward.id} index={index} isFirstColumn={isFirstColumn}/>})}
            {provided.placeholder}
          </RewardList>)}
        </Droppable>
      </Container>
    )
  }
}



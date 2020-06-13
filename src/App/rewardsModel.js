// eslint-disable-next-line import/no-cycle
import { v4 as uuid } from "uuid";

const initialState = {
  columns:  JSON.parse(localStorage.getItem('columns')) || {
    C0: { id: 'C0', title: 'Rewards', rewards: [{ id: uuid(), content: 'R1' }, { id: uuid(), content: 'R2' }, { id: uuid(), content: 'R3' }, { id: uuid(), content: 'R4' }, { id: uuid(), content: 'R5' }] },
    C1: { id: 'C1', title: 'C1', rewards: [{ id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }] },
    C2: { id: 'C2', title: 'C2', rewards: [{ id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }] },
    C3: { id: 'C3', title: 'C3', rewards: [{ id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }] },
    C4: { id: 'C4', title: 'C4', rewards: [{ id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }] },
    C5: { id: 'C5', title: 'C5', rewards: [{ id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }, { id: uuid(), content: '' }] },
  },
};



const rewardsModel = {
  state: { ...initialState },
  reducers: {
    setColumn(state, columnData) {
      return {
        columns: {
          ...state.columns,
          [columnData.id]:columnData,
        }
      };
    },
  },
};

export default rewardsModel;

import { v4 as uuid } from "uuid";

const initialData = {
    rewards: {
        R1: { id: uuid(), content: 'R1' },
        R2: { id: uuid(), content: 'R2' },
        R3: { id: uuid(), content: 'R3' },
        R4: { id: uuid(), content: 'R4' },
        R5: { id: uuid(), content: 'R5' },
    },
    columns: {
        C0: { id: 'C0', title: 'Rewards', rewards:[{ id: uuid(), content: 'R1' },{ id: uuid(), content: 'R2' },{ id: uuid(), content: 'R3' },{ id: uuid(), content: 'R4' },{ id: uuid(), content: 'R5' }] },
        C1: { id: 'C1', title: 'C1', rewards:[{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' }] },
        C2: { id: 'C2', title: 'C2',rewards:[{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' }] },
        C3: { id: 'C3', title: 'C3',rewards:[{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' }] },
        C4: { id: 'C4', title: 'C4',rewards:[{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' }] },
        C5: { id: 'C5', title: 'C5',rewards:[{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' },{ id: uuid(), content: '' }] },
    },
    columnOrder:['C1','C2','C3','C4','C5']
}

export default initialData;
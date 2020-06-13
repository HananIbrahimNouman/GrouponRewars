/* eslint-env jest */
/* eslint-disable */
import React from 'react';
import { render } from 'test-utils';
import rewardsModel from '../rewardsModel';

import App from '../component';

const props = {
    columns: {x: {id: 'x', title: 'x', rewards: ['yy']} },
    setColumn:jest.fn(),
};

const initialState = {
    columns:{
        x:{id: 'x', title: 'x', rewards: ['yy']}
    }
  };

describe('App component', () => {
//   it('should test if the <App /> component renders properly', () => {
//     const { getByText } = render(<App {...props} />);

//     expect(getByText('Groupon Rewards!')).toBeDefined();
//   });


  it('app reducers: should set new column', () => {
    const result = rewardsModel.reducers.setColumn(
        initialState,
        {id: 'x', title: 'x', rewards: ['ii']}
    );
    expect(result).toEqual({
        columns:{
            x:{id: 'x', title: 'x', rewards: ['ii']}
        }
    });
  });

})

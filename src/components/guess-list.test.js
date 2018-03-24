import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('renders without crashing', () => {
        let guesses = ['1','2', '3']
        shallow(<GuessList guesses={guesses} />);
    });//pass through props that match the component
    //guesses prop is an array in original component
    //here, we recreate the array and pass it through as a prop

   
});
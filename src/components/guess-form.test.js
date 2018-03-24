import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />',() => {
    it('renders without crashing', ()=>{
        shallow(<GuessForm />);
    });
    
    it ('renders the button class', ()=>{
        const guessForm = shallow(<GuessForm />);
        expect(guessForm.find('button').hasClass('button')).toEqual(true);
    });

});
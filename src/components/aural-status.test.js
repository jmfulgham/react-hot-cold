import React from 'react';
import { shallow, mount } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('should render and update status without crashing', () => {
        let status = "Your game is running!"
        shallow(<AuralStatus aurualStatus={status}/>);
    });

})
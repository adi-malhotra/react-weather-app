import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../App';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App', () => {
    it('renders without crashing', () => {
        const app = mount(<App/>);
        expect(app.length).toEqual(1);
    });
    it('Header is rendered', () => {
        const app = mount(<App/>);
        expect(app.find(Header).length).toEqual(1);
    });
    it('SearchBar is rendered', () => {
        const app = mount(<App/>);
        expect(app.find(SearchBar).length).toEqual(1);
    });
    it('Correct Props are passed', () => {
        const app = mount(<App/>);
        expect(app.find(Header).prop('header')).toEqual("React JS Weather Project");
    });
})
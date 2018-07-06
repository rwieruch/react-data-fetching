import React from 'react';
import axios from 'axios';
import sinon from 'sinon';

import { mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AxiosApproach from './';

configure({ adapter: new Adapter() });

describe('AxiosApproach', () => {
  const result = {
    data: {
      hits: [
        { objectID: '1', url: 'https://blog.com/hello', title: 'hello', },
        { objectID: '2', url: 'https://blog.com/there', title: 'there', },
      ],
    }
  };

  const promise = Promise.resolve(result);

  beforeAll(() => {
    sinon
      .stub(axios, 'get')
      .withArgs('https://hn.algolia.com/api/v1/search?query=redux')
      .returns(promise);
  });

  afterAll(() => {
    axios.get.restore();
  });

  it('stores data in local state', (done) => {
    const wrapper = mount(<AxiosApproach />);

    expect(wrapper.state().hits).toEqual([]);

    promise.then(() => {
      wrapper.update();

      expect(wrapper.state().hits).toEqual(result.data.hits);

      done();
    });
  });

  it('renders data when it fetched data successfully', (done) => {
    const wrapper = mount(<AxiosApproach />);

    expect(wrapper.find('p').text()).toEqual('Loading ...');

    promise.then(() => {
      wrapper.update();

      expect(wrapper.find('li')).toHaveLength(2);

      done();
    });
  });
});
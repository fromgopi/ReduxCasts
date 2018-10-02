import React from 'react';
import { render } from 'react-dom';
import SimpleComponent from '../src/components/AppComponent';
import { Provider } from 'react-redux';
import store from '../src/store/index';

render(
    <div className="row row-md-5">
        <div>
            <Provider store={store}>
                <SimpleComponent/>
            </Provider>
        </div>
    </div>,
    document.getElementById('root')
);
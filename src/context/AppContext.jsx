import {createContext} from 'react';

const AppContext = createContext({activeStep: 0, subStep: 0, sidebar: true});

export default AppContext;
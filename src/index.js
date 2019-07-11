import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './TodoList'
import Father from './Father';
import Counter from './counter';
ReactDom.render(<div><TodoList/><Father/><Counter/></div>,document.getElementById('root'));
import React from 'react';
import './App.css';
import ImageLike from './components/images-like';
import AddComent from './components/add-coment';
import List from './components/list';

const App = () => {
  return (
    <div className='App'>
      <div className="img-like">
        <ImageLike/>
      </div>
      <div className="com-lis">
        <AddComent/>
        <List/>
      </div>
    </div>
  );
};

export default App;
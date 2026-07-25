import React from 'react';
import Details from './components/Details';
import { books } from './data/books';
import { blogs } from './data/blogs';
import { courses } from './data/courses';
import './App.css';

function App() {
  return (
    <div className="App">
      <Details books={books} blogs={blogs} courses={courses} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BodySection from './components/BodySection/BodySection';
import Login from './components/Login/Login';
import CourseList from './components/CourseList/CourseList';

function App() {
  return (
    <div className="App">
      <Header />
      <BodySection title="Course list">
        <CourseList />
      </BodySection>
      <BodySection title="Log in to continue">
        <Login />
      </BodySection>
      <Footer />
    </div>
  );
}

export default App;
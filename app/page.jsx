'use client';
import Link from 'next/link';
import Courses from './components/Courses';
import CourseSearch from './components/CourseSearch';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const courses = await response.json();
      setCourses(courses);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if(loading) return <LoadingPage />;

  return (
    <>
      <div>
        <h1>HomePage</h1>
      </div>
      <CourseSearch getSearchResults={setCourses} />
      <Courses courses={courses}/>
    </>
  );
};

export default HomePage;

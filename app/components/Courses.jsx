import Link from 'next/link';



const Courses = ({courses}) => {

  return (
    <div className='courses'>
      {courses.map((course) => (
        <div className='card' key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <Link className='btn' href={course.link} target='_blank'>
            View Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;

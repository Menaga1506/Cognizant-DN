import React from 'react';

function Details(props) {
  // ---- Book Details ----
  // Conditional rendering technique 1: ternary operator + map()
  const bookdet =
    props.books && props.books.length > 0 ? (
      <ul>
        {props.books.map((book) => (
          <div key={book.id}>
            <h3> {book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </ul>
    ) : (
      <p>No books available</p>
    );

  // ---- Blog Details ----
  // Conditional rendering technique 2: logical && operator + map()
  const content =
    props.blogs &&
    props.blogs.length > 0 && (
      <div>
        {props.blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    );

  // ---- Course Details ----
  // Conditional rendering technique 3: if/else inside a helper function
  const renderCourses = () => {
    if (!props.courses || props.courses.length === 0) {
      return <p>No courses available</p>;
    }
    return props.courses.map((course) => (
      <div key={course.id}>
        <h3>{course.cname}</h3>
        <h4>{course.date}</h4>
      </div>
    ));
  };
  const coursedet = renderCourses();

  return (
    <div>
      <div className="row">
        <div className="st2">
          <h1> Book Details</h1>
          {bookdet}
        </div>
        <div className="v1">
          <h1> Blog Details</h1>
          {content}
        </div>
        <div className="mystyle1">
          <h1> Course Details</h1>
          {coursedet}
        </div>
      </div>
    </div>
  );
}

export default Details;

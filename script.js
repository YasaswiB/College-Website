let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 9000); 
}

// Function to display courses
function displayCourses() {
  var coursesList = document.getElementById('courses-list');

  // Clear existing list
  coursesList.innerHTML = '';

  // Iterate through courses and create list items
  courses.forEach(function(course) {
      var listItem = document.createElement('li');
      listItem.className = 'course-item';

      // Course image
      var courseImage = document.createElement('img');
      courseImage.className = 'course-image';
      courseImage.src = course.image;
      courseImage.alt = course.name;
      listItem.appendChild(courseImage);

      // Course details
      var courseDetails = document.createElement('div');
      var courseCode = document.createElement('p');
      courseCode.textContent = 'Code: ' + course.code;
      var courseName = document.createElement('p');
      courseName.textContent = 'Name: ' + course.name;
      courseDetails.appendChild(courseCode);
      courseDetails.appendChild(courseName);

      listItem.appendChild(courseDetails);

      coursesList.appendChild(listItem);
  });
}
displayCourses();
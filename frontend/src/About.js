import React from "react";

function About() {
  return (
    <>
      <h3>This is our Todo app version 2</h3>
      <p>
        Version Two boasts a meticulously designed responsive navbar, leveraging
        cutting-edge CSS techniques for optimal display across various devices.
        The layout dynamically adapts to screen sizes, providing an unparalleled
        user experience.
      </p>
      <p>
        Utilized the useContext hook in React to facilitate state management,
        ensuring seamless data flow within the application. The backend logic is
        powered by Node.js and Express.js, employing robust RESTful APIs for
        efficient communication between the client and server. MongoDB, a
        document-based database, serves as the cornerstone of the data storage
        infrastructure, offering scalability and flexibility.
      </p>
      <p>
        Furthermore, Version Two introduces advanced user interaction features,
        including a delete button for task removal and a detailed view button
        for comprehensive task insights. These functionalities enhance user
        productivity and streamline task management workflows.
      </p>
    </>
  );
}

export default About;

import React from "react";

function Contact() {
  return (
    <section id="Contact" className="Contact">
      <h2 className="title">Contact Me</h2>

      <div className="contact-box">

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:kinjal.v1710@gmail.com">
            kinjal.v1710@gmail.com
            
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/kinjalv17" target="_blank">
            "https://github.com/kinjalv17"
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/kinjal-verma-59a271342?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
          "https://www.linkedin.com/in/kinjal-verma-59a271342?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"
            
          </a>
        </p>

      </div>
    </section>
  );
}

export default Contact;
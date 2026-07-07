import React from "react";
import pythonImg from "../assets/images/WhatsApp Image 2026-07-07 at 6.06.06 PM.jpeg";
import webImg from "../assets/images/WhatsApp Image 2026-07-07 at 6.00.43 PM.jpeg";
import aiImg from "../assets/images/WhatsApp Image 2026-07-07 at 6.06.06 PM (1).jpeg";

function Certificate() {
  const certificates = [
    {
      name: "Python Certificate",
      img: pythonImg,
    },
    {
      name: "Sipher Web Academy Certificate",
      img: webImg,
    },
    {
      name: "AI for Business Certificate",
      img: aiImg,
    },
  ];

  return (
    <section id="certificates">
      <h2 className="title">Certificates</h2>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <a
              href={certificate.img}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={certificate.img}
                alt={certificate.name}
                className="cert-image"
              />
            </a>

            <h3>{certificate.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;
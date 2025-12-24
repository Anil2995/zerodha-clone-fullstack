import React from "react";

function Team() {
  const leader = {
    name: "Siddem Anil Kumar",
    role: "Founder & CEO",
    image: "media/images/founder.jpg",
    bio: "Siddem Anil Kumar founded his venture with a clear mission: to build scalable, user-focused digital products that solve real-world problems. With a strong foundation in frontend and full-stack development, he brings a hands-on approach to leadership—combining technical depth with product thinking.",
    details: "His experience spans designing responsive interfaces, building robust backend systems, and delivering end-to-end web applications using modern technologies. Siddem believes in simplicity, continuous improvement, and execution-driven innovation.",
    hobby: "Building impactful technology is his driving force.",
    socials: {
      github: "https://github.com/Anil2995",
      instagram: "https://www.instagram.com/anil09_29/",
      email: "mailto:siddemanilkumar@gmail.com"
    }
  };

  return (
    <section className="py-5" style={{ background: '#fff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '400',
            color: '#424242',
            marginBottom: '10px'
          }}>
            People
          </h2>
        </div>

        {/* Leader Card */}
        <div className="row g-4 align-items-start">
          {/* Profile Image & Social Links */}
          <div className="col-md-4 text-center text-md-start">
            <img
              src={leader.image}
              alt={leader.name}
              style={{
                width: '100%',
                maxWidth: '280px',
                height: 'auto',
                borderRadius: '4px',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />

            {/* Name and Role below image */}
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#212121',
              marginTop: '16px',
              marginBottom: '4px'
            }}>
              {leader.name}
            </h5>
            <p style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '16px'
            }}>
              {leader.role}
            </p>

            {/* Social Icons below image */}
            <div className="d-flex gap-3" style={{ justifyContent: 'flex-start' }}>
              <a
                href={leader.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="fab fa-github" style={{ fontSize: '1.1rem' }}></i>
              </a>
              <a
                href={leader.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E1306C',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="fab fa-instagram" style={{ fontSize: '1.1rem' }}></i>
              </a>
              <a
                href={leader.socials.email}
                title="Email"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#387ED1',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="fas fa-envelope" style={{ fontSize: '1rem' }}></i>
              </a>
            </div>
          </div>

          {/* Bio Content */}
          <div className="col-md-8">
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '12px'
            }}>
              {leader.bio}
            </p>

            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '16px'
            }}>
              {leader.details}
            </p>

            {/* Hobby with emoji */}
            <p style={{
              fontSize: '0.95rem',
              color: '#444',
              marginBottom: '0'
            }}>
              <span style={{ marginRight: '8px' }}>🚀</span>
              {leader.hobby}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
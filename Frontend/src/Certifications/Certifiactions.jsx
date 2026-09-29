import "./Certifications.css";


const certificates = [
  {
    title: "Alpha: DSA with Java",
    img: "certificates/Sneha(DSA).jpg",
    alt: "Alpha DSA with Java certificate from Apna College",
    text: "This course built my foundation in data structures and algorithms using Java. I learnt to work with arrays, strings, recursion, linked lists, stacks, queues, trees, graphs and dynamic programming, along with sorting, searching and backtracking techniques. More importantly, it taught me how to analyse time and space complexity and break a problem down into a clean, efficient solution, which I have since practised regularly on coding platforms.",
  },
  {
    title: "Delta: Full Stack Web Development (MERN)",
    img: "/certificates/Web Dev.png",
    alt: "Delta Full Stack Web Development certificate from Apna College",
    text: "This course covered the complete MERN stack. I learnt HTML, CSS and JavaScript fundamentals, then built dynamic interfaces with React.js. On the backend, I learnt to create servers and REST APIs with Node.js and Express.js, and to store and query data using MongoDB. It taught me how the frontend, backend and database connect to form a complete web application, and I applied this in my own full-stack projects.",
  },
];

export default function Certifications() {
  return (
    <section className="cert-section">
      <div className="cert-container">
        <h2 className="cert-heading">Certifications</h2>

        {certificates.map((c) => (
          <div className="cert-row" key={c.title}>
            <div className="cert-image-wrapper">
              <img src={c.img} alt={c.alt} className="cert-image" />
            </div>

            <div className="cert-content">
              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-text">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}







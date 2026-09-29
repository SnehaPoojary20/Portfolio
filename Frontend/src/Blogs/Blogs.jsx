import "./Blogs.css";

const posts = [
  {
    title: "Two Pointers Explained: The Proof Nobody Shows You",
    img: "/blogs/img3.png",
    url: "https://dsamadesimple.hashnode.dev/two-pointers-explained-the-proof-nobody-shows-you",
  },
  {
    title: "Sliding Window Algorithm Explained Visually",
    img: "/blogs/img2.png",
    url: "https://dsamadesimple.hashnode.dev/sliding-window-algorithm?utm_source=hashnode&utm_medium=feed",
  },
  {
    title: "From Confused to Confident in DSA",
    img: "/blogs/img4.png",
    url: "https://dsamadesimple.hashnode.dev/from-confused-to-confident-in-dsa",
  },
  {
    title: "How Python Manages Memory: Stack vs Heap Explained",
    img: "/blogs/img1.png",
    url: "https://pythonmemory.hashnode.dev/how-python-manages-memory-stack-vs-heap-explained",
  },
];

export default function Blogs() {
  return (
    <section className="blogs-section">
      <div className="blogs-container">
        <h2 className="blogs-heading">Blogs</h2>

        <p className="blogs-intro">
          I write about data structures and algorithms, breaking down
          patterns like two pointers and sliding window with visual, intuitive
          explanations rather than just code. I also write about Python
          internals, covering how the language actually runs code and manages
          memory under the hood, aiming to turn "it just works" into "I know
          why it works."
        </p>

        <div className="blogs-grid">
          {posts.map((post) => (
            <a
              key={post.title}
              className="blog-card"
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={post.img} alt={post.title} className="blog-card-img" />
              <h3 className="blog-card-title">{post.title}</h3>
            </a>
          ))}
        </div>

        <div className="blogs-cta">
          <p className="blogs-cta-text">
            Hungry for more? <span className="blogs-cta-highlight">Dive into the full archive</span> ✨
          </p>
          <a
            className="blogs-cta-link"
            href="https://hashnode.com/@snehapoojary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more on Hashnode ↗
          </a>
        </div>
      </div>
    </section>
  );
}

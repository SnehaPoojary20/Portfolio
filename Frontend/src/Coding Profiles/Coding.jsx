import "./Coding.css";

const profiles = [
  {
    label: "LeetCode:",
    url: "https://leetcode.com/u/SnehaPoojary__/",
  },
  {
    label: "HackerRank:",
    url: "https://www.hackerrank.com/profile/snehapoojary2004",
  },
  {
    label: "GeeksforGeeks:",
    url: "https://www.geeksforgeeks.org/profile/snehapoojary",
  },
];

export default function CodingPlatforms() {
  return (
    <section className="cp-section">
      <div className="cp-container">
        <h2 className="cp-heading">Coding Platforms</h2>

        <p className="cp-paragraph">
          I have practised a wide range of data structures and algorithms
          problems, with <strong><em>500+ problems solved overall</em></strong>.
          My practice covers arrays, strings, sorting, two pointers, stacks,
          matrices and simulation at the fundamental level, along with hash
          tables, binary search, greedy techniques, math, trees, binary trees and
          depth-first search. I have also worked through advanced topics such as
          dynamic programming, divide and conquer, backtracking, monotonic
          stacks, tries, union-find, rolling hash and quickselect, plus a good
          number of database and SQL problems.
        </p>

        <p className="cp-row">
          <span className="cp-label">Programming Languages:</span> Java, SQL
        </p>

        {profiles.map((p) => (
          <p className="cp-row" key={p.label}>
            <span className="cp-label">{p.label}</span>{" "}
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              {p.url}
            </a>
          </p>
        ))}
      </div>
    </section>
  );
}
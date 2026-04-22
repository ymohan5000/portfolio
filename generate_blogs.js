const fs = require('fs');

const topics = [
  { id: 1, title: 'What is HTML?', cat: 'HTML' },
  { id: 2, title: 'What is CSS?', cat: 'CSS' },
  { id: 3, title: 'What is JavaScript?', cat: 'JavaScript' },
  { id: 4, title: 'Introduction to React.js', cat: 'React' },
  { id: 5, title: 'What is a Website?', cat: 'Web' },
  { id: 6, title: 'Frontend vs Backend', cat: 'Web' },
  { id: 7, title: 'What is C Programming?', cat: 'Programming' },
  { id: 8, title: 'Variables in Programming', cat: 'Programming' },
  { id: 9, title: 'Responsive Web Design', cat: 'CSS' },
  { id: 10, title: 'What is Git & GitHub?', cat: 'Tools' },
  { id: 11, title: 'What is Node.js?', cat: 'Backend' },
  { id: 12, title: 'What is MongoDB?', cat: 'Backend' },
  { id: 13, title: 'What is an API?', cat: 'Backend' },
  { id: 14, title: 'What is JSON?', cat: 'Web' },
  { id: 15, title: 'How the Internet Works', cat: 'Web' },
  { id: 16, title: 'What is Bootstrap?', cat: 'CSS' },
  { id: 17, title: 'What is Tailwind CSS?', cat: 'CSS' },
  { id: 18, title: 'What is Next.js?', cat: 'React' },
  { id: 19, title: 'What is a Database?', cat: 'Backend' },
  { id: 20, title: 'SQL vs NoSQL', cat: 'Backend' },
  { id: 21, title: 'React Components', cat: 'React' },
  { id: 22, title: 'React Props & State', cat: 'React' },
  { id: 23, title: 'React Hooks - useState', cat: 'React' },
  { id: 24, title: 'React Hooks - useEffect', cat: 'React' },
  { id: 25, title: 'React Router', cat: 'React' },
  { id: 26, title: 'What is Web Hosting?', cat: 'Web' },
  { id: 27, title: 'What is SEO?', cat: 'Web' },
  { id: 28, title: 'Web Security Basics', cat: 'Web' },
  { id: 29, title: 'Authentication in Web Apps', cat: 'Backend' },
  { id: 30, title: 'Deploy Your Website', cat: 'Tools' }
];

let jsContent = `function getBlogContent(id) {
  var c = {
`;

topics.forEach((t) => {
  jsContent += `    ${t.id}: \`<h2>${t.title}</h2>
<p>Welcome to the comprehensive guide on <strong>${t.title}</strong>. This tutorial is designed to take you from a beginner to an advanced level.</p>
<div class="blog-info-box">
  <p><strong>💡 Key Takeaway:</strong> Mastering ${t.title} is crucial for any modern web developer.</p>
</div>
<h3>1. Introduction to ${t.title}</h3>
<p>${t.title} plays a pivotal role in the ${t.cat} ecosystem. Whether you are building simple web pages or complex web applications, understanding this concept deeply will elevate your skills.</p>
<p>Many developers start by learning the basics, but the real power comes when you understand the underlying architecture and best practices.</p>

<h3>2. Core Concepts & Architecture</h3>
<ul>
  <li><strong>Fundamental Principles:</strong> How ${t.title} fits into the broader picture.</li>
  <li><strong>Performance:</strong> Optimizing ${t.title} for speed and efficiency.</li>
  <li><strong>Security:</strong> Keeping your implementation safe from common vulnerabilities.</li>
</ul>

<h3>3. Code Examples and Syntax</h3>
<p>Let's look at a practical example. Here is how you might typically structure your code when working with ${t.title}:</p>
<pre><code>// Example implementation for ${t.title}
function init${t.title.replace(/[^a-zA-Z]/g, '')}() {
  console.log("Initializing ${t.title}...");
  // Core logic goes here
  return true;
}

init${t.title.replace(/[^a-zA-Z]/g, '')}();
</code></pre>

<h3>4. Common Pitfalls and How to Avoid Them</h3>
<p>When working with ${t.title}, beginners often make mistakes that can lead to bugs or poor performance. Here are some things to watch out for:</p>
<ul>
  <li><strong>Overcomplicating the Logic:</strong> Keep it simple and modular.</li>
  <li><strong>Ignoring Best Practices:</strong> Always follow industry standards.</li>
  <li><strong>Lack of Testing:</strong> Ensure your code works under various conditions.</li>
</ul>

<h3>5. Advanced Techniques</h3>
<p>Once you master the basics of ${t.title}, you can explore advanced topics such as:</p>
<div class="blog-roadmap">
  <div class="blog-roadmap-item">
    <div class="blog-roadmap-num">1</div>
    <div class="blog-roadmap-text">Deep Dive<span>Understand the internals</span></div>
  </div>
  <div class="blog-roadmap-item">
    <div class="blog-roadmap-num">2</div>
    <div class="blog-roadmap-text">Optimization<span>Improve performance</span></div>
  </div>
  <div class="blog-roadmap-item">
    <div class="blog-roadmap-num">3</div>
    <div class="blog-roadmap-text">Architecture<span>Scale your apps</span></div>
  </div>
</div>

<h3>6. Conclusion & Next Steps</h3>
<p>Learning ${t.title} is an ongoing journey. Practice regularly, build projects, and stay updated with the latest trends in the ${t.cat} community.</p>
<p>Continue exploring the other tutorials in this series to build a complete mental model of modern web development!</p>
\`,
`;
});

jsContent += `  };
  return c[id] || '<p>Content coming soon...</p>';
}
`;

fs.writeFileSync('blog-content.js', jsContent);
console.log('blog-content.js generated successfully.');

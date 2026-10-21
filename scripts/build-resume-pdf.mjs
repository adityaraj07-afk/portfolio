import PDFDocument from 'pdfkit';
import { createWriteStream, mkdirSync } from 'node:fs';

mkdirSync('public/assets', { recursive: true });

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 45, right: 45 },
});

const out = createWriteStream('public/assets/Aditya_Raj_Resume.pdf');
doc.pipe(out);

const primary = '#111827';
const accent = '#b91c1c';
const muted = '#4b5563';

// Header
doc.fontSize(22).font('Helvetica-Bold').fillColor(primary).text('ADITYA RAJ', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(11).font('Helvetica').fillColor(accent).text('Full Stack Developer — Next.js', { align: 'center' });
doc.moveDown(0.3);

doc.fontSize(8.5).font('Helvetica').fillColor(muted).text(
  '+91 6201452298  •  adarshrajadityaraj@gmail.com  •  linkedin.com/in/aditya-raj-811b3433b  •  github.com/adityaraj07-afk  •  Patna, Bihar',
  { align: 'center' }
);
doc.moveDown(0.8);

function section(title) {
  doc.moveDown(0.4);
  doc.fontSize(10.5).font('Helvetica-Bold').fillColor(primary).text(title.toUpperCase());
  const y = doc.y;
  doc.strokeColor('#d1d5db').lineWidth(0.8).moveTo(45, y + 2).lineTo(550, y + 2).stroke();
  doc.moveDown(0.5);
}

// Professional Summary
section('Professional Summary');
doc.fontSize(9).font('Helvetica').fillColor('#1f2937').text(
  'B.Tech Computer Science student and full-stack developer working with Next.js, React, Node.js and PostgreSQL. Built Collivra, an AI-powered team-formation platform, and SkillPulse, a consent-based skilling-outcomes tracker deployed live on Vercel for SIH 2026, both using the Gemini API. Solid in DSA with C++ through regular LeetCode practice. Looking for opportunities to build and ship scalable web products.',
  { lineGap: 2 }
);

// Technical Skills
section('Technical Skills');
function skillRow(label, items) {
  doc.fontSize(8.8).font('Helvetica-Bold').fillColor(primary).text(label + ': ', { continued: true });
  doc.font('Helvetica').fillColor('#374151').text(items);
  doc.moveDown(0.2);
}
skillRow('Languages', 'JavaScript (ES6+), C++');
skillRow('Frontend', 'HTML, CSS, React.js, Tailwind CSS, Bootstrap');
skillRow('Backend', 'Next.js, SQL, MongoDB, Node.js, Express.js, PostgreSQL');
skillRow('DevOps', 'Git, GitHub, Vercel');
skillRow('Soft Skills', 'Problem Solving, Team Collaboration, Strong Communication, Ownership Mindset, Time Management');

// Key Projects
section('Key Projects');

// Collivra
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primary).text('Collivra — AI-Powered Team Formation Platform', { continued: true });
doc.font('Helvetica-Oblique').fillColor(muted).text(' | React, Node.js, PostgreSQL, Gemini API');
doc.moveDown(0.2);
doc.fontSize(8.5).font('Helvetica').fillColor('#1f2937').list([
  'Built a full-stack platform using weighted AI scoring to recommend optimal, skill-balanced teams for hackathons/projects, with an explainability layer showing why each team fits.',
  'Tech: React 18, Tailwind CSS, Node.js, Express.js, PostgreSQL, Google Gemini API.',
], { bulletRadius: 1.5, textIndent: 12, lineGap: 1.5 });
doc.moveDown(0.4);

// SkillPulse
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primary).text('SkillPulse — AI-powered skilling-outcomes tracker for SIH 2026', { continued: true });
doc.font('Helvetica-Oblique').fillColor(muted).text(' | Next.js, PostgreSQL, Gemini 2.5');
doc.moveDown(0.2);
doc.fontSize(8.5).font('Helvetica').fillColor('#1f2937').list([
  'Built a consent-based platform tracking post-training employment outcomes and skill gaps using AI-driven matching; deployed live prototype on Vercel.',
  'Tech: Next.js App Router, PostgreSQL, Google Gemini 2.5, Tailwind CSS.',
], { bulletRadius: 1.5, textIndent: 12, lineGap: 1.5 });
doc.moveDown(0.4);

// Education
section('Education');
const eduY = doc.y;
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primary).text('Maharshi Dayanand University');
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(muted).text('Rohtak, India', 450, eduY, { align: 'right' });
doc.fontSize(8.8).font('Helvetica').fillColor('#374151').text('B.Tech in Computer Science (CGPA: 8.5/10)');
doc.fontSize(8.5).font('Helvetica').fillColor(muted).text('2025 – 2029', 450, doc.y - 10, { align: 'right' });

// Technical Achievements
section('Technical Achievements');
doc.fontSize(8.5).font('Helvetica').fillColor('#1f2937').list([
  'Solving DSA problems on LeetCode covering arrays, trees, graphs, and dynamic programming in C++.',
  'Built and open-sourced a console-based music player in C++, published on GitHub.',
  'SIH 2026 Live Prototype: Built SkillPulse with Next.js, PostgreSQL, and Gemini 2.5, deployed on Vercel.',
], { bulletRadius: 1.5, textIndent: 12, lineGap: 2 });

doc.end();

out.on('finish', () => {
  console.log('PDF generated at public/assets/Aditya_Raj_Resume.pdf');
});

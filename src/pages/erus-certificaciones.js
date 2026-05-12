import React from "react";
import CaseStudyPage from "../components/CaseStudy";
import imgCover from "../assets/image/jpg/details/certificate.webp";
import imgS1    from "../assets/image/jpg/details/certificate-details.webp";
import imgS2    from "../assets/image/jpg/details/certificate-details2.webp";
import imgS3    from "../assets/image/jpg/details/certificate-details3.webp";

const data = {
  title: "Erus Certifications — Internal training platform",
  tags: ["Angular", "PHP", "E-learning", "Internal"],
  cover: imgCover,
  meta: { client: "Erus", year: "2020", role: "Front-End Lead", stack: "Angular · PHP · Video Conferencing" },
  problem: "Erus trained employees in person with no structured tracking. There was no mechanism to verify that employees completed training or to certify the skills they acquired.",
  solution: "We built an internal e-learning platform with restricted access for Erus employees. It includes video playback, internal video conferencing, certification exams, and a badge system for each completed training level.",
  highlights: [
    { title: "Training video library", desc: "Courses organized by area and level, with saved progress and required full viewing before unlocking the exam." },
    { title: "Internal video conferencing", desc: "Live training sessions integrated directly into the platform, no external tools needed." },
    { title: "Certification exams", desc: "After completing each module, employees take an exam. The badge is only awarded upon passing." },
    { title: "Badge system", desc: "Gamified learning: each completed training awards a badge visible on the employee's profile." },
  ],
  screenshots: [
    { img: imgS1, caption: "Course library — available modules by area" },
    { img: imgS2, caption: "Training view with video and progress tracking" },
    { img: imgS3, caption: "Badge system — certifications earned per employee" },
  ],
  result: "Erus formalized their internal training process with full traceability: they know exactly which employees completed each course, how many passed the exams, and which certifications each team member holds.",
  techStack: ["AngularJS", "PHP", "MySQL", "Bootstrap", "Video streaming"],
  myRole: "Led the front-end development team. Designed the role architecture (employee / admin), the full training flow, and the badge system.",
  bullets: ["Restricted access for Erus employees only", "Video + integrated video conferencing", "Validation exams per module", "Badge system per completed training", "Per-employee progress tracking"],
  liveUrl: null,
};

const ErusCertPage = () => <CaseStudyPage data={data} />;
export default ErusCertPage;

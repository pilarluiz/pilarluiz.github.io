// import { React, useState } from "react";
// import "../App.css";
// import "./ExperienceSection.css";
// import { motion } from "framer-motion";

// const experiences = [
//   {
//     id: 1,
//     title: "NVIDIA Internship",
//     details: "Worked on GPU architecture...",
//   },
//   {
//     id: 2,
//     title: "Meta Internship",
//     details: "Developed software for large-scale systems...",
//   },
//   {
//     id: 3,
//     title: "Robotics Work",
//     details: "Designed embedded systems for autonomous robots...",
//   },
// ];

// function ExperienceSection() {
//   const [expandedId, setExpandedId] = useState(null);

//   return (
//     <div className="flex flex-row gap-4 p-4 w-full max-w-6xl mx-auto">
//       {experiences.map((exp) => (
//         <motion.div
//           key={exp.id}
//           className="p-4 border rounded-lg cursor-pointer bg-gray-200 flex flex-col justify-center items-center"
//           layout
//           initial={{ borderRadius: "1rem", width: "20%" }}
//           animate={{
//             borderRadius: expandedId === exp.id ? "0.5rem" : "1rem",
//             width: expandedId === exp.id ? "60%" : "20%",
//           }}
//           transition={{ type: "spring", stiffness: 150, damping: 15 }}
//           onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
//         >
//           <h3 className="text-lg font-bold">{exp.title}</h3>
//           {expandedId === exp.id && (
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//               className="mt-2 text-center px-2"
//             >
//               {exp.details}
//             </motion.p>
//           )}
//         </motion.div>
//       ))}
//     </div>

//     // <div className="flex flex-col gap-4 p-4 w-full max-w-4xl mx-auto">
//     //   {experiences.map((exp) => (
//     //     <motion.div
//     //       key={exp.id}
//     //       className="p-4 border rounded-lg cursor-pointer bg-gray-200 flex items-center"
//     //       layout
//     //       initial={{ borderRadius: "1rem", width: "50%" }}
//     //       animate={{
//     //         borderRadius: expandedId === exp.id ? "0.5rem" : "1rem",
//     //         width: expandedId === exp.id ? "100%" : "50%",
//     //       }}
//     //       transition={{ type: "spring", stiffness: 150, damping: 15 }}
//     //       onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
//     //     >
//     //       <h3 className="text-lg font-bold">{exp.title}</h3>
//     //       {expandedId === exp.id && (
//     //         <motion.p
//     //           initial={{ opacity: 0 }}
//     //           animate={{ opacity: 1 }}
//     //           transition={{ duration: 0.3 }}
//     //           className="ml-4"
//     //         >
//     //           {exp.details}
//     //         </motion.p>
//     //       )}
//     //     </motion.div>
//     //   ))}
//     // </div>

//     // <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
//     //   {experiences.map((exp) => (
//     //     <motion.div
//     //       key={exp.id}
//     //       className="p-4 border rounded-lg cursor-pointer bg-gray-200"
//     //       layout
//     //       initial={{ borderRadius: "1rem" }}
//     //       animate={{ borderRadius: expandedId === exp.id ? "0.5rem" : "1rem" }}
//     //       onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
//     //     >
//     //       <h3 className="text-lg font-bold">{exp.title}</h3>
//     //       {expandedId === exp.id && (
//     //         <motion.p
//     //           initial={{ opacity: 0 }}
//     //           animate={{ opacity: 1 }}
//     //           transition={{ duration: 0.3 }}
//     //           className="mt-2"
//     //         >
//     //           {exp.details}
//     //         </motion.p>
//     //       )}
//     //     </motion.div>
//     //   ))}
//     // </div>
//   );

//   // return <div className="container">Experience Section</div>;
// }

// export default ExperienceSection;

import React, { useState } from "react";

function ExperienceSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: isHovered ? 200 : 100,
        // height: isHovered ? 200 : 100,
        backgroundColor: "lightblue",
        transition: "width 0.3s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Hover Me!
    </div>
  );
}

export default ExperienceSection;

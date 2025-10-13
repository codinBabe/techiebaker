"use client";

import { useState, useEffect } from "react";

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCircle1, setShowCircle1] = useState(false);
  const [showCircle2, setShowCircle2] = useState(false);
  const [showCircle3, setShowCircle3] = useState(false);
  const [showCircle4, setShowCircle4] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    if (hasVisitedBefore) {
      setIsLoading(false);
      return;
    }
    const timer1 = setTimeout(() => setShowCircle1(true), 500);
    const timer2 = setTimeout(() => setShowCircle2(true), 1000);
    const timer3 = setTimeout(() => setShowCircle3(true), 1500);
    const timer4 = setTimeout(() => setShowCircle4(true), 2000);
    const timer5 = setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("hasVisitedBefore", "true");
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return {
    isLoading,
    showCircle1,
    showCircle2,
    showCircle3,
    showCircle4,
  };
};

// export default function Loader() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [showCircle1, setShowCircle1] = useState(false);
//   const [showCircle2, setShowCircle2] = useState(false);
//   const [showCircle3, setShowCircle3] = useState(false);
//   const [showCircle4, setShowCircle4] = useState(false);
//   useEffect(() => {
//     const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

//     if (hasVisitedBefore) {
//       setIsLoading(false);
//       return;
//     }

//     const timer1 = setTimeout(() => setShowCircle1(true), 500);
//     const timer2 = setTimeout(() => setShowCircle2(true), 1000);
//     const timer3 = setTimeout(() => setShowCircle3(true), 1500);
//     const timer4 = setTimeout(() => setShowCircle4(true), 2000);
//     const timer5 = setTimeout(() => {
//       setIsLoading(false);
//       localStorage.setItem("hasVisitedBefore", "true");
//     }, 2500);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//       clearTimeout(timer4);
//       clearTimeout(timer5);
//     };
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen bg-white">
//       {isLoading && (
//         <motion.div
//           className="text-primary text-2xl font-bold"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {showCircle1 && "●"}
//           {showCircle2 && "●"}
//           {showCircle3 && "●"}
//           {showCircle4 && "●"}
//         </motion.div>
//       )}
//       {!isLoading && (
//         <motion.div
//           className="w-screen h-screen bg-primary"
//           initial={{ scale: 1 }}
//           animate={{ scale: 0 }}
//           transition={{ duration: 0.5 }}
//         />
//       )}
//     </div>
//   );
// }

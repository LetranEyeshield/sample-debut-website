import { motion } from "framer-motion";

export default function Header() {
  return (
    <div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start hidden + below
          animate={{ opacity: 1, y: 0 }} // Fade in + move up
          transition={{ duration: 1 }} // 1 second animation
          className="w-64 h-64 bg-blue-500 rounded-lg"
        >
          Hello, Animation!
        </motion.div>
      </div>
      <header id="header" className="flex items-center py-10 w-full mt-14">
        <h1 className="great-vibes text-5xl md:text-9xl text-center w-full">
          Rencriselle&apos;s{" "}
          <span className="dancing-script text-5xl md:text-7xl">18th</span>{" "}
          <span className="pinyon-script text-5xl md:text-8xl">Birthday</span>
        </h1>
      </header>
    </div>
  );
}

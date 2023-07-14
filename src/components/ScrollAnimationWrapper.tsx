import React, { FC } from "react";
import { motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
  className: string;
}

const ScrollAnimationWrapper: FC<Props> = ({
  children,
  className,
  ...props
}) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default ScrollAnimationWrapper;

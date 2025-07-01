"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

interface AnimatedButtonProps extends ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export default function AnimatedButton({
  children,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  );
}

import React from "react";
import { Button } from "./Button.jsx";

/* IconButton — square pill button for a single icon. Same interaction model
   as Button. Pass a Lucide (or any) icon node as children. */

export function IconButton({ variant = "secondary", size = "md", label, children, ...rest }) {
  const pad = { sm: "0.42rem", md: "0.6rem", lg: "0.8rem" }[size] || "0.6rem";
  return (
    <Button
      variant={variant}
      size={size}
      aria-label={label}
      style={{ padding: pad, ...(rest.style || {}) }}
      {...rest}
    >
      {children}
    </Button>
  );
}

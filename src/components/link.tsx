import { DataInteractive as HeadlessDataInteractive } from "@headlessui/react";
import { Link as RouterLink, type LinkProps } from "react-router-dom";
import React from "react";

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    return (
      <HeadlessDataInteractive>
        <RouterLink {...props} ref={ref} />
      </HeadlessDataInteractive>
    );
  }
);

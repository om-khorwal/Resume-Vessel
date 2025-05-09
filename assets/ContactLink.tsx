import React from "react";
import Link from "next/link";

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const ContactLink = ({ href, icon, label }: ContactLinkProps) => (
  <Link href={href} className="text-blue-950 flex items-center gap-1">
    {icon} {label}
  </Link>
);

export default ContactLink;

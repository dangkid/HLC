"use client";

import { GithubIcon, LinkedinIcon, TwitterIcon, EmailIcon } from "./Icons";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  username?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/dangkid",
    icon: <GithubIcon className="w-5 h-5" />,
    username: "@dangkid"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/olivermagallanes/",
    icon: <LinkedinIcon className="w-5 h-5" />,
    username: "Oliver Magallanes"
  },
  {
    name: "Twitter",
    url: "https://x.com/Dangeloheats",
    icon: <TwitterIcon className="w-5 h-5" />,
    username: "@Dangeloheats"
  },
  {
    name: "Email",
    url: "mailto:oliverdangelo.magallanes@gmail.com",
    icon: <EmailIcon className="w-5 h-5" />,
    username: "oliverdangelo.magallanes@gmail.com"
  },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-100 transition-all duration-300 hover:scale-110"
          aria-label={social.name}
        >
          <div className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
            {social.icon}
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {social.username || social.name}
          </div>
        </a>
      ))}
    </div>
  );
}

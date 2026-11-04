import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  fullColor?: boolean;
}

export function FacebookIcon({ className = 'w-5 h-5', size = 20, fullColor = true }: IconProps) {
  if (fullColor) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#1877F2" />
        <path d="M15.5 12.05H13.25V20H10.15V12.05H8.65V9.45H10.15V7.65C10.15 6.2 10.95 4.5 13.3 4.5H15.45V7.05H13.9C13.2 7.05 13.25 7.4 13.25 7.85V9.45H15.5L15.2 12.05H15.5Z" fill="white" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({ className = 'w-5 h-5', size = 20, fullColor = true }: IconProps) {
  if (fullColor) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
        <rect x="5" y="5" width="14" height="14" rx="4" stroke="white" strokeWidth="1.6" fill="none" />
        <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.6" fill="none" />
        <circle cx="16" cy="8" r="0.9" fill="white" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LinkedInIcon({ className = 'w-5 h-5', size = 20, fullColor = true }: IconProps) {
  if (fullColor) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#0A66C2" />
        <path d="M7.5 19H5V10H7.5V19ZM6.25 8.75C5.45 8.75 4.8 8.1 4.8 7.3C4.8 6.5 5.45 5.85 6.25 5.85C7.05 5.85 7.7 6.5 7.7 7.3C7.7 8.1 7.05 8.75 6.25 8.75ZM19 19H16.5V14.5C16.5 13.4 16.1 12.6 15 12.6C14.1 12.6 13.6 13.2 13.4 13.8V19H10.9V10H13.4V11.2C13.8 10.6 14.6 10 15.9 10C17.6 10 19 11.1 19 13.6V19Z" fill="white" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

/**
 * 100% Authentic, Complete WhatsApp Logo
 * Features the signature circular badge (#25D366) with speech bubble and phone handset.
 * Unified across all instances to match the bottom footer design.
 */
export function WhatsAppIcon({ className = 'w-5 h-5', size = 20, fullColor = true }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Official WhatsApp Green Badge */}
      <circle cx="12" cy="12" r="11" fill={fullColor ? '#25D366' : 'currentColor'} />
      {/* WhatsApp Speech Bubble and Handset Cutout */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.04 4.5C7.88 4.5 4.5 7.88 4.5 12.04C4.5 13.47 4.9 14.85 5.66 16.06L4.85 19.15L8.03 18.37C9.2 19.07 10.6 19.45 12.04 19.45C16.2 19.45 19.58 16.07 19.58 11.91C19.58 7.75 16.2 4.5 12.04 4.5ZM15.82 14.28C15.63 14.18 14.7 13.72 14.53 13.66C14.36 13.6 14.23 13.56 14.1 13.75C13.97 13.94 13.62 14.36 13.51 14.49C13.4 14.62 13.28 14.63 13.09 14.53C12.9 14.43 12.3 14.23 11.58 13.59C11.02 13.09 10.64 12.47 10.53 12.28C10.42 12.09 10.52 11.99 10.61 11.89C10.7 11.8 10.81 11.66 10.91 11.55C11.01 11.44 11.04 11.36 11.11 11.23C11.17 11.1 11.14 11 11.09 10.9C11.04 10.81 10.67 9.87 10.51 9.5C10.36 9.13 10.21 9.18 10.09 9.17C9.98 9.16 9.86 9.16 9.73 9.16C9.6 9.16 9.39 9.21 9.22 9.4C9.05 9.59 8.56 10.05 8.56 10.98C8.56 11.92 9.24 12.82 9.33 12.95C9.42 13.08 10.67 14.99 12.57 15.81C13.02 16.01 13.37 16.13 13.65 16.22C14.1 16.36 14.51 16.34 14.84 16.29C15.21 16.24 15.96 15.84 16.11 15.4C16.27 14.96 16.27 14.58 16.22 14.5C16.17 14.42 16.05 14.38 15.82 14.28Z"
        fill="white"
      />
    </svg>
  );
}

export function renderSocialIcon(id: string, className = 'w-5 h-5', fullColor = true) {
  switch (id) {
    case 'facebook':
      return <FacebookIcon className={className} fullColor={fullColor} />;
    case 'instagram':
      return <InstagramIcon className={className} fullColor={fullColor} />;
    case 'linkedin':
      return <LinkedInIcon className={className} fullColor={fullColor} />;
    case 'whatsapp':
      return <WhatsAppIcon className={className} fullColor={fullColor} />;
    default:
      return null;
  }
}

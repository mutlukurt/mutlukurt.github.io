import React from 'react'

const CodingIcon = ({ className = "w-8 h-8", color = "currentColor" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle for better visibility */}
      <circle 
        cx="12" 
        cy="12" 
        r="11" 
        fill="url(#codingGradient)" 
        fillOpacity="0.1"
      />
      
      {/* Code brackets */}
      <path 
        d="M8 6L2 12L8 18" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M16 6L22 12L16 18" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Central slash */}
      <path 
        d="M14 4L10 20" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="codingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default CodingIcon

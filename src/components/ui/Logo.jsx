import React from 'react';

export default function Logo({ className = "w-8 h-8", showText = false, showTagline = false }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-3">
        {/* Bamboo 'P' Icon */}
        <svg
          viewBox="0 0 100 120"
          className={`${className} text-bamboo fill-none`}
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Main vertical bamboo stalk */}
          {/* Top segment */}
          <path d="M48 25 L48 55" stroke="#6B8E23" strokeWidth="6" />
          {/* Bottom segment */}
          <path d="M48 58 L48 95" stroke="#6B8E23" strokeWidth="6" />

          {/* Joint Rings */}
          <path d="M44 25 L52 25" stroke="#A3B18A" strokeWidth="3" />
          <path d="M43 56 L53 56" stroke="#A3B18A" strokeWidth="4.5" />
          <path d="M44 95 L52 95" stroke="#A3B18A" strokeWidth="3" />

          {/* Loop of the 'P' */}
          <path
            d="M48 26 C75 26, 75 56, 48 56"
            stroke="#6B8E23"
            strokeWidth="5.5"
            fill="none"
          />

          {/* Bamboo leaves growing from the left of the middle joint */}
          {/* Upper leaf */}
          <path
            d="M43 56 C30 50, 24 38, 30 38 C32 38, 38 48, 43 56"
            fill="#6B8E23"
            stroke="none"
          />
          {/* Middle leaf */}
          {/* Lower leaf */}
          <path
            d="M43 56 C26 56, 18 53, 22 47 C24 45, 34 52, 43 56"
            fill="#6B8E23"
            stroke="none"
          />
          <path
            d="M43 56 C26 64, 20 68, 24 74 C26 76, 34 66, 43 56"
            fill="#6B8E23"
            stroke="none"
          />

          {/* Gold highlights on the bamboo joints to match the premium gold accent */}
          <circle cx="48" cy="56" r="1.5" fill="#D4AF37" stroke="none" />
        </svg>

        {showText && (
          <span className="font-heading font-bold text-2xl tracking-wider text-text-primary">
            PRIN<span className="text-gold">X</span>
          </span>
        )}
      </div>
      
      {showTagline && (
        <div className="flex flex-col items-center mt-3 w-full">
          <div className="flex items-center gap-2 w-full max-w-[200px]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-bamboo/40" />
            <span className="text-[7px] text-gold font-bold tracking-[0.2em]">P</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-bamboo/40" />
          </div>
          <p className="text-[8px] text-text-secondary font-medium tracking-[0.25em] mt-1.5 uppercase">
            Build Strong Systems That Grow
          </p>
        </div>
      )}
    </div>
  );
}

import React from 'react';

const OrangeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-full"
      >
        <defs>
          <pattern
            x="0"
            y="0"
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" stroke="rgba(255, 165, 0, 0.1)" />
          </pattern>
        </defs>
        <rect
          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
    </div>
  );
};

export default OrangeBackground;

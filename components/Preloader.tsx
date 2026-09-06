'use client';

import { useEffect } from 'react';

export default function Preloader() {
  useEffect(() => {
    // Hide loader on component mount (React hydration complete)
    const timer = setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.4s ease';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 400);
      }
    }, 300);

    // Apply background images for elements with data-background
    const applyBackgrounds = () => {
      if (typeof window !== 'undefined' && (window as any).$) {
        const $ = (window as any).$;
        $('.bg-img, section').each(function (this: HTMLElement) {
          const bg = $(this).attr('data-background');
          if (bg) {
            $(this).css('background-image', 'url(' + bg + ')');
          }
        });
      }
    };

    applyBackgrounds();
    const bgTimer = setTimeout(applyBackgrounds, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(bgTimer);
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <div id="loader">
        <div className="loading">
          <div></div>
        </div>
      </div>
      {/* Progress scroll totop */}
      <div className="progress-wrap cursor-pointer">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}

'use client';

import Navbar from './Navbar';

interface HeaderProps {
  isSinglePage?: boolean;
}

export default function Header({ isSinglePage = true }: HeaderProps) {
  return (
    <header className="header-navigation">
      <Navbar isSinglePage={isSinglePage} />
    </header>
  );
}


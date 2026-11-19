import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../types/portfolio';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEditor?: () => void;
}

const TOP_NAV_PAGES: { id: PageId; shortLabel: string; fullTitle: string }[] = [
  { id: 'about', shortLabel: 'About Me', fullTitle: 'About Me — Giới thiệu bản thân' },
  { id: 'du-an', shortLabel: 'Dự án', fullTitle: 'Dự án — 06 bài tập học phần' },
  { id: 'tong-ket', shortLabel: 'Tổng kết', fullTitle: 'Tổng kết học phần' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  const isNavItemActive = (itemId: PageId) => {
    if (itemId === 'du-an') {
      return currentPage === 'du-an' || currentPage.startsWith('bai-tap-');
    }
    return currentPage === itemId;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E8A598]/70 bg-[#FDFBF7]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#/about"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('about');
          }}
          className="font-display text-sm sm:text-lg font-bold tracking-tight text-[#3F2E3E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E4D45]"
        >
          Tạ Hiền Hương - NUAE
        </a>

        <nav
          aria-label="Điều hướng chính Portfolio"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6E566C]"
        >
          {TOP_NAV_PAGES.map((item) => {
            const isActive = isNavItemActive(item.id);
            return (
              <a
                key={item.id}
                href={`#/${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E4D45] ${
                  isActive
                    ? 'font-semibold text-[#3F2E3E]'
                    : 'hover:text-[#3F2E3E]'
                }`}
              >
                {item.shortLabel}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#9E4D45]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E8A598] bg-[#FFF0EE] text-[#3F2E3E] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E3E]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#E8A598]/60 bg-[#FDFBF7] px-4 py-4 md:hidden">
          <nav aria-label="Điều hướng di động" className="grid grid-cols-1 gap-1">
            {TOP_NAV_PAGES.map((item) => {
              const isActive = isNavItemActive(item.id);
              return (
                <a
                  key={item.id}
                  href={`#/${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-[#FFF0EE] font-semibold text-[#3F2E3E] border border-[#E8A598]'
                      : 'text-[#6E566C] hover:bg-[#FFF0EE]/70 hover:text-[#3F2E3E]'
                  }`}
                >
                  <span className="truncate">{item.fullTitle}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

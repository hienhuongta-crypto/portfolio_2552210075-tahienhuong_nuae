import React from 'react';
import { AboutProfile, PageId } from '../types/portfolio';

interface FooterProps {
  about: AboutProfile;
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ about }) => {
  return (
    <footer className="mt-16 border-t border-[#E8A598]/70 bg-[#FDFBF7]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-[#3F2E3E]">
            {about.fullName}
          </h2>
          <p className="text-sm leading-relaxed text-[#6E566C]">
            MSSV: 2552210075
            <br />
            K20B-SPAN-NUAE
            <br />
            Lớp INF2501_7 - Tối thứ 7
            <br />
            Học phần môn Nhập môn công nghệ số
          </p>
          <p className="text-sm leading-relaxed text-[#6E566C]">
            Liên hệ học thuật:{' '}
            <a
              href={`mailto:${about.email}`}
              className="font-medium text-[#9E4D45] underline decoration-[#E8A598] underline-offset-4 hover:text-[#3F2E3E]"
            >
              {about.email}
            </a>
            {' · '}
            <a
              href="tel:0868983180"
              className="font-medium tabular-nums text-[#9E4D45] underline decoration-[#E8A598] underline-offset-4 hover:text-[#3F2E3E]"
            >
              0868983180
            </a>
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#E8A598]/40 pt-6 text-xs text-[#6E566C] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {about.fullName} — Hồ sơ học tập cá nhân.
          </p>
        </div>
      </div>
    </footer>
  );
};

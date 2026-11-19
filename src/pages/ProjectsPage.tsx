import React from 'react';
import { ArrowRight, Home } from 'lucide-react';
import { AssignmentItem, PageId } from '../types/portfolio';
import { PageFooterNav, SafeImage } from '../components/MediaWidgets';

interface ProjectsPageProps {
  assignments: AssignmentItem[];
  onNavigate: (page: PageId) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  assignments,
  onNavigate,
}) => {

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-6">
        <button
          type="button"
          onClick={() => onNavigate('about')}
          className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#9E4D45] hover:text-[#3F2E3E]"
        >
          <Home className="h-4 w-4" />
          Về trang chủ (About Me)
        </button>
      </div>

      <section className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold text-[#9E4D45]">
          Trang 2 · Tổng quan sản phẩm học tập
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-[#3F2E3E] sm:text-4xl">
          06 Bài tập thực hành học phần Nhập môn Công nghệ số
        </h1>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8A598] bg-[#FDFBF7] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div>
              <div
                onClick={() => onNavigate(item.id)}
                className="cursor-pointer aspect-[4/3] w-full overflow-hidden border-b border-[#E8A598]/50"
              >
                <SafeImage
                  src={item.coverImage}
                  alt={item.coverAlt}
                  className="h-full w-full"
                />
              </div>

              <div className="space-y-2.5 p-6">
                <p className="text-xs font-medium text-[#9E4D45] tabular-nums">
                  Bài tập 0{item.number} · Chương 0{item.number}
                </p>
                <h2 className="font-display text-xl font-semibold leading-snug text-[#3F2E3E]">
                  {item.title}
                </h2>
                <p className="text-xs font-medium text-[#6E566C]">
                  {item.chapterLabel}
                </p>
              </div>
            </div>

            <div className="border-t border-[#E8A598]/40 px-6 py-4">
              <button
                type="button"
                onClick={() => onNavigate(item.id)}
                className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg border border-[#D4B44C] bg-[#FDE68A] px-4 py-2 text-sm font-semibold text-[#3F2E3E] transition-colors duration-150 hover:bg-[#FCD34D]"
              >
                Xem chi tiết Bài tập {item.number}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </section>

      <PageFooterNav
        currentPage="du-an"
        onNavigate={onNavigate}
        nextPageOverride={{ id: 'tong-ket', shortLabel: 'Tổng kết' }}
      />
    </div>
  );
};

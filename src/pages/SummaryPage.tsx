import React from 'react';
import { ArrowRight, Home } from 'lucide-react';
import { AssignmentItem, PageId, SummaryContent } from '../types/portfolio';
import { PageFooterNav } from '../components/MediaWidgets';

interface SummaryPageProps {
  summary: SummaryContent;
  assignments: AssignmentItem[];
  onNavigate: (page: PageId) => void;
  onEditSummary: () => void;
}

export const SummaryPage: React.FC<SummaryPageProps> = ({
  summary,
  assignments,
  onNavigate,
}) => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onNavigate('about')}
          className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#9E4D45] hover:text-[#3F2E3E]"
        >
          <Home className="h-4 w-4" />
          Về trang chủ (About Me)
        </button>
      </div>

      <header className="space-y-4">
        <p className="text-xs font-semibold text-[#9E4D45]">
          Trang 9 · Đúc kết hành trình học tập
        </p>
        <h1 className="font-display text-3xl font-bold leading-tight text-[#3F2E3E] sm:text-4xl">
          {summary.title}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#6E566C]">
          {summary.subtitle}
        </p>
      </header>

      <section className="mt-8 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-8 space-y-4">
        <h2 className="font-display text-2xl font-semibold text-[#3F2E3E]">
          1. Trải nghiệm và cảm nhận cá nhân về quá trình thực hiện Portfolio
        </h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-[#6E566C] whitespace-pre-line">
          {summary.overviewParagraph}
        </p>
      </section>

      <section className="mt-10 space-y-5">
        <div className="space-y-2">
          <h2 className="font-display text-2xl font-semibold text-[#3F2E3E]">
            2. Những kiến thức và kỹ năng quan trọng mà em đã tiếp thu được
          </h2>
          {summary.takeawaysIntro && (
            <p className="text-sm leading-relaxed text-[#6E566C]">
              {summary.takeawaysIntro}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {summary.keyTakeaways.map((item, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 space-y-2.5"
            >
              <span className="font-mono text-xs font-semibold tabular-nums text-[#9E4D45]">
                0{idx + 1}.
              </span>
              <h3 className="font-display text-lg font-semibold text-[#3F2E3E]">
                {item.heading}
              </h3>
              <p className="text-sm leading-relaxed text-[#6E566C]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-5">
        <h2 className="font-display text-2xl font-semibold text-[#3F2E3E]">
          3. Điểm tâm đắc nhất và những thách thức đã gặp phải
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-7 space-y-3">
            <h3 className="font-display text-xl font-semibold text-[#3F2E3E]">
              Điểm tâm đắc nhất
            </h3>
            <p className="text-sm leading-relaxed text-[#6E566C] whitespace-pre-line">
              {summary.favoriteHighlight || summary.futureCommitment}
            </p>
          </article>

          {summary.challengesFaced && (
            <article className="rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-7 space-y-3">
              <h3 className="font-display text-xl font-semibold text-[#3F2E3E]">
                Thách thức gặp phải
              </h3>
              <p className="text-sm leading-relaxed text-[#6E566C] whitespace-pre-line">
                {summary.challengesFaced}
              </p>
            </article>
          )}
        </div>
      </section>

      <section className="mt-12 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-2xl font-semibold text-[#3F2E3E]">
            Liên kết nhanh đến 06 bài tập đã hoàn thành
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('du-an')}
            className="text-xs font-semibold text-[#9E4D45] hover:underline"
          >
            Xem dạng thẻ Dự án
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {assignments.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="flex items-center justify-between gap-4 rounded-xl border border-[#E8A598] bg-[#FDFBF7] p-5 text-left transition-colors duration-150 hover:bg-[#FFF0EE]"
            >
              <div className="min-w-0 space-y-1">
                <p className="font-mono text-xs font-semibold tabular-nums text-[#9E4D45]">
                  Bài tập 0{item.number} · Chương 0{item.number}
                </p>
                <p className="font-display text-base font-semibold text-[#3F2E3E] truncate">
                  {item.title}
                </p>
                <p className="text-xs text-[#6E566C] truncate">{item.chapterLabel}</p>
              </div>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D4B44C] bg-[#FDE68A] text-[#3F2E3E]">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </section>

      <PageFooterNav currentPage="tong-ket" onNavigate={onNavigate} />
    </div>
  );
};

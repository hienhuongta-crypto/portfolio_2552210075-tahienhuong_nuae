import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Edit3,
  ExternalLink,
  GalleryHorizontalEnd,
  ImagePlus,
  LayoutGrid,
  Maximize2,
  Trash2,
  Upload,
} from 'lucide-react';
import { AssignmentItem, PageId } from '../types/portfolio';
import {
  LightboxState,
  PageFooterNav,
  SafeImage,
  YouTubeEmbed,
} from '../components/MediaWidgets';
import { isSafeHttpUrl } from '../utils/media';

interface AssignmentDetailPageProps {
  assignment: AssignmentItem;
  onNavigate: (page: PageId) => void;
  onZoomImage: (img: LightboxState) => void;
  onEditAssignment: (id: AssignmentItem['id']) => void;
  onUpdateAssignment: (updated: AssignmentItem) => void;
}

export const AssignmentDetailPage: React.FC<AssignmentDetailPageProps> = ({
  assignment,
  onNavigate,
  onZoomImage,
  onEditAssignment,
  onUpdateAssignment,
}) => {
  const hasPopulatedGallery = assignment.gallery.some((g) => Boolean(g.src));
  const [galleryMode, setGalleryMode] = useState<'swipe' | 'grid'>(() =>
    hasPopulatedGallery ? 'swipe' : 'grid'
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setGalleryMode(
      assignment.gallery.some((g) => Boolean(g.src)) ? 'swipe' : 'grid'
    );
    setActiveSlide(0);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0 });
    }
  }, [assignment.id]);

  useEffect(() => {
    if (activeSlide >= assignment.gallery.length && assignment.gallery.length > 0) {
      setActiveSlide(assignment.gallery.length - 1);
    }
  }, [activeSlide, assignment.gallery.length]);

  useEffect(() => {
    if (galleryMode !== 'swipe') return;
    const thumb = thumbRefs.current[activeSlide];
    if (thumb) {
      thumb.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeSlide, galleryMode]);

  const scrollToSlide = (targetIdx: number) => {
    const clamped = Math.max(0, Math.min(targetIdx, assignment.gallery.length - 1));
    setActiveSlide(clamped);
    const el = trackRef.current;
    if (el) {
      el.scrollTo({
        left: clamped * el.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleTrackScroll = () => {
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    const nextIdx = Math.round(el.scrollLeft / el.clientWidth);
    if (nextIdx !== activeSlide && nextIdx >= 0 && nextIdx < assignment.gallery.length) {
      setActiveSlide(nextIdx);
    }
  };

  const openGalleryZoom = (itemSrc: string, itemAlt: string, itemCaption?: string) => {
    const populated = assignment.gallery
      .filter((g) => Boolean(g.src))
      .map((g) => ({ src: g.src, alt: g.alt, caption: g.caption }));
    const idx = populated.findIndex((g) => g.src === itemSrc && g.caption === itemCaption);
    onZoomImage({
      src: itemSrc,
      alt: itemAlt,
      caption: itemCaption,
      items: populated.length > 0 ? populated : undefined,
      currentIndex: idx >= 0 ? idx : 0,
    });
  };

  const handleUploadSlotImage = (
    slotId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) return;
      onUpdateAssignment({
        ...assignment,
        gallery: assignment.gallery.map((item) =>
          item.id === slotId ? { ...item, src: result } : item
        ),
      });
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleRemoveImageSlot = (slotId: string) => {
    onUpdateAssignment({
      ...assignment,
      gallery: assignment.gallery.filter((item) => item.id !== slotId),
    });
  };

  const handleUploadSectionImage = (
    sectionId: string,
    imgId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) return;
      onUpdateAssignment({
        ...assignment,
        sections: assignment.sections.map((sec) =>
          sec.id === sectionId && sec.images
            ? {
                ...sec,
                images: sec.images.map((img) =>
                  img.id === imgId ? { ...img, src: result } : img
                ),
              }
            : sec
        ),
      });
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleClearSectionImage = (sectionId: string, imgId: string) => {
    onUpdateAssignment({
      ...assignment,
      sections: assignment.sections.map((sec) =>
        sec.id === sectionId && sec.images
          ? {
              ...sec,
              images: sec.images.map((img) =>
                img.id === imgId ? { ...img, src: '' } : img
              ),
            }
          : sec
      ),
    });
  };

  const openSectionImageZoom = (
    images: { src: string; alt: string; caption: string }[],
    targetSrc: string,
    targetAlt: string,
    targetCaption?: string
  ) => {
    const populated = images
      .filter((g) => Boolean(g.src))
      .map((g) => ({ src: g.src, alt: g.alt, caption: g.caption }));
    const idx = populated.findIndex(
      (g) => g.src === targetSrc && g.caption === targetCaption
    );
    onZoomImage({
      src: targetSrc,
      alt: targetAlt,
      caption: targetCaption,
      items: populated.length > 0 ? populated : undefined,
      currentIndex: idx >= 0 ? idx : 0,
    });
  };

  const activeItem = assignment.gallery[activeSlide] || assignment.gallery[0];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onNavigate('du-an')}
          className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#9E4D45] hover:text-[#3F2E3E]"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại danh sách 06 Dự án
        </button>
      </div>

      <header className="space-y-4">
        <p className="text-xs font-semibold text-[#9E4D45] tabular-nums">
          Trang {assignment.number + 2} · Bài tập {assignment.number} · {assignment.chapterLabel}
        </p>
        <h1 className="font-display text-3xl font-bold leading-tight text-[#3F2E3E] sm:text-4xl">
          {assignment.title}
        </h1>
        {assignment.subtitle && assignment.id !== 'bai-tap-6' && (
          <p className="max-w-3xl text-base leading-relaxed text-[#6E566C]">
            {assignment.subtitle}
          </p>
        )}
      </header>

      <div className="mt-8 overflow-hidden rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-3">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
          <SafeImage
            src={assignment.coverImage}
            alt={assignment.coverAlt}
            className="h-full w-full"
            onZoom={() =>
              onZoomImage({
                src: assignment.coverImage,
                alt: assignment.coverAlt,
                caption: `Bài tập ${assignment.number}: ${assignment.title}`,
              })
            }
          />
        </div>
      </div>

      {assignment.id === 'bai-tap-2' && (
        <div className="mt-8 rounded-r-2xl border-l-4 border-[#9E4D45] bg-[#FDFBF7] px-5 py-4 sm:px-6 sm:py-5 shadow-xs">
          <h2 className="font-display text-xl sm:text-[22px] font-bold leading-snug text-[#3F2E3E]">
            <span className="text-[#9E4D45]">Chủ đề:</span> Ứng dụng công nghệ thông tin trong dạy học âm nhạc cho học sinh phổ thông
          </h2>
        </div>
      )}

      {assignment.gallery.length > 0 && assignment.id !== 'bai-tap-4' && (
        <div className="mt-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#9E4D45]">
              <span>
                Hình ảnh minh họa theo thứ tự ({assignment.gallery.length} bước)
              </span>
            </div>

            <div
              role="group"
              aria-label="Chế độ xem hình ảnh"
              className="inline-flex rounded-xl border border-[#E8A598] bg-[#FDFBF7] p-1"
            >
              <button
                type="button"
                onClick={() => setGalleryMode('swipe')}
                className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  galleryMode === 'swipe'
                    ? 'bg-[#FDE68A] text-[#3F2E3E] shadow-xs'
                    : 'text-[#6E566C] hover:text-[#3F2E3E]'
                }`}
              >
                <GalleryHorizontalEnd className="h-3.5 w-3.5" />
                Vuốt ngang xem rõ
              </button>
              <button
                type="button"
                onClick={() => setGalleryMode('grid')}
                className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  galleryMode === 'grid'
                    ? 'bg-[#FDE68A] text-[#3F2E3E] shadow-xs'
                    : 'text-[#6E566C] hover:text-[#3F2E3E]'
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                Xem dạng lưới
              </button>
            </div>
          </div>

          {galleryMode === 'swipe' && activeItem ? (
            <div className="space-y-4 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-3 sm:p-5">
              <div className="relative">
                <div
                  ref={trackRef}
                  tabIndex={0}
                  onScroll={handleTrackScroll}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowLeft') {
                      e.preventDefault();
                      scrollToSlide(activeSlide - 1);
                    } else if (e.key === 'ArrowRight') {
                      e.preventDefault();
                      scrollToSlide(activeSlide + 1);
                    }
                  }}
                  aria-label="Danh sách ảnh vuốt ngang từ trái qua phải"
                  className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-xl bg-[#FFF0EE]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598]"
                >
                  {assignment.gallery.map((img, idx) => (
                    <div
                      key={img.id}
                      className="w-full shrink-0 snap-center"
                    >
                      {img.src ? (
                        <div className="flex h-[280px] w-full items-center justify-center p-2 sm:h-[440px] lg:h-[520px]">
                          <img
                            src={img.src}
                            alt={img.alt}
                            referrerPolicy="no-referrer"
                            className="h-full w-full rounded-lg object-contain select-none"
                          />
                        </div>
                      ) : (
                        <label className="flex h-[280px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#E8A598] bg-[#FFF0EE]/70 p-6 text-center transition-colors hover:bg-[#FFF0EE] sm:h-[440px] lg:h-[520px]">
                          <ImagePlus className="h-9 w-9 text-[#9E4D45]" aria-hidden="true" />
                          <span className="text-sm font-semibold text-[#3F2E3E]">
                            Bước {idx + 1}: Chọn ảnh chụp từ máy để chèn vào khung này
                          </span>
                          <span className="text-xs text-[#6E566C]">
                            Hỗ trợ PNG, JPG, WEBP từ bài làm BT NMCNS.docx
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={(e) => handleUploadSlotImage(img.id, e)}
                          />
                        </label>
                      )}
                    </div>
                  ))}
                </div>

                {assignment.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => scrollToSlide(activeSlide - 1)}
                      disabled={activeSlide === 0}
                      aria-label="Ảnh trước"
                      className="absolute top-1/2 left-2.5 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E8A598] bg-[#FDFBF7]/95 text-[#3F2E3E] shadow-md transition-opacity hover:bg-[#FDE68A] disabled:pointer-events-none disabled:opacity-35 sm:left-4 sm:h-11 sm:w-11"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToSlide(activeSlide + 1)}
                      disabled={activeSlide === assignment.gallery.length - 1}
                      aria-label="Ảnh tiếp theo"
                      className="absolute top-1/2 right-2.5 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E8A598] bg-[#FDFBF7]/95 text-[#3F2E3E] shadow-md transition-opacity hover:bg-[#FDE68A] disabled:pointer-events-none disabled:opacity-35 sm:right-4 sm:h-11 sm:w-11"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-3 border-t border-[#E8A598]/50 pt-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-md border border-[#E8A598] bg-[#FFF0EE] px-2 py-0.5 font-mono text-xs font-semibold tabular-nums text-[#9E4D45]">
                      {String(activeSlide + 1).padStart(2, '0')} /{' '}
                      {String(assignment.gallery.length).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] text-[#6E566C]">
                      Vuốt sang trái/phải hoặc bấm mũi tên để chuyển ảnh tiếp theo
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-snug text-[#3F2E3E]">
                    {activeItem.caption}
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2">
                  {activeItem.src && (
                    <button
                      type="button"
                      onClick={() =>
                        openGalleryZoom(
                          activeItem.src,
                          activeItem.alt,
                          activeItem.caption
                        )
                      }
                      className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#E8A598] bg-[#FDFBF7] px-3 py-1.5 text-xs font-semibold text-[#3F2E3E] hover:bg-[#FDE68A]"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Phóng to</span>
                    </button>
                  )}
                </div>
              </div>

              {assignment.gallery.length > 1 && (
                <div
                  aria-label="Thanh chọn nhanh theo thứ tự từ trái qua phải"
                  className="flex gap-2 overflow-x-auto border-t border-[#E8A598]/40 pt-3 pb-1"
                >
                  {assignment.gallery.map((thumb, idx) => {
                    const isActive = idx === activeSlide;
                    return (
                      <button
                        key={thumb.id}
                        ref={(el) => {
                          thumbRefs.current[idx] = el;
                        }}
                        type="button"
                        onClick={() => scrollToSlide(idx)}
                        aria-label={`Chuyển đến ảnh ${idx + 1}: ${thumb.caption}`}
                        aria-current={isActive ? 'true' : undefined}
                        className={`group relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border transition-all ${
                          isActive
                            ? 'border-[#9E4D45] ring-2 ring-[#FDE68A]'
                            : 'border-[#E8A598]/60 opacity-75 hover:opacity-100'
                        }`}
                      >
                        {thumb.src ? (
                          <img
                            src={thumb.src}
                            alt={thumb.alt}
                            referrerPolicy="no-referrer"
                            className="h-full w-full bg-[#FFF0EE] object-contain"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-[#FFF0EE] text-[10px] font-medium text-[#6E566C]">
                            Trống
                          </div>
                        )}
                        <span
                          className={`absolute top-1 left-1 rounded px-1 py-0.5 font-mono text-[10px] font-bold tabular-nums leading-none ${
                            isActive
                              ? 'bg-[#9E4D45] text-[#FDFBF7]'
                              : 'bg-[#3F2E3E]/75 text-[#FDFBF7]'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {assignment.gallery.map((img) => (
                <div
                  key={img.id}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-3"
                >
                  {img.src ? (
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                      <SafeImage
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full"
                        imgClassName="object-contain"
                        onZoom={() =>
                          openGalleryZoom(img.src, img.alt, img.caption)
                        }
                      />
                    </div>
                  ) : (
                    <label className="flex aspect-[16/9] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#E8A598] bg-[#FFF0EE]/70 p-6 text-center transition-colors hover:bg-[#FFF0EE]">
                      <ImagePlus className="h-8 w-8 text-[#9E4D45]" aria-hidden="true" />
                      <span className="text-xs font-semibold text-[#3F2E3E]">
                        Chọn ảnh chụp từ máy để chèn vào khung này
                      </span>
                      <span className="text-[11px] text-[#6E566C]">
                        Hỗ trợ PNG, JPG, WEBP từ bài làm BT NMCNS.docx
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={(e) => handleUploadSlotImage(img.id, e)}
                      />
                    </label>
                  )}

                  <div className="mt-3 flex items-center justify-between gap-2 px-1">
                    <p className="text-xs font-medium text-[#6E566C] leading-snug">
                      {img.caption}
                    </p>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <label className="inline-flex min-h-[36px] cursor-pointer items-center gap-1 rounded-lg border border-[#E8A598] bg-[#FFF0EE] px-2.5 py-1 text-xs font-semibold text-[#3F2E3E] hover:bg-[#FDE68A]">
                        <Upload className="h-3.5 w-3.5" />
                        <span>{img.src ? 'Thay ảnh' : 'Tải ảnh'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={(e) => handleUploadSlotImage(img.id, e)}
                        />
                      </label>
                      {assignment.gallery.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveImageSlot(img.id)}
                          aria-label={`Xóa khung ${img.caption}`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#9E4D45] hover:bg-[#FFF0EE]"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {assignment.sections.length > 0 && assignment.id === 'bai-tap-4' && (
        <article className="mt-10 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-10 space-y-6">
          <div className="border-b border-[#E8A598]/60 pb-5">
            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4D45]">
                Bản kế hoạch làm việc nhóm
              </p>
              <h2 className="font-display text-2xl sm:text-[26px] font-bold leading-snug text-[#3F2E3E]">
                Kế hoạch cuộc họp lên ý tưởng cho Workshop âm nhạc - Chạm vào giai điệu
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {assignment.sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-2.5">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#3F2E3E]">
                  {section.heading}
                </h3>

                {section.body && (
                  <p className="text-[15px] leading-relaxed text-[#4F3B4E] whitespace-pre-line">
                    {section.body}
                  </p>
                )}

                {section.table && section.table.rows.length > 0 && (
                  <div className="pt-1">
                    <table className="w-full table-fixed border-separate border-spacing-0 text-left text-[13px] sm:text-sm leading-relaxed">
                      <colgroup>
                        <col className="w-[32%] sm:w-[24%]" />
                        <col className="w-[68%] sm:w-[76%]" />
                      </colgroup>
                      <thead>
                        <tr className="text-xs sm:text-[13px] font-semibold text-[#3F2E3E]">
                          {section.table.headers.map((header, hIdx) => (
                            <th
                              key={header}
                              scope="col"
                              className={`border-t border-b border-r border-[#E8A598] bg-[#FFF0EE] px-4 py-2.5 align-middle ${
                                hIdx === 0 ? 'border-l rounded-tl-xl' : ''
                              } ${
                                hIdx === section.table!.headers.length - 1
                                  ? 'rounded-tr-xl'
                                  : ''
                              }`}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rIdx) => {
                          const isLast =
                            rIdx === section.table!.rows.length - 1;
                          return (
                            <tr
                              key={row.id}
                              className="odd:bg-[#FDFBF7] even:bg-[#FFF0EE]/35 transition-colors hover:bg-[#FFF0EE]/65"
                            >
                              {row.cells.map((cell, cIdx) => (
                                <td
                                  key={`${row.id}-${cIdx}`}
                                  className={`border-b border-r border-[#E8A598]/70 px-4 py-2.5 align-top break-words ${
                                    cIdx === 0
                                      ? `border-l font-semibold text-[#9E4D45] tabular-nums ${
                                          isLast ? 'rounded-bl-xl' : ''
                                        }`
                                      : 'text-[#3F2E3E]'
                                  } ${
                                    cIdx === row.cells.length - 1 && isLast
                                      ? 'rounded-br-xl'
                                      : ''
                                  }`}
                                >
                                  <span>{cell}</span>
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>
      )}

      {assignment.id === 'bai-tap-4' && assignment.gallery.length > 0 && (
        <section className="mt-8 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-10 space-y-6">
          <div className="space-y-2 border-b border-[#E8A598]/60 pb-5">
            <h2 className="font-display text-2xl sm:text-[26px] font-bold leading-snug text-[#3F2E3E]">
              Biên bản cuộc họp – Triển khai kế hoạch tổ chức Workshop âm nhạc cho trẻ em
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs sm:text-sm text-[#6E566C]">
              <span>
                Thời gian: 20h00 – 23h00 ngày 14/11/2026 · Hình thức: Họp trực tuyến qua Zoom · Chủ trì: Tạ Hiền Hương · Thư ký: Hoàng Thị Ngọc Linh (05 thành viên)
              </span>
              <span className="text-xs font-medium text-[#9E4D45]">
                Bấm vào ảnh để phóng to đọc chi tiết
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {assignment.gallery.map((img, idx) => (
              <figure
                key={img.id}
                className="flex flex-col justify-between rounded-xl border border-[#E8A598]/80 bg-[#FFF0EE]/35 p-3.5 sm:p-4"
              >
                <div className="mb-2.5 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold tabular-nums text-[#9E4D45]">
                    TRANG 0{idx + 1} / 0{assignment.gallery.length}
                  </span>
                </div>

                <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border border-[#E8A598]/60 bg-white shadow-xs">
                  <SafeImage
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full"
                    imgClassName="object-contain"
                    onZoom={() =>
                      openSectionImageZoom(
                        assignment.gallery,
                        img.src,
                        img.alt,
                        img.caption
                      )
                    }
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>
      )}

      {assignment.id === 'bai-tap-4' &&
        assignment.memberReviews &&
        assignment.memberReviews.length > 0 && (
          <section className="mt-8 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E8A598]/60 pb-5">
              <h2 className="font-display text-2xl sm:text-[26px] font-bold leading-snug text-[#3F2E3E]">
                Đánh giá của từng thành viên
              </h2>
            </div>

            <div className="space-y-4">
              {assignment.memberReviews.map((member, idx) => (
                <div
                  key={member.id}
                  className="rounded-xl border border-[#E8A598]/75 bg-[#FFF0EE]/25 p-4 sm:p-5 space-y-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold tabular-nums text-[#9E4D45]">
                      0{idx + 1}.
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[#3F2E3E]">
                      {member.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-[#D4B44C]/55 bg-[#FDE68A]/20 p-3.5 sm:p-4 space-y-1.5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#7A5C12]">
                        Ưu điểm
                      </p>
                      <p className="text-sm leading-relaxed text-[#3F2E3E]">
                        {member.strengths}
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#E8A598]/75 bg-[#FFF0EE]/60 p-3.5 sm:p-4 space-y-1.5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#9E4D45]">
                        Hạn chế
                      </p>
                      <p className="text-sm leading-relaxed text-[#3F2E3E]">
                        {member.limitations}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      {assignment.id === 'bai-tap-4' && assignment.lessonsLearned && (
        <section className="mt-8 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-10 space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E8A598]/60 pb-4">
            <h2 className="font-display text-2xl sm:text-[26px] font-bold leading-snug text-[#3F2E3E]">
              Bài học kinh nghiệm
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#4F3B4E]">
            {assignment.lessonsLearned}
          </p>
        </section>
      )}

      {assignment.id === 'bai-tap-4' &&
        assignment.evidenceImages &&
        assignment.evidenceImages.length > 0 && (
          <section className="mt-8 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E8A598]/60 pb-4">
              <h2 className="font-display text-2xl sm:text-[26px] font-bold leading-snug text-[#3F2E3E]">
                Hình ảnh minh chứng
              </h2>
              <span className="text-xs font-medium text-[#9E4D45]">
                Bấm vào ảnh để phóng to xem chi tiết
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {assignment.evidenceImages.map((img, idx) => (
                <figure
                  key={img.id}
                  className="flex flex-col justify-between rounded-xl border border-[#E8A598]/80 bg-[#FFF0EE]/35 p-3.5 sm:p-4"
                >
                  <div className="mb-2.5 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold tabular-nums text-[#9E4D45]">
                      ẢNH 0{idx + 1} / 0{assignment.evidenceImages!.length}
                    </span>
                  </div>

                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#E8A598]/60 bg-white shadow-xs">
                    <SafeImage
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full"
                      imgClassName="object-contain"
                      onZoom={() =>
                        openSectionImageZoom(
                          assignment.evidenceImages || [],
                          img.src,
                          img.alt,
                          img.caption
                        )
                      }
                    />
                  </div>

                  <figcaption className="mt-3 text-xs sm:text-[13px] font-medium leading-snug text-[#4F3B4E]">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

      {assignment.sections.length > 0 && assignment.id !== 'bai-tap-4' && (
        <div className="mt-10 space-y-8">
          {assignment.id === 'bai-tap-6' && assignment.subtitle && (
            <p className="rounded-r-2xl border-l-4 border-[#9E4D45] bg-[#FDFBF7]/90 px-5 py-4 font-display text-lg sm:text-[21px] font-semibold leading-relaxed text-[#3F2E3E]">
              {assignment.subtitle}
            </p>
          )}
          {assignment.sections.length > 2 && assignment.id !== 'bai-tap-6' && (
            <nav
              aria-label="Mục lục nội dung bài tập"
              className="rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-4 sm:p-5"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#9E4D45]">
                Mục lục nhanh ({assignment.sections.length} mục)
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {assignment.sections.map((sec, sIdx) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() =>
                      document
                        .getElementById(sec.id)
                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                    className="flex items-start gap-2 rounded-xl border border-[#E8A598]/60 bg-[#FFF0EE]/45 px-3 py-2 text-left text-xs text-[#3F2E3E] transition-colors hover:border-[#D4B44C] hover:bg-[#FDE68A]/45"
                  >
                    <span className="font-mono font-semibold tabular-nums text-[#9E4D45]">
                      0{sIdx + 1}.
                    </span>
                    <span className="line-clamp-2 font-medium leading-snug">
                      {sec.heading.replace(/^\d+\.\s*/, '')}
                    </span>
                  </button>
                ))}
              </div>
            </nav>
          )}

          {assignment.sections.map((section, sIdx) => {
            const isEditing = editingSectionId === section.id;
            return (
              <section
                id={section.id}
                key={section.id}
                className="scroll-mt-20 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-5 sm:p-8 space-y-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E8A598]/55 pb-4">
                  <div className="min-w-0 flex-1 space-y-1.5">
                    {assignment.id !== 'bai-tap-6' && (
                      <span className="inline-block font-mono text-xs font-semibold tabular-nums text-[#9E4D45]">
                        MỤC 0{sIdx + 1}
                      </span>
                    )}
                    {isEditing ? (
                      <input
                        type="text"
                        value={section.heading}
                        onChange={(e) =>
                          onUpdateAssignment({
                            ...assignment,
                            sections: assignment.sections.map((sec) =>
                              sec.id === section.id
                                ? { ...sec, heading: e.target.value }
                                : sec
                            ),
                          })
                        }
                        className="w-full rounded-lg border border-[#E8A598] bg-white px-3 py-2 font-display text-lg font-semibold text-[#3F2E3E]"
                      />
                    ) : (
                      <h2 className="font-display text-xl sm:text-2xl font-semibold leading-snug text-[#3F2E3E]">
                        {section.heading}
                      </h2>
                    )}
                  </div>

                  {assignment.id !== 'bai-tap-6' && assignment.id !== 'bai-tap-3' && (
                    <button
                      type="button"
                      onClick={() =>
                        setEditingSectionId(isEditing ? null : section.id)
                      }
                      className={`inline-flex min-h-[36px] shrink-0 items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        isEditing
                          ? 'border-[#D4B44C] bg-[#FDE68A] text-[#3F2E3E]'
                          : 'border-[#E8A598] bg-[#FFF0EE]/70 text-[#3F2E3E] hover:bg-[#FDE68A]/60'
                      }`}
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                      <span>{isEditing ? 'Xong' : 'Chỉnh sửa mục'}</span>
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <textarea
                    rows={3}
                    value={section.body}
                    onChange={(e) =>
                      onUpdateAssignment({
                        ...assignment,
                        sections: assignment.sections.map((sec) =>
                          sec.id === section.id
                            ? { ...sec, body: e.target.value }
                            : sec
                        ),
                      })
                    }
                    className="w-full rounded-xl border border-[#E8A598] bg-white px-3.5 py-2.5 text-sm leading-relaxed text-[#3F2E3E]"
                  />
                ) : (
                  section.body && (
                    <p className="text-sm leading-relaxed text-[#6E566C] whitespace-pre-line">
                      {section.body}
                    </p>
                  )
                )}

                {section.images && section.images.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-[#9E4D45]">
                        Minh họa thực hành ({section.images.length} ảnh)
                      </h3>
                      <span className="text-[11px] text-[#6E566C]">
                        Bấm vào ảnh để phóng to và vuốt xem liên tiếp
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      {section.images.map((img, iIdx) => (
                        <div
                          key={img.id}
                          className="flex flex-col justify-between rounded-xl border border-[#E8A598]/80 bg-[#FFF0EE]/35 p-3"
                        >
                          <div className="mb-2 flex items-center justify-between gap-2">
                            <span className="font-mono text-xs font-semibold tabular-nums text-[#9E4D45]">
                              Ảnh {sIdx + 1}.{iIdx + 1}
                            </span>
                            <div className="flex items-center gap-1">
                              <label className="inline-flex min-h-[30px] cursor-pointer items-center gap-1 rounded-md border border-[#E8A598] bg-[#FDFBF7] px-2 py-1 text-[11px] font-semibold text-[#3F2E3E] hover:bg-[#FDE68A]">
                                <Upload className="h-3 w-3" />
                                <span>{img.src ? 'Thay' : 'Tải lên'}</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="sr-only"
                                  onChange={(e) =>
                                    handleUploadSectionImage(
                                      section.id,
                                      img.id,
                                      e
                                    )
                                  }
                                />
                              </label>
                              {img.src && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleClearSectionImage(section.id, img.id)
                                  }
                                  aria-label={`Xóa ${img.caption}`}
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[#9E4D45] hover:bg-[#FFF0EE]"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              )}
                            </div>
                          </div>

                          {img.src ? (
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#E8A598]/50 bg-white">
                              <SafeImage
                                src={img.src}
                                alt={img.alt}
                                className="h-full w-full"
                                imgClassName="object-contain"
                                onZoom={() =>
                                  openSectionImageZoom(
                                    section.images || [],
                                    img.src,
                                    img.alt,
                                    img.caption
                                  )
                                }
                              />
                            </div>
                          ) : (
                            <label className="flex aspect-[4/3] w-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-[#E8A598] bg-[#FDFBF7]/90 p-4 text-center transition-colors hover:bg-[#FFF0EE]">
                              <ImagePlus
                                className="h-7 w-7 text-[#9E4D45]"
                                aria-hidden="true"
                              />
                              <span className="text-xs font-semibold text-[#3F2E3E]">
                                Tải ảnh {sIdx + 1}.{iIdx + 1}
                              </span>
                              <span className="text-[11px] text-[#6E566C]">
                                PNG, JPG, WEBP
                              </span>
                              <input
                                type="file"
                                accept="image/*"
                                className="sr-only"
                                onChange={(e) =>
                                  handleUploadSectionImage(
                                    section.id,
                                    img.id,
                                    e
                                  )
                                }
                              />
                            </label>
                          )}

                          {isEditing ? (
                            <input
                              type="text"
                              value={img.caption}
                              onChange={(e) =>
                                onUpdateAssignment({
                                  ...assignment,
                                  sections: assignment.sections.map((sec) =>
                                    sec.id === section.id && sec.images
                                      ? {
                                          ...sec,
                                          images: sec.images.map((g) =>
                                            g.id === img.id
                                              ? { ...g, caption: e.target.value }
                                              : g
                                          ),
                                        }
                                      : sec
                                  ),
                                })
                              }
                              className="mt-2.5 w-full rounded-lg border border-[#E8A598] bg-white px-2.5 py-1.5 text-xs text-[#3F2E3E]"
                            />
                          ) : (
                            <p className="mt-2.5 text-xs leading-snug text-[#6E566C]">
                              {img.caption}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.table && section.table.rows.length > 0 && (() => {
                  const isTwoCol = section.table.headers.length === 2;
                  const tableTitle =
                    section.table.title !== undefined
                      ? section.table.title
                      : 'Bảng so sánh các prompt và kết quả:';
                  return (
                    <div className="space-y-2.5 pt-1">
                      {tableTitle && (
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-[#9E4D45]">
                          {tableTitle}
                        </h3>
                      )}

                      <div className={isTwoCol ? 'block' : 'hidden md:block'}>
                        <table className="w-full table-fixed border-separate border-spacing-0 text-left text-[12.5px] sm:text-sm leading-relaxed">
                          <colgroup>
                            {isTwoCol ? (
                              <>
                                <col className="w-[32%] sm:w-[24%]" />
                                <col className="w-[68%] sm:w-[76%]" />
                              </>
                            ) : (
                              <>
                                <col className="w-[19%]" />
                                <col className="w-[24%]" />
                                <col className="w-[25%]" />
                                <col className="w-[32%]" />
                              </>
                            )}
                          </colgroup>
                          <thead>
                            <tr className="text-xs font-semibold text-[#3F2E3E]">
                              {section.table.headers.map((header, hIdx) => (
                                <th
                                  key={header}
                                  scope="col"
                                  className={`${
                                    !isTwoCol
                                      ? 'sticky top-[58px] z-20 shadow-[0_3px_8px_-3px_rgba(63,46,62,0.14)]'
                                      : ''
                                  } border-t border-b border-r border-[#E8A598] bg-[#FFF0EE] px-3.5 py-2.5 align-middle ${
                                    hIdx === 0
                                      ? 'border-l rounded-tl-xl'
                                      : ''
                                  } ${
                                    hIdx === section.table!.headers.length - 1
                                      ? 'rounded-tr-xl'
                                      : ''
                                  }`}
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rIdx) => {
                              const isLast =
                                rIdx === section.table!.rows.length - 1;
                              return (
                                <tr
                                  key={row.id}
                                  className="odd:bg-[#FDFBF7] even:bg-[#FFF0EE]/35 transition-colors hover:bg-[#FFF0EE]/70"
                                >
                                  {row.cells.map((cell, cIdx) => (
                                    <td
                                      key={`${row.id}-${cIdx}`}
                                      className={`border-b border-r border-[#E8A598]/70 px-3.5 py-2.5 align-top break-words ${
                                        cIdx === 0
                                          ? `border-l font-semibold text-[#9E4D45] tabular-nums ${
                                              isLast ? 'rounded-bl-xl' : ''
                                            }`
                                          : 'text-[#3F2E3E]'
                                      } ${
                                        cIdx === row.cells.length - 1 && isLast
                                          ? 'rounded-br-xl'
                                          : ''
                                      }`}
                                    >
                                      {isEditing ? (
                                        <textarea
                                          rows={isTwoCol ? 2 : 3}
                                          value={cell}
                                          onChange={(e) =>
                                            onUpdateAssignment({
                                              ...assignment,
                                              sections: assignment.sections.map(
                                                (sec) =>
                                                  sec.id === section.id &&
                                                  sec.table
                                                    ? {
                                                        ...sec,
                                                        table: {
                                                          ...sec.table,
                                                          rows: sec.table.rows.map(
                                                            (tr) =>
                                                              tr.id === row.id
                                                                ? {
                                                                    ...tr,
                                                                    cells:
                                                                      tr.cells.map(
                                                                        (
                                                                          val,
                                                                          idx
                                                                        ) =>
                                                                          idx ===
                                                                          cIdx
                                                                            ? e
                                                                                .target
                                                                                .value
                                                                            : val
                                                                      ),
                                                                  }
                                                                : tr
                                                          ),
                                                        },
                                                      }
                                                    : sec
                                              ),
                                            })
                                          }
                                          className="w-full rounded-lg border border-[#E8A598]/80 bg-white p-2 text-xs text-[#3F2E3E]"
                                        />
                                      ) : (
                                        <span className="whitespace-pre-line">
                                          {cell}
                                        </span>
                                      )}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {!isTwoCol && (
                        <div className="space-y-3 md:hidden">
                          <div className="sticky top-[68px] z-20 flex items-center justify-between gap-2 rounded-xl border border-[#E8A598] bg-[#FFF0EE]/95 px-3 py-2 text-[11px] font-semibold text-[#3F2E3E] backdrop-blur-xs shadow-xs">
                            <span>{section.table.headers[0]}:</span>
                            <span className="text-right text-[#9E4D45]">
                              {section.table.headers.slice(1).join(' · ')}
                            </span>
                          </div>

                          {section.table.rows.map((row) => (
                            <div
                              key={row.id}
                              className="overflow-hidden rounded-xl border border-[#E8A598] bg-[#FDFBF7]"
                            >
                              <div className="border-b border-[#E8A598]/70 bg-[#FFF0EE] px-3.5 py-2 text-xs font-semibold text-[#9E4D45]">
                                {row.cells[0]}
                              </div>
                              <dl className="divide-y divide-[#E8A598]/45 text-xs leading-relaxed">
                                {section.table!.headers.slice(1).map((hdr, cIdx) => (
                                  <div
                                    key={`${row.id}-m-${cIdx}`}
                                    className="space-y-1 px-3.5 py-2.5"
                                  >
                                    <dt className="font-semibold text-[#9E4D45]">
                                      {hdr}
                                    </dt>
                                    <dd className="text-[#3F2E3E]">
                                      {row.cells[cIdx + 1]}
                                    </dd>
                                  </div>
                                ))}
                              </dl>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })()}

                {section.codeBlock && (
                  <pre className="overflow-x-auto rounded-xl border border-[#E8A598]/70 bg-[#FFF0EE] p-4 font-mono text-xs leading-relaxed text-[#3F2E3E]">
                    <code>{section.codeBlock}</code>
                  </pre>
                )}

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-2.5 pt-1">
                    {section.bulletPoints.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-[#E8A598]/45 bg-[#FFF0EE]/30 px-4 py-3 text-sm leading-relaxed text-[#3F2E3E]"
                      >
                        {assignment.id !== 'bai-tap-6' && (
                          <span className="font-mono text-xs font-semibold tabular-nums text-[#9E4D45] pt-0.5">
                            0{i + 1}.
                          </span>
                        )}
                        {isEditing ? (
                          <textarea
                            rows={2}
                            value={pt}
                            onChange={(e) =>
                              onUpdateAssignment({
                                ...assignment,
                                sections: assignment.sections.map((sec) =>
                                  sec.id === section.id && sec.bulletPoints
                                    ? {
                                        ...sec,
                                        bulletPoints: sec.bulletPoints.map(
                                          (item, idx) =>
                                            idx === i ? e.target.value : item
                                        ),
                                      }
                                    : sec
                                ),
                              })
                            }
                            className="w-full rounded-lg border border-[#E8A598]/80 bg-white px-2.5 py-1.5 text-sm text-[#3F2E3E]"
                          />
                        ) : (
                          <span>{pt}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {isEditing && section.closingNote !== undefined ? (
                  <textarea
                    rows={2}
                    value={section.closingNote}
                    onChange={(e) =>
                      onUpdateAssignment({
                        ...assignment,
                        sections: assignment.sections.map((sec) =>
                          sec.id === section.id
                            ? { ...sec, closingNote: e.target.value }
                            : sec
                        ),
                      })
                    }
                    className="w-full rounded-xl border border-[#E8A598] bg-[#FFFDFB] p-3 text-sm leading-relaxed text-[#3F2E3E]"
                  />
                ) : (
                  section.closingNote && (
                    <p className="rounded-xl border border-[#E8A598]/60 bg-[#FFF0EE]/45 px-4 py-3 text-sm font-medium leading-relaxed text-[#3F2E3E] whitespace-pre-line">
                      {section.closingNote}
                    </p>
                  )
                )}
              </section>
            );
          })}
        </div>
      )}

      {assignment.evaluationTable && assignment.evaluationTable.length > 0 && (
        <section className="mt-10 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-4 sm:p-6 lg:-mx-4 xl:-mx-20 2xl:-mx-28 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-2xl font-semibold text-[#3F2E3E]">
              Bảng tổng hợp &amp; đánh giá nguồn thông tin học thuật
            </h2>
            <span className="text-xs font-medium text-[#6E566C] tabular-nums">
              Tổng số tài liệu: {assignment.evaluationTable.length}
            </span>
          </div>

          {/* Giao diện bảng đầy đủ 7 cột không cần cuộn ngang (từ màn hình tablet/desktop) */}
          <div className="hidden md:block">
            <table className="w-full table-fixed border-separate border-spacing-0 text-left text-[12px] lg:text-[12.5px] leading-relaxed">
              <colgroup>
                <col className="w-[23%]" />
                <col className="w-[13%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[11%]" />
                <col className="w-[11%]" />
                <col className="w-[14%]" />
              </colgroup>
              <thead>
                <tr className="text-[11.5px] lg:text-xs font-semibold text-[#3F2E3E]">
                  <th
                    scope="col"
                    className="sticky top-[58px] z-20 rounded-tl-xl border-t border-b border-l border-r border-[#E8A598] bg-[#FFF0EE] p-0 align-top shadow-[0_3px_8px_-3px_rgba(63,46,62,0.14)]"
                  >
                    <div className="relative flex min-h-[60px] flex-col justify-between px-2.5 py-2 lg:px-3">
                      <svg
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="100"
                          y2="100"
                          stroke="#E8A598"
                          strokeWidth="1.2"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                      <span className="relative z-10 self-end text-right text-[#9E4D45]">
                        Tên tiêu chí
                      </span>
                      <span className="relative z-10 self-start text-left text-[#3F2E3E]">
                        STT &amp; tên bài viết
                      </span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-[58px] z-20 border-t border-b border-r border-[#E8A598] bg-[#FFF0EE] px-2.5 py-2.5 lg:px-3 align-middle shadow-[0_3px_8px_-3px_rgba(63,46,62,0.14)]"
                  >
                    Tác giả
                  </th>
                  <th
                    scope="col"
                    className="sticky top-[58px] z-20 border-t border-b border-r border-[#E8A598] bg-[#FFF0EE] px-2.5 py-2.5 lg:px-3 align-middle shadow-[0_3px_8px_-3px_rgba(63,46,62,0.14)]"
                  >
                    Cơ quan xuất bản
                  </th>
                  <th
                    scope="col"
                    className="sticky top-[58px] z-20 border-t border-b border-r border-[#E8A598] bg-[#FFF0EE] px-2.5 py-2.5 lg:px-3 align-middle shadow-[0_3px_8px_-3px_rgba(63,46,62,0.14)]"
                  >
                    Phương pháp nghiên cứu
                  </th>
                  <th
                    scope="col"
                    className="sticky top-[58px] z-20 border-t border-b border-r border-[#E8A598] bg-[#FFF0EE] px-2.5 py-2.5 lg:px-3 align-middle shadow-[0_3px_8px_-3px_rgba(63,46,62,0.14)]"
                  >
                    Trích dẫn
                  </th>
                  <th
                    scope="col"
                    className="sticky top-[58px] z-20 border-t border-b border-r border-[#E8A598] bg-[#FFF0EE] px-2.5 py-2.5 lg:px-3 align-middle shadow-[0_3px_8px_-3px_rgba(63,46,62,0.14)]"
                  >
                    Tính cập nhật
                  </th>
                  <th
                    scope="col"
                    className="sticky top-[58px] z-20 rounded-tr-xl border-t border-b border-r border-[#E8A598] bg-[#FFF0EE] px-2.5 py-2.5 lg:px-3 align-middle shadow-[0_3px_8px_-3px_rgba(63,46,62,0.14)]"
                  >
                    Tổng quan
                  </th>
                </tr>
              </thead>
              <tbody>
                {assignment.evaluationTable.map((row, rowIndex) => {
                  const isLast = rowIndex === assignment.evaluationTable!.length - 1;
                  return (
                    <tr
                      key={row.id}
                      className="odd:bg-[#FDFBF7] even:bg-[#FFF0EE]/35 transition-colors hover:bg-[#FFF0EE]/75"
                    >
                      <td
                        className={`border-b border-l border-r border-[#E8A598]/70 px-2.5 py-2.5 lg:px-3 lg:py-3 align-top font-semibold text-[#3F2E3E] break-words ${
                          isLast ? 'rounded-bl-xl' : ''
                        }`}
                      >
                        {row.sourceTitle}
                      </td>
                      <td className="border-b border-r border-[#E8A598]/70 px-2.5 py-2.5 lg:px-3 lg:py-3 align-top text-[#3F2E3E]/90 break-words">
                        {row.author}
                      </td>
                      <td className="border-b border-r border-[#E8A598]/70 px-2.5 py-2.5 lg:px-3 lg:py-3 align-top text-[#3F2E3E]/90 break-words">
                        {row.publisher}
                      </td>
                      <td className="border-b border-r border-[#E8A598]/70 px-2.5 py-2.5 lg:px-3 lg:py-3 align-top text-[#3F2E3E]/90 break-words">
                        {row.method}
                      </td>
                      <td className="border-b border-r border-[#E8A598]/70 px-2.5 py-2.5 lg:px-3 lg:py-3 align-top text-[#3F2E3E]/90 break-words">
                        {row.citation}
                      </td>
                      <td className="border-b border-r border-[#E8A598]/70 px-2.5 py-2.5 lg:px-3 lg:py-3 align-top text-[#3F2E3E]/90 break-words">
                        {row.currency}
                      </td>
                      <td
                        className={`border-b border-r border-[#E8A598]/70 px-2.5 py-2.5 lg:px-3 lg:py-3 align-top text-[#3F2E3E] break-words ${
                          isLast ? 'rounded-br-xl' : ''
                        }`}
                      >
                        {row.overview}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Giao diện gọn không cuộn ngang dành cho màn hình điện thoại (< 768px) */}
          <div className="space-y-4 md:hidden">
            <div className="sticky top-[68px] z-20 flex items-center justify-between gap-2 rounded-xl border border-[#E8A598] bg-[#FFF0EE]/95 px-3 py-2 text-[11px] font-semibold text-[#3F2E3E] backdrop-blur-xs shadow-xs">
              <span>Tiêu chí đối chiếu:</span>
              <span className="text-right text-[#9E4D45]">
                Tác giả · Xuất bản · Phương pháp · Trích dẫn · Cập nhật · Tổng quan
              </span>
            </div>

            {assignment.evaluationTable.map((row) => (
              <div
                key={row.id}
                className="overflow-hidden rounded-xl border border-[#E8A598] bg-[#FDFBF7]"
              >
                <div className="border-b border-[#E8A598]/70 bg-[#FFF0EE] px-3.5 py-2.5 text-xs font-semibold text-[#3F2E3E]">
                  {row.sourceTitle}
                </div>
                <dl className="divide-y divide-[#E8A598]/45 text-xs leading-relaxed">
                  <div className="grid grid-cols-[112px_1fr] gap-2 px-3.5 py-2">
                    <dt className="font-semibold text-[#9E4D45]">Tác giả</dt>
                    <dd className="text-[#3F2E3E]">{row.author}</dd>
                  </div>
                  <div className="grid grid-cols-[112px_1fr] gap-2 px-3.5 py-2 bg-[#FFF0EE]/25">
                    <dt className="font-semibold text-[#9E4D45]">Cơ quan xuất bản</dt>
                    <dd className="text-[#3F2E3E]">{row.publisher}</dd>
                  </div>
                  <div className="grid grid-cols-[112px_1fr] gap-2 px-3.5 py-2">
                    <dt className="font-semibold text-[#9E4D45]">Phương pháp nghiên cứu</dt>
                    <dd className="text-[#3F2E3E]">{row.method}</dd>
                  </div>
                  <div className="grid grid-cols-[112px_1fr] gap-2 px-3.5 py-2 bg-[#FFF0EE]/25">
                    <dt className="font-semibold text-[#9E4D45]">Trích dẫn</dt>
                    <dd className="text-[#3F2E3E]">{row.citation}</dd>
                  </div>
                  <div className="grid grid-cols-[112px_1fr] gap-2 px-3.5 py-2">
                    <dt className="font-semibold text-[#9E4D45]">Tính cập nhật</dt>
                    <dd className="text-[#3F2E3E]">{row.currency}</dd>
                  </div>
                  <div className="grid grid-cols-[112px_1fr] gap-2 px-3.5 py-2 bg-[#FFF0EE]/25">
                    <dt className="font-semibold text-[#9E4D45]">Tổng quan</dt>
                    <dd className="font-medium text-[#3F2E3E]">{row.overview}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </section>
      )}

      {assignment.harvardReferences && assignment.harvardReferences.length > 0 && (
        <section className="mt-8 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-5 sm:p-8 space-y-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E8A598]/60 pb-4">
            <h2 className="font-display text-2xl font-semibold text-[#3F2E3E]">
              Trích dẫn nguồn tài liệu
            </h2>
            <span className="text-xs font-medium text-[#6E566C] tabular-nums">
              {assignment.harvardReferences.length} tài liệu tham khảo
            </span>
          </div>

          <ol className="divide-y divide-[#E8A598]/45">
            {assignment.harvardReferences.map((ref, idx) => (
              <li
                key={ref.id}
                className="flex items-start gap-3 py-3.5 first:pt-1 last:pb-1 text-sm leading-relaxed text-[#3F2E3E]"
              >
                <span className="mt-0.5 w-6 shrink-0 font-mono text-xs font-semibold tabular-nums text-[#9E4D45]">
                  {idx + 1}.
                </span>
                <div className="min-w-0 flex-1 space-y-1.5">
                  <p className="text-[#3F2E3E]">
                    <span className="font-medium">{ref.authorYear}</span>{' '}
                    {ref.articleTitle && <span>{ref.articleTitle} </span>}
                    <em className="italic">{ref.italicTitle}</em>
                    {ref.publicationDetails && <span>{ref.publicationDetails}</span>}
                  </p>
                  {isSafeHttpUrl(ref.url) && (
                    <p className="text-xs text-[#6E566C]">
                      <span>Truy cập tại: </span>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 break-all font-medium text-[#9E4D45] underline decoration-[#E8A598] underline-offset-2 transition-colors hover:text-[#3F2E3E] hover:decoration-[#3F2E3E]"
                      >
                        <span>{ref.url}</span>
                        <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                      </a>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {assignment.number === 5 && (
        <section className="mt-10 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-8 space-y-4">
          <h2 className="font-display text-2xl font-semibold text-[#3F2E3E]">
            Video AI: “Ứng dụng công nghệ số và AI trong dạy học âm nhạc ở trường tiểu học”
          </h2>
          <YouTubeEmbed
            url={assignment.youtubeUrl}
            caption={assignment.youtubeCaption}
            onOpenEditor={() => onEditAssignment(assignment.id)}
          />
        </section>
      )}

      <PageFooterNav currentPage={assignment.id} onNavigate={onNavigate} />
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  FolderOpen,
  Home,
  Maximize2,
  Music2,
  PlayCircle,
  X,
} from 'lucide-react';
import { ExternalResource, PageId } from '../types/portfolio';
import {
  extractGoogleDrivePreviewUrl,
  extractYouTubeEmbedUrl,
  isSafeHttpUrl,
  NAV_PAGES,
  PAGE_ORDER,
} from '../utils/media';

export interface LightboxImageItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface LightboxState extends LightboxImageItem {
  items?: LightboxImageItem[];
  currentIndex?: number;
}

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  onZoom?: () => void;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = 'object-cover',
  onZoom,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#FFF0EE] to-[#F7DCD7] p-6 text-center text-[#6E566C] ${className}`}
      >
        <Music2 className="h-8 w-8 text-[#9E4D45]" aria-hidden="true" />
        <span className="text-xs font-medium max-w-[220px]">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`group relative overflow-hidden bg-[#FFF0EE] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`h-full w-full transition-transform duration-300 group-hover:scale-[1.02] ${imgClassName}`}
      />
      {onZoom && (
        <button
          type="button"
          onClick={onZoom}
          aria-label={`Phóng to hình ảnh: ${alt}`}
          className="absolute right-3 bottom-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8A598] bg-[#FDFBF7]/95 text-[#3F2E3E] opacity-90 shadow-sm transition-opacity duration-150 hover:bg-[#FDE68A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E3E]"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

interface LightboxModalProps {
  image: LightboxState | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const items = image?.items && image.items.length > 0 ? image.items : image ? [image] : [];
  const hasMultiple = items.length > 1;

  useEffect(() => {
    if (!image) return;
    setIndex(
      typeof image.currentIndex === 'number' && image.currentIndex >= 0
        ? Math.min(image.currentIndex, Math.max(items.length - 1, 0))
        : 0
    );
  }, [image, items.length]);

  useEffect(() => {
    if (!image) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (hasMultiple && e.key === 'ArrowLeft') {
        setIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
      }
      if (hasMultiple && e.key === 'ArrowRight') {
        setIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [image, hasMultiple, items.length, onClose]);

  if (!image || items.length === 0) return null;

  const activeItem = items[index] || image;

  const goPrev = () => setIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  const goNext = () => setIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh kích thước lớn"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3F2E3E]/85 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-3 sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <div className="min-w-0 flex items-center gap-2.5">
            {hasMultiple && (
              <span className="shrink-0 rounded-md border border-[#E8A598] bg-[#FFF0EE] px-2 py-0.5 font-mono text-xs font-semibold tabular-nums text-[#9E4D45]">
                {index + 1} / {items.length}
              </span>
            )}
            <p className="text-sm font-medium text-[#3F2E3E] truncate">
              {activeItem.caption || activeItem.alt}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng trình xem ảnh"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#E8A598] bg-[#FFF0EE] text-[#3F2E3E] hover:bg-[#FDE68A]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div
          className="relative max-h-[75vh] overflow-hidden rounded-xl bg-[#FFF0EE]"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (!hasMultiple || touchStartX.current === null) return;
            const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
            const delta = endX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(delta) > 40) {
              if (delta > 0) goPrev();
              else goNext();
            }
          }}
        >
          <img
            src={activeItem.src}
            alt={activeItem.alt}
            referrerPolicy="no-referrer"
            className="mx-auto max-h-[75vh] w-auto object-contain select-none"
          />

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Xem ảnh trước"
                className="absolute top-1/2 left-3 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E8A598] bg-[#FDFBF7]/95 text-[#3F2E3E] shadow-md hover:bg-[#FDE68A]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Xem ảnh tiếp theo"
                className="absolute top-1/2 right-3 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E8A598] bg-[#FDFBF7]/95 text-[#3F2E3E] shadow-md hover:bg-[#FDE68A]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface YouTubeEmbedProps {
  url?: string;
  caption?: string;
  onOpenEditor?: () => void;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  url,
  caption,
  onOpenEditor,
}) => {
  const embedUrl = extractYouTubeEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className="rounded-2xl border border-dashed border-[#E8A598] bg-[#FFF0EE]/70 p-6 sm:p-8 text-center">
        <PlayCircle className="mx-auto h-10 w-10 text-[#9E4D45]" aria-hidden="true" />
        <h4 className="mt-3 font-display text-lg font-semibold text-[#3F2E3E]">
          Khung nhúng Video YouTube (Bài tập 5)
        </h4>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[#6E566C]">
          {caption ||
            'Chưa có đường dẫn YouTube hợp lệ. Hãy dán đường dẫn YouTube từ file BT NMCNS.docx vào trình chỉnh sửa để phát video trực tiếp.'}
        </p>
        {onOpenEditor && (
          <button
            type="button"
            onClick={onOpenEditor}
            className="mt-5 inline-flex items-center justify-center rounded-lg border border-[#D4B44C] bg-[#FDE68A] px-4 py-2 text-sm font-semibold text-[#3F2E3E] hover:bg-[#FCD34D]"
          >
            Gắn đường dẫn YouTube ngay
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[#E8A598] bg-[#3F2E3E]">
        <iframe
          src={embedUrl}
          title="Video sản phẩm số — Bài tập 5"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#6E566C]">
        <span>{caption || 'Video nhúng từ YouTube'}</span>
        {url && isSafeHttpUrl(url) && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[#9E4D45] hover:underline"
          >
            Mở trên YouTube
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};

interface ResourceLinksPanelProps {
  resources: ExternalResource[];
  onOpenEditor?: () => void;
}

export const ResourceLinksPanel: React.FC<ResourceLinksPanelProps> = ({
  resources,
  onOpenEditor,
}) => {
  const [previewId, setPreviewId] = useState<string | null>(null);

  if (!resources || resources.length === 0) return null;

  return (
    <div className="space-y-4">
      {resources.map((res) => {
        const hasUrl = isSafeHttpUrl(res.url);
        const embedPreview = hasUrl ? extractGoogleDrivePreviewUrl(res.url) : null;
        const isPreviewOpen = previewId === res.id;

        return (
          <div
            key={res.id}
            className="rounded-xl border border-[#E8A598] bg-[#FDFBF7] p-4 sm:p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 text-xs font-medium text-[#9E4D45]">
                  {res.type === 'drive' ? (
                    <FolderOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                  )}
                  <span>
                    {res.type === 'drive'
                      ? 'Google Drive'
                      : res.type === 'pdf'
                        ? 'Tài liệu PDF'
                        : res.type === 'youtube'
                          ? 'Video YouTube'
                          : 'Liên kết học thuật'}
                  </span>
                </div>
                <p className="font-semibold text-[#3F2E3E]">{res.label}</p>
                {res.note && <p className="text-xs text-[#6E566C]">{res.note}</p>}
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {embedPreview && (
                  <button
                    type="button"
                    onClick={() => setPreviewId(isPreviewOpen ? null : res.id)}
                    className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-[#E8A598] bg-[#FFF0EE] px-4 py-2 text-xs font-semibold text-[#3F2E3E] hover:bg-[#FDE68A]"
                  >
                    {isPreviewOpen ? 'Ẩn xem trước' : 'Xem nhúng tại trang'}
                  </button>
                )}
                {hasUrl ? (
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-[#D4B44C] bg-[#FDE68A] px-4 py-2 text-xs font-semibold text-[#3F2E3E] hover:bg-[#FCD34D]"
                  >
                    Mở liên kết
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  onOpenEditor && (
                    <button
                      type="button"
                      onClick={onOpenEditor}
                      className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-[#E8A598] bg-[#FFF0EE] px-4 py-2 text-xs font-medium text-[#6E566C] hover:text-[#3F2E3E]"
                    >
                      Chèn đường dẫn mẫu
                    </button>
                  )
                )}
              </div>
            </div>

            {isPreviewOpen && embedPreview && (
              <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#E8A598] bg-[#FFF0EE]">
                <iframe
                  src={embedPreview}
                  title={`Xem trước: ${res.label}`}
                  className="h-full w-full"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

interface PageFooterNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  nextPageOverride?: { id: PageId; shortLabel: string };
}

export const PageFooterNav: React.FC<PageFooterNavProps> = ({
  currentPage,
  onNavigate,
  nextPageOverride,
}) => {
  const currentIndex = PAGE_ORDER.indexOf(currentPage);
  const prevPage = currentIndex > 0 ? NAV_PAGES[currentIndex - 1] : null;
  const nextPage =
    nextPageOverride ||
    (currentIndex >= 0 && currentIndex < NAV_PAGES.length - 1
      ? NAV_PAGES[currentIndex + 1]
      : null);

  return (
    <div className="mt-12 border-t border-[#E8A598]/60 pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {currentPage !== 'about' && (
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E8A598] bg-[#FDFBF7] px-4 py-2 text-sm font-medium text-[#3F2E3E] hover:bg-[#FFF0EE]"
            >
              <Home className="h-4 w-4 text-[#9E4D45]" />
              Về trang chủ
            </button>
          )}
          {prevPage && (
            <button
              type="button"
              onClick={() => onNavigate(prevPage.id)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E8A598] bg-[#FDFBF7] px-4 py-2 text-sm font-medium text-[#3F2E3E] hover:bg-[#FFF0EE]"
            >
              <ArrowLeft className="h-4 w-4 text-[#9E4D45]" />
              <span>Trang trước: {prevPage.shortLabel}</span>
            </button>
          )}
        </div>

        {nextPage && (
          <button
            type="button"
            onClick={() => onNavigate(nextPage.id)}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#D4B44C] bg-[#FDE68A] px-5 py-2 text-sm font-semibold text-[#3F2E3E] hover:bg-[#FCD34D]"
          >
            <span>Tiếp theo: {nextPage.shortLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Trở lại đầu trang"
      className="fixed right-5 bottom-5 z-30 inline-flex h-11 items-center gap-2 rounded-xl border border-[#D4B44C] bg-[#FDE68A] px-4 text-xs font-semibold text-[#3F2E3E] shadow-md transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#FCD34D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E3E]"
    >
      <ArrowUp className="h-4 w-4" />
      <span className="hidden sm:inline">Đầu trang</span>
    </button>
  );
};

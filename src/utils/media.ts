import { PageId } from '../types/portfolio';

export const PAGE_ORDER: PageId[] = [
  'about',
  'du-an',
  'bai-tap-1',
  'bai-tap-2',
  'bai-tap-3',
  'bai-tap-4',
  'bai-tap-5',
  'bai-tap-6',
  'tong-ket',
];

export const NAV_PAGES: { id: PageId; shortLabel: string; fullTitle: string }[] = [
  { id: 'about', shortLabel: 'About Me', fullTitle: 'Trang 1: Giới thiệu bản thân — Tạ Hiền Hương' },
  { id: 'du-an', shortLabel: 'Dự án', fullTitle: 'Trang 2: Tổng quan 06 bài tập học phần' },
  { id: 'bai-tap-1', shortLabel: 'Bài 1', fullTitle: 'Bài tập 1: Chương 1 — Thao tác tệp tin và thư mục' },
  { id: 'bai-tap-2', shortLabel: 'Bài 2', fullTitle: 'Bài tập 2: Chương 2 — Tìm kiếm & đánh giá thông tin' },
  { id: 'bai-tap-3', shortLabel: 'Bài 3', fullTitle: 'Bài tập 3: Chương 3 — Viết Prompt hiệu quả' },
  { id: 'bai-tap-4', shortLabel: 'Bài 4', fullTitle: 'Bài tập 4: Chương 4 — Hợp tác trực tuyến dự án nhóm' },
  { id: 'bai-tap-5', shortLabel: 'Bài 5', fullTitle: 'Bài tập 5: Chương 5 — AI tạo sinh & nội dung số' },
  { id: 'bai-tap-6', shortLabel: 'Bài 6', fullTitle: 'Bài tập 6: Chương 6 — Liêm chính học thuật & AI' },
  { id: 'tong-ket', shortLabel: 'Tổng kết', fullTitle: 'Trang 9: Tổng kết học phần Nhập môn Công nghệ số' },
];

export function getPageFromHash(hash: string): PageId {
  const cleaned = hash.replace(/^#\/?/, '').trim() as PageId;
  if (PAGE_ORDER.includes(cleaned)) {
    return cleaned;
  }
  return 'about';
}

export function extractYouTubeEmbedUrl(rawUrl: string | undefined): string | null {
  if (!rawUrl || !rawUrl.trim()) return null;
  const trimmed = rawUrl.trim();
  try {
    const parsed = new URL(trimmed);
    const host = parsed.hostname.replace(/^www\./, '').toLowerCase();
    let videoId = '';

    if (host === 'youtu.be') {
      videoId = parsed.pathname.slice(1).split('/')[0];
    } else if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      if (parsed.pathname.startsWith('/embed/')) {
        videoId = parsed.pathname.replace('/embed/', '').split('/')[0];
      } else if (parsed.pathname.startsWith('/shorts/')) {
        videoId = parsed.pathname.replace('/shorts/', '').split('/')[0];
      } else {
        videoId = parsed.searchParams.get('v') || '';
      }
    }

    if (/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch {
    return null;
  }
  return null;
}

export function extractGoogleDrivePreviewUrl(rawUrl: string | undefined): string | null {
  if (!rawUrl || !rawUrl.trim()) return null;
  const trimmed = rawUrl.trim();
  const match = trimmed.match(/https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  if (/^https:\/\/.*\.pdf(\?.*)?$/i.test(trimmed)) {
    return trimmed;
  }
  return null;
}

export function isSafeHttpUrl(rawUrl: string | undefined): boolean {
  if (!rawUrl) return false;
  try {
    const parsed = new URL(rawUrl.trim());
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

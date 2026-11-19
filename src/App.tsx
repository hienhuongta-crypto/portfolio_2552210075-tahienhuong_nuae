import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { MotionConfig, motion, AnimatePresence } from 'motion/react';
import { DEFAULT_PORTFOLIO_DATA } from './data/portfolioData';
import { PageId, PortfolioData } from './types/portfolio';
import { getPageFromHash, NAV_PAGES } from './utils/media';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BotanicalDecor } from './components/BotanicalDecor';
import {
  LightboxModal,
  LightboxState,
  ScrollToTopButton,
} from './components/MediaWidgets';
import type { EditorTarget } from './components/ContentEditorModal';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AssignmentDetailPage } from './pages/AssignmentDetailPage';
import { SummaryPage } from './pages/SummaryPage';

const ContentEditorModal = lazy(() =>
  import('./components/ContentEditorModal').then((m) => ({
    default: m.ContentEditorModal,
  }))
);

const STORAGE_KEY = 'sweet_melody_portfolio_v1';

function loadSavedData(): PortfolioData {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PORTFOLIO_DATA;
    const parsed = JSON.parse(raw) as Partial<PortfolioData>;
    return {
      about: DEFAULT_PORTFOLIO_DATA.about,
      assignments: Array.isArray(parsed.assignments)
        ? parsed.assignments.map((saved) => {
            const fallback = DEFAULT_PORTFOLIO_DATA.assignments.find(
              (d) => d.id === saved.id
            );
            if (fallback && !fallback.isSampleContent && saved.isSampleContent) {
              return fallback;
            }
            const baseGallery =
              fallback &&
              saved.gallery.length === 1 &&
              saved.gallery[0].id.endsWith('-img-1') &&
              fallback.gallery.length > 1
                ? fallback.gallery
                : saved.gallery;

            const hydratedGallery = baseGallery.map((item, idx) => {
              if (fallback) {
                const fbItem =
                  fallback.gallery.find((f) => f.id === item.id) ||
                  fallback.gallery[idx];
                if (fbItem) {
                  if (
                    (!item.src ||
                      item.src === './assets/aistudio/16_c8d741c4.png') &&
                    fbItem.src
                  ) {
                    return fbItem;
                  }
                  if (
                    item.caption.endsWith('Ảnh minh họa sản phẩm thực hành') &&
                    fbItem.caption !== item.caption
                  ) {
                    return { ...item, caption: fbItem.caption, alt: fbItem.alt };
                  }
                }
              }
              return item;
            });

            const existingIds = new Set(hydratedGallery.map((g) => g.id));
            const trailingAssets = fallback
              ? fallback.gallery
                  .slice(hydratedGallery.length)
                  .filter((f) => f.src && !existingIds.has(f.id))
              : [];
            const nextGallery = [...hydratedGallery, ...trailingAssets];
            const nextSubtitle =
              fallback &&
              saved.id === 'bai-tap-6' &&
              (saved.subtitle ===
                'Dựa trên các bài tập thực hành đã trải qua, em tự đúc kết 5 bộ nguyên tắc cốt lõi khi ứng dụng AI vào học tập và sáng tạo nghệ thuật:' ||
                saved.subtitle ===
                  'Dựa trên các bài tập thực hành đã trải qua, em tự rút ra 5 bộ nguyên tắc cốt lõi khi sử dụng AI')
                ? fallback.subtitle
                : fallback &&
                    !fallback.subtitle &&
                    (saved.subtitle ===
                      'Tổ chức cây thư mục học tập và quy chuẩn đặt tên tài liệu chuyên ngành Sư phạm Âm nhạc' ||
                      saved.subtitle ===
                        'Tra cứu nguồn tài liệu chính thống và kiểm chứng độ tin cậy trong nghiên cứu giáo dục âm nhạc' ||
                      saved.subtitle ===
                        'Ứng dụng kỹ thuật kỹ nghệ câu lệnh (Prompt Engineering) hỗ trợ soạn bài và tự học âm nhạc' ||
                      saved.subtitle ===
                        'Kế hoạch cuộc họp lên ý tưởng cho Workshop âm nhạc - Chạm vào giai điệu' ||
                      saved.subtitle ===
                        'Kết hợp công cụ AI tạo sinh cùng kỹ năng chụp ảnh, quay dựng video để tạo học liệu âm nhạc trực quan')
                  ? ''
                  : saved.subtitle;

            const needsTableUpgrade =
              saved.id === 'bai-tap-2' &&
              fallback?.evaluationTable &&
              (!Array.isArray(saved.evaluationTable) ||
                saved.evaluationTable.length !== fallback.evaluationTable.length ||
                saved.evaluationTable.some(
                  (r) => !('author' in r) || r.sourceTitle.startsWith('[Mẫu]')
                ));

            const nextEvaluationTable = needsTableUpgrade
              ? fallback?.evaluationTable
              : saved.evaluationTable;

            const nextHarvardReferences =
              saved.id === 'bai-tap-2' && fallback?.harvardReferences
                ? !Array.isArray(saved.harvardReferences) ||
                  saved.harvardReferences.length === 0
                  ? fallback.harvardReferences
                  : saved.harvardReferences.map((ref) => {
                      if (ref.url) return ref;
                      const fbRef = fallback.harvardReferences?.find(
                        (f) => f.id === ref.id
                      );
                      return fbRef?.url ? { ...ref, url: fbRef.url } : ref;
                    })
                : saved.harvardReferences;

            const needsBaiTap3Upgrade =
              saved.id === 'bai-tap-3' &&
              fallback &&
              fallback.sections.length >= 6 &&
              (!Array.isArray(saved.sections) || saved.sections.length < 6);

            if (needsBaiTap3Upgrade && fallback) {
              return fallback;
            }

            const needsBaiTap4Upgrade =
              saved.id === 'bai-tap-4' &&
              fallback &&
              fallback.sections.length >= 6 &&
              (!Array.isArray(saved.sections) || saved.sections.length < 6);

            if (needsBaiTap4Upgrade && fallback) {
              return fallback;
            }

            const hydratedSections =
              fallback && Array.isArray(saved.sections)
                ? saved.sections.map((sec) => {
                    const fbSec = fallback.sections.find((f) => f.id === sec.id);
                    if (!fbSec) return sec;
                    const nextImages =
                      sec.images && fbSec.images
                        ? sec.images.map((img, idx) => {
                            const fbImg =
                              fbSec.images?.find((f) => f.id === img.id) ||
                              fbSec.images?.[idx];
                            if (fbImg && !img.src && fbImg.src) {
                              return fbImg;
                            }
                            return img;
                          })
                        : sec.images;
                    const shouldUpgradeTable =
                      fbSec.table &&
                      sec.table &&
                      sec.table.rows.length === 3 &&
                      sec.table.rows.every((r) => /-r[1-3]$/.test(r.id)) &&
                      fbSec.table.rows.length !== sec.table.rows.length;
                    const shouldUpgradeSec4 =
                      sec.id === 'bt3-sec-4' &&
                      sec.body.startsWith('Qua 3 vòng thử nghiệm') &&
                      !sec.closingNote &&
                      Boolean(fbSec.closingNote);
                    const shouldUpgradeSec5 =
                      sec.id === 'bt3-sec-5' &&
                      sec.body.startsWith('Từ kết quả đối chiếu');
                    const shouldUpgradeSec6 =
                      sec.id === 'bt3-sec-6' &&
                      sec.body.startsWith('Quá trình thực hành thiết kế câu lệnh');
                    if (shouldUpgradeSec4 || shouldUpgradeSec5 || shouldUpgradeSec6) {
                      return fbSec;
                    }
                    const shouldClearTaskBody =
                      !fbSec.body &&
                      ((sec.id === 'bt3-sec-1' &&
                        sec.body.startsWith('Thử nghiệm 3 mức độ câu lệnh')) ||
                        (sec.id === 'bt3-sec-2' &&
                          sec.body.startsWith('So sánh cách AI giải thích')) ||
                        (sec.id === 'bt3-sec-3' &&
                          sec.body.startsWith('Thử nghiệm khả năng sinh bộ câu hỏi')));
                    return {
                      ...sec,
                      body: shouldClearTaskBody ? '' : sec.body,
                      images: nextImages,
                      table: shouldUpgradeTable ? fbSec.table : sec.table,
                    };
                  })
                : saved.sections;

            const nextMemberReviews =
              saved.id === 'bai-tap-4' &&
              fallback?.memberReviews &&
              (!Array.isArray(saved.memberReviews) ||
                saved.memberReviews.length === 0)
                ? fallback.memberReviews
                : saved.memberReviews;

            const nextLessonsLearned =
              saved.id === 'bai-tap-4' &&
              fallback?.lessonsLearned &&
              !saved.lessonsLearned
                ? fallback.lessonsLearned
                : saved.lessonsLearned;

            const nextEvidenceImages =
              saved.id === 'bai-tap-4' &&
              fallback?.evidenceImages &&
              (!Array.isArray(saved.evidenceImages) ||
                saved.evidenceImages.length === 0)
                ? fallback.evidenceImages
                : saved.evidenceImages;

            if (fallback && !saved.youtubeUrl && fallback.youtubeUrl) {
              return {
                ...saved,
                subtitle: nextSubtitle,
                gallery: nextGallery,
                sections: hydratedSections,
                evaluationTable: nextEvaluationTable,
                harvardReferences: nextHarvardReferences,
                memberReviews: nextMemberReviews,
                lessonsLearned: nextLessonsLearned,
                evidenceImages: nextEvidenceImages,
                youtubeUrl: fallback.youtubeUrl,
                youtubeCaption: fallback.youtubeCaption,
              };
            }
            return {
              ...saved,
              subtitle: nextSubtitle,
              gallery: nextGallery,
              sections: hydratedSections,
              evaluationTable: nextEvaluationTable,
              harvardReferences: nextHarvardReferences,
              memberReviews: nextMemberReviews,
              lessonsLearned: nextLessonsLearned,
              evidenceImages: nextEvidenceImages,
              ...(needsTableUpgrade && fallback
                ? {
                    isSampleContent: fallback.isSampleContent,
                    sampleNotice: fallback.sampleNotice,
                    objectives: fallback.objectives,
                  }
                : {}),
            };
          })
        : DEFAULT_PORTFOLIO_DATA.assignments,
      summary:
        parsed.summary && !parsed.summary.isSampleContent && parsed.summary.favoriteHighlight
          ? {
              ...parsed.summary,
              favoriteHighlight: parsed.summary.favoriteHighlight.endsWith(
                'giúp giờ học âm nhạc trở nên sống động và gần gũi hơn với học sinh.'
              )
                ? DEFAULT_PORTFOLIO_DATA.summary.favoriteHighlight
                : parsed.summary.favoriteHighlight,
            }
          : DEFAULT_PORTFOLIO_DATA.summary,
    };
  } catch {
    return DEFAULT_PORTFOLIO_DATA;
  }
}

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => loadSavedData());
  const [currentPage, setCurrentPage] = useState<PageId>(() =>
    getPageFromHash(window.location.hash)
  );
  const [lightboxImage, setLightboxImage] = useState<LightboxState | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editorTarget, setEditorTarget] = useState<EditorTarget>('bai-tap-1');

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getPageFromHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const meta = NAV_PAGES.find((p) => p.id === currentPage);
    if (meta) {
      document.title = `${meta.fullTitle} | Tạ Hiền Hương`;
    }
  }, [currentPage]);

  const navigate = useCallback((page: PageId) => {
    const targetHash = `#/${page}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentPage(page);
  }, []);

  const handleSaveData = (next: PortfolioData) => {
    setData(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage quota errors cleanly
    }
  };

  const handleResetData = () => {
    setData(DEFAULT_PORTFOLIO_DATA);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage removal errors
    }
  };

  const openEditorFor = (target: EditorTarget) => {
    setEditorTarget(target);
    setEditorOpen(true);
  };

  const activeAssignment = data.assignments.find((a) => a.id === currentPage);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-[#FFF0EE] text-[#3F2E3E]">
        <Navbar
          currentPage={currentPage}
          onNavigate={navigate}
          onOpenEditor={() =>
            openEditorFor(
              currentPage === 'tong-ket'
                ? 'tong-ket'
                : activeAssignment
                  ? activeAssignment.id
                  : 'bai-tap-1'
            )
          }
        />

        <main className="relative flex-1">
          <BotanicalDecor />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              {currentPage === 'about' && (
                <AboutPage
                  about={data.about}
                  onNavigate={navigate}
                  onZoomImage={setLightboxImage}
                />
              )}

              {currentPage === 'du-an' && (
                <ProjectsPage
                  assignments={data.assignments}
                  onNavigate={navigate}
                />
              )}

              {activeAssignment && (
                <AssignmentDetailPage
                  assignment={activeAssignment}
                  onNavigate={navigate}
                  onZoomImage={setLightboxImage}
                  onEditAssignment={(id) => openEditorFor(id)}
                  onUpdateAssignment={(updated) =>
                    handleSaveData({
                      ...data,
                      assignments: data.assignments.map((a) =>
                        a.id === updated.id ? updated : a
                      ),
                    })
                  }
                />
              )}

              {currentPage === 'tong-ket' && (
                <SummaryPage
                  summary={data.summary}
                  assignments={data.assignments}
                  onNavigate={navigate}
                  onEditSummary={() => openEditorFor('tong-ket')}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer about={data.about} onNavigate={navigate} />
        <ScrollToTopButton />

        <LightboxModal
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />

        {editorOpen && (
          <Suspense fallback={null}>
            <ContentEditorModal
              isOpen={editorOpen}
              initialTarget={editorTarget}
              data={data}
              onSave={handleSaveData}
              onResetAll={handleResetData}
              onClose={() => setEditorOpen(false)}
            />
          </Suspense>
        )}
      </div>
    </MotionConfig>
  );
}

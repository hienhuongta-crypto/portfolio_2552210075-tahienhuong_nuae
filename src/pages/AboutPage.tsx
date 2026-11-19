import React, { useRef, useState } from 'react';
import { ArrowRight, BookOpen, Compass, Music, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { AboutProfile, PageId } from '../types/portfolio';
import { SafeImage } from '../components/MediaWidgets';
import { PortraitBotanicalFrame } from '../components/BotanicalDecor';

const HOBBY_REEL_VIDEO =
  './assets/aistudio/1794755208713_62227895373114535_1206011158121209286_4facd545.mp4';

interface AboutPageProps {
  about: AboutProfile;
  onNavigate: (page: PageId) => void;
  onZoomImage: (img: { src: string; alt: string; caption?: string }) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  about,
  onNavigate,
  onZoomImage,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
      if (!nextMuted && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col justify-center space-y-8 lg:col-span-7">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-wide text-[#9E4D45]">
              {about.academicYear} · Ngành {about.major} · Học phần {about.courseName}
            </p>

            <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-[#3F2E3E] sm:text-5xl">
              {about.greeting}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-[#6E566C]">
              Chào mừng bạn đến với Portfolio học tập cá nhân của tôi trong học phần{' '}
              <span className="font-semibold text-[#3F2E3E]">{about.courseName}</span>.
              Đây là không gian lưu giữ, hệ thống hóa các sản phẩm thực hành và hành trình
              kết nối nghệ thuật âm nhạc với công nghệ số.
            </p>

            <div className="border-t border-[#E8A598]/60 pt-5 space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#9E4D45] mb-2">
                  Sở thích cá nhân
                </p>
                <p className="text-sm font-medium text-[#3F2E3E]">
                  {about.hobbies.join(' · ')}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-2">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#3F2E3E]">
                  <video
                    ref={videoRef}
                    src={HOBBY_REEL_VIDEO}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    aria-label="Video ngắn giới thiệu sở thích và hoạt động nghệ thuật của Tạ Hiền Hương"
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Bật âm thanh video' : 'Tắt âm thanh video'}
                    className="absolute right-3 bottom-3 inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#E8A598] bg-[#FDFBF7]/90 px-3 py-1.5 text-xs font-semibold text-[#3F2E3E] shadow-sm transition-colors hover:bg-[#FDE68A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2E3E]"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="h-4 w-4 text-[#9E4D45]" />
                        <span>Bật tiếng</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="h-4 w-4 text-[#9E4D45]" />
                        <span>Tắt tiếng</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:col-span-5">
          <div className="relative flex flex-col items-center">
            <div className="relative">
              <PortraitBotanicalFrame />
              <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-2 border-[#E8A598] bg-[#FDFBF7] p-2.5 shadow-sm sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <div
                  onClick={() =>
                    onZoomImage({
                      src: about.heroImage,
                      alt: 'Chân dung Tạ Hiền Hương — Sinh viên Sư phạm Âm nhạc',
                      caption: `${about.fullName} · Ngành ${about.major}`,
                    })
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onZoomImage({
                        src: about.heroImage,
                        alt: 'Chân dung Tạ Hiền Hương — Sinh viên Sư phạm Âm nhạc',
                        caption: `${about.fullName} · Ngành ${about.major}`,
                      });
                    }
                  }}
                  aria-label="Phóng to ảnh chân dung Tạ Hiền Hương"
                  className="h-full w-full cursor-pointer overflow-hidden rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E4D45]"
                >
                  <SafeImage
                    src={about.heroImage}
                    alt="Chân dung Tạ Hiền Hương"
                    className="h-full w-full rounded-full"
                    imgClassName="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <p className="mt-5 text-xs font-medium text-[#6E566C]">
              {about.fullName} · {about.major}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 space-y-8">
        <div className="max-w-3xl space-y-2">
          <p className="text-xs font-semibold text-[#9E4D45]">01. Định hướng cá nhân</p>
          <h2 className="font-display text-3xl font-bold text-[#3F2E3E]">
            Mục tiêu học tập và định hướng phát triển cá nhân
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="flex flex-col justify-between rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-7">
            <div className="space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0EE] text-[#9E4D45]">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#3F2E3E]">
                Mục tiêu học tập
              </h3>
              <p className="text-sm leading-relaxed text-[#6E566C]">{about.studyGoal}</p>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-7">
            <div className="space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0EE] text-[#9E4D45]">
                <Music className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#3F2E3E]">
                Trong quá trình học đại học
              </h3>
              <p className="text-sm leading-relaxed text-[#6E566C]">
                {about.universityOrientation}
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-7">
            <div className="space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0EE] text-[#9E4D45]">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#3F2E3E]">
                Sau khi tốt nghiệp
              </h3>
              <p className="text-sm leading-relaxed text-[#6E566C]">
                {about.postGradOrientation}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-16 space-y-8">
        <div className="max-w-3xl space-y-2">
          <p className="text-xs font-semibold text-[#9E4D45]">02. Giá trị cốt lõi</p>
          <h2 className="font-display text-3xl font-bold text-[#3F2E3E]">
            Mục tiêu của Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {about.portfolioGoals.map((goal, idx) => (
            <article
              key={goal.title}
              className="rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:p-7 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-semibold tabular-nums text-[#9E4D45] pt-1">
                  0{idx + 1}.
                </span>
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-semibold text-[#3F2E3E]">
                    {goal.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6E566C]">
                    {goal.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#E8A598] bg-[#FDFBF7] p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#9E4D45]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>Hành trình thực hành</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-[#3F2E3E]">
              Sẵn sàng xem toàn bộ 06 bài tập Nhập môn Công nghệ số
            </h3>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('du-an')}
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-lg border border-[#D4B44C] bg-[#FDE68A] px-5 py-2.5 text-sm font-semibold text-[#3F2E3E] hover:bg-[#FCD34D]"
          >
            Đi tới trang Dự án
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

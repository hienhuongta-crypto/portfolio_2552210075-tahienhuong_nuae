export type PageId =
  | 'about'
  | 'du-an'
  | 'bai-tap-1'
  | 'bai-tap-2'
  | 'bai-tap-3'
  | 'bai-tap-4'
  | 'bai-tap-5'
  | 'bai-tap-6'
  | 'tong-ket';

export interface NavPageMeta {
  id: PageId;
  shortLabel: string;
  fullTitle: string;
  hash: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  alt: string;
}

export interface EvaluationRow {
  id: string;
  sourceTitle: string;
  author: string;
  publisher: string;
  method: string;
  citation: string;
  currency: string;
  overview: string;
}

export interface ExternalResource {
  id: string;
  label: string;
  type: 'youtube' | 'drive' | 'pdf' | 'web';
  url: string;
  note?: string;
}

export interface SectionTableRow {
  id: string;
  cells: string[];
}

export interface AssignmentSection {
  id: string;
  heading: string;
  body: string;
  bulletPoints?: string[];
  closingNote?: string;
  codeBlock?: string;
  images?: GalleryImage[];
  table?: {
    title?: string;
    headers: string[];
    rows: SectionTableRow[];
  };
}

export interface HarvardReference {
  id: string;
  authorYear: string;
  articleTitle?: string;
  italicTitle: string;
  publicationDetails?: string;
  url?: string;
}

export interface MemberReview {
  id: string;
  name: string;
  strengths: string;
  limitations: string;
}

export interface AssignmentItem {
  id: Exclude<PageId, 'about' | 'du-an' | 'tong-ket'>;
  number: number;
  chapterLabel: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  coverImage: string;
  coverAlt: string;
  isSampleContent: boolean;
  sampleNotice: string;
  objectives: string[];
  sections: AssignmentSection[];
  gallery: GalleryImage[];
  evaluationTable?: EvaluationRow[];
  harvardReferences?: HarvardReference[];
  memberReviews?: MemberReview[];
  lessonsLearned?: string;
  evidenceImages?: GalleryImage[];
  youtubeUrl?: string;
  youtubeCaption?: string;
  resources: ExternalResource[];
}

export interface AboutProfile {
  fullName: string;
  academicYear: string;
  major: string;
  courseName: string;
  email: string;
  greeting: string;
  hobbies: string[];
  studyGoal: string;
  universityOrientation: string;
  postGradOrientation: string;
  portfolioGoals: {
    title: string;
    description: string;
  }[];
  heroImage: string;
}

export interface SummaryContent {
  title: string;
  subtitle: string;
  isSampleContent: boolean;
  sampleNotice: string;
  overviewParagraph: string;
  takeawaysIntro?: string;
  keyTakeaways: {
    heading: string;
    detail: string;
  }[];
  favoriteHighlight?: string;
  challengesFaced?: string;
  futureCommitment: string;
}

export interface PortfolioData {
  about: AboutProfile;
  assignments: AssignmentItem[];
  summary: SummaryContent;
}

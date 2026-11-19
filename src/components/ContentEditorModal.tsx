import React, { useEffect, useState } from 'react';
import { Download, Plus, RotateCcw, Trash2, Upload, X } from 'lucide-react';
import {
  AssignmentItem,
  EvaluationRow,
  PortfolioData,
} from '../types/portfolio';

export type EditorTarget = AssignmentItem['id'] | 'tong-ket';

interface ContentEditorModalProps {
  isOpen: boolean;
  initialTarget: EditorTarget;
  data: PortfolioData;
  onSave: (nextData: PortfolioData) => void;
  onResetAll: () => void;
  onClose: () => void;
}

export const ContentEditorModal: React.FC<ContentEditorModalProps> = ({
  isOpen,
  initialTarget,
  data,
  onSave,
  onResetAll,
  onClose,
}) => {
  const [target, setTarget] = useState<EditorTarget>(initialTarget);
  const [draft, setDraft] = useState<PortfolioData>(data);
  const [confirmReset, setConfirmReset] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTarget(initialTarget);
      setDraft(data);
      setConfirmReset(false);
      setSavedFeedback(false);
    }
  }, [isOpen, initialTarget, data]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentAssignment =
    target !== 'tong-ket'
      ? draft.assignments.find((a) => a.id === target)
      : undefined;

  const updateAssignment = (
    id: AssignmentItem['id'],
    updater: (prev: AssignmentItem) => AssignmentItem
  ) => {
    setDraft((prev) => ({
      ...prev,
      assignments: prev.assignments.map((item) =>
        item.id === id ? updater(item) : item
      ),
    }));
  };

  const handleImageUpload = (
    id: AssignmentItem['id'],
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) return;
      updateAssignment(id, (item) => ({
        ...item,
        gallery: [
          ...item.gallery,
          {
            id: `img-${Date.now()}`,
            src: result,
            alt: file.name,
            caption: `Ảnh minh họa tải lên (${file.name})`,
          },
        ],
      }));
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-ta-hien-huong.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleSave = () => {
    onSave(draft);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Trình chỉnh sửa nội dung mẫu Portfolio"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3F2E3E]/65 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#E8A598] bg-[#FDFBF7] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#E8A598]/70 bg-[#FFF0EE] px-6 py-4">
          <div className="min-w-0">
            <h2 className="font-display text-xl font-bold text-[#3F2E3E]">
              Tùy chỉnh nội dung từ tệp BT NMCNS.docx
            </h2>
            <p className="text-xs text-[#6E566C] truncate">
              Thay thế nội dung mẫu bằng bài làm thực tế, ảnh chụp, bảng biểu và đường dẫn YouTube/Drive.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng trình chỉnh sửa"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#E8A598] bg-[#FDFBF7] text-[#3F2E3E] hover:bg-[#FDE68A]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 border-b border-[#E8A598]/50 bg-[#FDFBF7] px-6 py-3">
          {draft.assignments.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTarget(item.id)}
              className={`min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                target === item.id
                  ? 'border border-[#D4B44C] bg-[#FDE68A] text-[#3F2E3E]'
                  : 'text-[#6E566C] hover:bg-[#FFF0EE]'
              }`}
            >
              Bài {item.number}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setTarget('tong-ket')}
            className={`min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
              target === 'tong-ket'
                ? 'border border-[#D4B44C] bg-[#FDE68A] text-[#3F2E3E]'
                : 'text-[#6E566C] hover:bg-[#FFF0EE]'
            }`}
          >
            Tổng kết
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {currentAssignment && (
            <>
              <div className="flex items-center justify-between gap-4 rounded-xl border border-[#E8A598]/70 bg-[#FFF0EE]/70 p-4">
                <div>
                  <p className="text-xs font-semibold text-[#3F2E3E]">
                    Trạng thái hiển thị khung nhắc nội dung mẫu
                  </p>
                  <p className="text-xs text-[#6E566C]">
                    Tắt khung nhắc sau khi bạn đã dán xong nội dung thật từ Word.
                  </p>
                </div>
                <label className="inline-flex cursor-pointer items-center gap-2 text-xs font-semibold text-[#3F2E3E]">
                  <input
                    type="checkbox"
                    checked={!currentAssignment.isSampleContent}
                    onChange={(e) =>
                      updateAssignment(currentAssignment.id, (prev) => ({
                        ...prev,
                        isSampleContent: !e.target.checked,
                      }))
                    }
                    className="h-4 w-4 accent-[#9E4D45]"
                  />
                  Đã cập nhật bài thật
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block space-y-1.5">
                  <span className="text-xs font-semibold text-[#3F2E3E]">
                    Tên bài tập
                  </span>
                  <input
                    type="text"
                    value={currentAssignment.title}
                    onChange={(e) =>
                      updateAssignment(currentAssignment.id, (prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className="w-full rounded-lg border border-[#E8A598] bg-white px-3 py-2 text-sm text-[#3F2E3E]"
                  />
                </label>

                <label className="block space-y-1.5">
                  <span className="text-xs font-semibold text-[#3F2E3E]">
                    Tên chương
                  </span>
                  <input
                    type="text"
                    value={currentAssignment.chapterLabel}
                    onChange={(e) =>
                      updateAssignment(currentAssignment.id, (prev) => ({
                        ...prev,
                        chapterLabel: e.target.value,
                      }))
                    }
                    className="w-full rounded-lg border border-[#E8A598] bg-white px-3 py-2 text-sm text-[#3F2E3E]"
                  />
                </label>
              </div>

              <label className="block space-y-1.5">
                <span className="text-xs font-semibold text-[#3F2E3E]">
                  Mô tả ngắn (hiển thị ở thẻ trang Dự án)
                </span>
                <textarea
                  rows={2}
                  value={currentAssignment.shortDescription}
                  onChange={(e) =>
                    updateAssignment(currentAssignment.id, (prev) => ({
                      ...prev,
                      shortDescription: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-[#E8A598] bg-white px-3 py-2 text-sm text-[#3F2E3E]"
                />
              </label>

              {currentAssignment.number === 5 && (
                <div className="space-y-3 rounded-xl border border-[#E8A598] bg-[#FFF0EE]/50 p-4">
                  <label className="block space-y-1.5">
                    <span className="text-xs font-semibold text-[#3F2E3E]">
                      Đường dẫn Video YouTube (Bài tập 5)
                    </span>
                    <input
                      type="url"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={currentAssignment.youtubeUrl || ''}
                      onChange={(e) =>
                        updateAssignment(currentAssignment.id, (prev) => ({
                          ...prev,
                          youtubeUrl: e.target.value,
                        }))
                      }
                      className="w-full rounded-lg border border-[#E8A598] bg-white px-3 py-2 text-sm text-[#3F2E3E]"
                    />
                  </label>
                  <label className="block space-y-1.5">
                    <span className="text-xs font-semibold text-[#3F2E3E]">
                      Chú thích video
                    </span>
                    <input
                      type="text"
                      value={currentAssignment.youtubeCaption || ''}
                      onChange={(e) =>
                        updateAssignment(currentAssignment.id, (prev) => ({
                          ...prev,
                          youtubeCaption: e.target.value,
                        }))
                      }
                      className="w-full rounded-lg border border-[#E8A598] bg-white px-3 py-2 text-sm text-[#3F2E3E]"
                    />
                  </label>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-[#3F2E3E]">
                    Các mục nội dung chi tiết
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      updateAssignment(currentAssignment.id, (prev) => ({
                        ...prev,
                        sections: [
                          ...prev.sections,
                          {
                            id: `sec-${Date.now()}`,
                            heading: `Mục ${prev.sections.length + 1}`,
                            body: '',
                          },
                        ],
                      }))
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8A598] bg-[#FFF0EE] px-3 py-1.5 text-xs font-semibold text-[#3F2E3E] hover:bg-[#FDE68A]"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Thêm mục
                  </button>
                </div>

                {currentAssignment.sections.map((sec, sIdx) => (
                  <div
                    key={sec.id}
                    className="space-y-3 rounded-xl border border-[#E8A598]/70 bg-white p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={sec.heading}
                        onChange={(e) =>
                          updateAssignment(currentAssignment.id, (prev) => ({
                            ...prev,
                            sections: prev.sections.map((s, idx) =>
                              idx === sIdx ? { ...s, heading: e.target.value } : s
                            ),
                          }))
                        }
                        className="w-full rounded-lg border border-[#E8A598]/60 px-3 py-1.5 text-sm font-semibold text-[#3F2E3E]"
                      />
                      {currentAssignment.sections.length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            updateAssignment(currentAssignment.id, (prev) => ({
                              ...prev,
                              sections: prev.sections.filter((_, idx) => idx !== sIdx),
                            }))
                          }
                          aria-label="Xóa mục"
                          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#9E4D45] hover:bg-[#FFF0EE]"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    <textarea
                      rows={3}
                      value={sec.body}
                      onChange={(e) =>
                        updateAssignment(currentAssignment.id, (prev) => ({
                          ...prev,
                          sections: prev.sections.map((s, idx) =>
                            idx === sIdx ? { ...s, body: e.target.value } : s
                          ),
                        }))
                      }
                      className="w-full rounded-lg border border-[#E8A598]/60 px-3 py-2 text-sm text-[#3F2E3E]"
                    />
                  </div>
                ))}
              </div>

              {currentAssignment.evaluationTable && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold text-[#3F2E3E]">
                      Bảng biểu đánh giá nguồn tin (Bài 2)
                    </h3>
                    <button
                      type="button"
                      onClick={() => {
                        const newRow: EvaluationRow = {
                          id: `row-${Date.now()}`,
                          sourceTitle: `${(currentAssignment.evaluationTable?.length || 0) + 1}. Tài liệu mới`,
                          author: '',
                          publisher: '',
                          method: '',
                          citation: '',
                          currency: '',
                          overview: '',
                        };
                        updateAssignment(currentAssignment.id, (prev) => ({
                          ...prev,
                          evaluationTable: [...(prev.evaluationTable || []), newRow],
                        }));
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8A598] bg-[#FFF0EE] px-3 py-1.5 text-xs font-semibold text-[#3F2E3E] hover:bg-[#FDE68A]"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Thêm hàng bảng
                    </button>
                  </div>

                  {currentAssignment.evaluationTable.map((row, rIdx) => (
                    <div
                      key={row.id}
                      className="space-y-2 rounded-xl border border-[#E8A598]/70 bg-white p-3"
                    >
                      <div className="flex items-start gap-2">
                        <input
                          type="text"
                          placeholder="STT & tên bài viết"
                          value={row.sourceTitle}
                          onChange={(e) =>
                            updateAssignment(currentAssignment.id, (prev) => ({
                              ...prev,
                              evaluationTable: prev.evaluationTable?.map((r, idx) =>
                                idx === rIdx ? { ...r, sourceTitle: e.target.value } : r
                              ),
                            }))
                          }
                          className="w-full rounded-lg border border-[#E8A598]/60 px-2.5 py-1.5 text-xs font-semibold text-[#3F2E3E]"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            updateAssignment(currentAssignment.id, (prev) => ({
                              ...prev,
                              evaluationTable: prev.evaluationTable?.filter(
                                (_, idx) => idx !== rIdx
                              ),
                            }))
                          }
                          aria-label="Xóa hàng"
                          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#9E4D45] hover:bg-[#FFF0EE]"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <input
                          type="text"
                          placeholder="Tác giả"
                          value={row.author}
                          onChange={(e) =>
                            updateAssignment(currentAssignment.id, (prev) => ({
                              ...prev,
                              evaluationTable: prev.evaluationTable?.map((r, idx) =>
                                idx === rIdx ? { ...r, author: e.target.value } : r
                              ),
                            }))
                          }
                          className="rounded-lg border border-[#E8A598]/60 px-2.5 py-1.5 text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Cơ quan xuất bản"
                          value={row.publisher}
                          onChange={(e) =>
                            updateAssignment(currentAssignment.id, (prev) => ({
                              ...prev,
                              evaluationTable: prev.evaluationTable?.map((r, idx) =>
                                idx === rIdx ? { ...r, publisher: e.target.value } : r
                              ),
                            }))
                          }
                          className="rounded-lg border border-[#E8A598]/60 px-2.5 py-1.5 text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Phương pháp nghiên cứu"
                          value={row.method}
                          onChange={(e) =>
                            updateAssignment(currentAssignment.id, (prev) => ({
                              ...prev,
                              evaluationTable: prev.evaluationTable?.map((r, idx) =>
                                idx === rIdx ? { ...r, method: e.target.value } : r
                              ),
                            }))
                          }
                          className="rounded-lg border border-[#E8A598]/60 px-2.5 py-1.5 text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Trích dẫn"
                          value={row.citation}
                          onChange={(e) =>
                            updateAssignment(currentAssignment.id, (prev) => ({
                              ...prev,
                              evaluationTable: prev.evaluationTable?.map((r, idx) =>
                                idx === rIdx ? { ...r, citation: e.target.value } : r
                              ),
                            }))
                          }
                          className="rounded-lg border border-[#E8A598]/60 px-2.5 py-1.5 text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Tính cập nhật"
                          value={row.currency}
                          onChange={(e) =>
                            updateAssignment(currentAssignment.id, (prev) => ({
                              ...prev,
                              evaluationTable: prev.evaluationTable?.map((r, idx) =>
                                idx === rIdx ? { ...r, currency: e.target.value } : r
                              ),
                            }))
                          }
                          className="rounded-lg border border-[#E8A598]/60 px-2.5 py-1.5 text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Tổng quan"
                          value={row.overview}
                          onChange={(e) =>
                            updateAssignment(currentAssignment.id, (prev) => ({
                              ...prev,
                              evaluationTable: prev.evaluationTable?.map((r, idx) =>
                                idx === rIdx ? { ...r, overview: e.target.value } : r
                              ),
                            }))
                          }
                          className="rounded-lg border border-[#E8A598]/60 px-2.5 py-1.5 text-xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-[#3F2E3E]">
                    Hình ảnh minh họa từ tệp Word
                  </h3>
                  <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E8A598] bg-[#FFF0EE] px-3 py-1.5 text-xs font-semibold text-[#3F2E3E] hover:bg-[#FDE68A]">
                    <Upload className="h-3.5 w-3.5" />
                    Tải ảnh chụp từ máy
                    <input
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => handleImageUpload(currentAssignment.id, e)}
                    />
                  </label>
                </div>

                <div className="space-y-2">
                  {currentAssignment.gallery.map((img, iIdx) => (
                    <div
                      key={img.id}
                      className="flex items-center gap-3 rounded-xl border border-[#E8A598]/60 bg-white p-2.5"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-12 w-16 shrink-0 rounded-lg object-cover bg-[#FFF0EE]"
                      />
                      <input
                        type="text"
                        value={img.caption}
                        onChange={(e) =>
                          updateAssignment(currentAssignment.id, (prev) => ({
                            ...prev,
                            gallery: prev.gallery.map((g, idx) =>
                              idx === iIdx ? { ...g, caption: e.target.value } : g
                            ),
                          }))
                        }
                        className="w-full rounded-lg border border-[#E8A598]/60 px-2.5 py-1.5 text-xs text-[#3F2E3E]"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          updateAssignment(currentAssignment.id, (prev) => ({
                            ...prev,
                            gallery: prev.gallery.filter((_, idx) => idx !== iIdx),
                          }))
                        }
                        aria-label="Xóa ảnh"
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#9E4D45] hover:bg-[#FFF0EE]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-[#3F2E3E]">
                  Đường dẫn Google Drive / PDF / Tài liệu
                </h3>
                {currentAssignment.resources.map((res, resIdx) => (
                  <div
                    key={res.id}
                    className="grid grid-cols-1 gap-2 rounded-xl border border-[#E8A598]/60 bg-white p-3 sm:grid-cols-2"
                  >
                    <input
                      type="text"
                      value={res.label}
                      onChange={(e) =>
                        updateAssignment(currentAssignment.id, (prev) => ({
                          ...prev,
                          resources: prev.resources.map((r, idx) =>
                            idx === resIdx ? { ...r, label: e.target.value } : r
                          ),
                        }))
                      }
                      className="rounded-lg border border-[#E8A598]/60 px-2.5 py-1.5 text-xs"
                    />
                    <input
                      type="url"
                      placeholder="https://drive.google.com/..."
                      value={res.url}
                      onChange={(e) =>
                        updateAssignment(currentAssignment.id, (prev) => ({
                          ...prev,
                          resources: prev.resources.map((r, idx) =>
                            idx === resIdx ? { ...r, url: e.target.value } : r
                          ),
                        }))
                      }
                      className="rounded-lg border border-[#E8A598]/60 px-2.5 py-1.5 text-xs"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {target === 'tong-ket' && (
            <div className="space-y-4">
              <label className="inline-flex cursor-pointer items-center gap-2 text-xs font-semibold text-[#3F2E3E]">
                <input
                  type="checkbox"
                  checked={!draft.summary.isSampleContent}
                  onChange={(e) =>
                    setDraft((prev) => ({
                      ...prev,
                      summary: {
                        ...prev.summary,
                        isSampleContent: !e.target.checked,
                      },
                    }))
                  }
                  className="h-4 w-4 accent-[#9E4D45]"
                />
                Đã thay bằng nội dung Tổng kết thật từ Word
              </label>

              <label className="block space-y-1.5">
                <span className="text-xs font-semibold text-[#3F2E3E]">
                  1. Trải nghiệm và cảm nhận cá nhân về quá trình thực hiện Portfolio
                </span>
                <textarea
                  rows={5}
                  value={draft.summary.overviewParagraph}
                  onChange={(e) =>
                    setDraft((prev) => ({
                      ...prev,
                      summary: {
                        ...prev.summary,
                        overviewParagraph: e.target.value,
                      },
                    }))
                  }
                  className="w-full rounded-lg border border-[#E8A598] bg-white px-3 py-2 text-sm text-[#3F2E3E]"
                />
              </label>

              <label className="block space-y-1.5">
                <span className="text-xs font-semibold text-[#3F2E3E]">
                  3a. Điểm tâm đắc nhất
                </span>
                <textarea
                  rows={4}
                  value={draft.summary.favoriteHighlight || ''}
                  onChange={(e) =>
                    setDraft((prev) => ({
                      ...prev,
                      summary: {
                        ...prev.summary,
                        favoriteHighlight: e.target.value,
                      },
                    }))
                  }
                  className="w-full rounded-lg border border-[#E8A598] bg-white px-3 py-2 text-sm text-[#3F2E3E]"
                />
              </label>

              <label className="block space-y-1.5">
                <span className="text-xs font-semibold text-[#3F2E3E]">
                  3b. Thách thức gặp phải
                </span>
                <textarea
                  rows={4}
                  value={draft.summary.challengesFaced || ''}
                  onChange={(e) =>
                    setDraft((prev) => ({
                      ...prev,
                      summary: {
                        ...prev.summary,
                        challengesFaced: e.target.value,
                      },
                    }))
                  }
                  className="w-full rounded-lg border border-[#E8A598] bg-white px-3 py-2 text-sm text-[#3F2E3E]"
                />
              </label>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E8A598]/70 bg-[#FFF0EE] px-6 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleExportJson}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#E8A598] bg-[#FDFBF7] px-3 py-2 text-xs font-semibold text-[#3F2E3E] hover:bg-[#FFF0EE]"
            >
              <Download className="h-3.5 w-3.5" />
              Xuất JSON
            </button>

            {!confirmReset ? (
              <button
                type="button"
                onClick={() => setConfirmReset(true)}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#E8A598] bg-[#FDFBF7] px-3 py-2 text-xs font-medium text-[#9E4D45] hover:bg-[#FFF0EE]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Khôi phục mẫu gốc
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onResetAll();
                    setConfirmReset(false);
                    onClose();
                  }}
                  className="min-h-[38px] rounded-lg bg-[#9E4D45] px-3 py-1.5 text-xs font-semibold text-white"
                >
                  Xác nhận khôi phục
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmReset(false)}
                  className="min-h-[38px] rounded-lg border border-[#E8A598] bg-white px-3 py-1.5 text-xs text-[#3F2E3E]"
                >
                  Hủy
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {savedFeedback && (
              <span className="text-xs font-semibold text-[#9E4D45]">
                Đã lưu thay đổi!
              </span>
            )}
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex min-h-[42px] items-center justify-center rounded-lg border border-[#D4B44C] bg-[#FDE68A] px-5 py-2 text-sm font-semibold text-[#3F2E3E] hover:bg-[#FCD34D]"
            >
              Lưu cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

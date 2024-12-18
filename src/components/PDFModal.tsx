// src/components/PDFModal.tsx
import { useEffect } from "react";
import { HiX, HiDownload } from "react-icons/hi";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

function PDFModal({ isOpen, onClose, pdfUrl, title }: PDFModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="bg-white w-full max-w-4xl rounded-lg shadow-xl">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
            <div className="flex items-center gap-4">
              <a
                href={pdfUrl}
                download
                className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:text-primary-700 transition-colors"
              >
                <HiDownload className="w-5 h-5" />
                <span>Download</span>
              </a>
              <button
                onClick={onClose}
                className="text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-4 h-[80vh]">
            <iframe
              src={pdfUrl}
              className="w-full h-full rounded-lg"
              title={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFModal;

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TourEnquiryForm from './TourEnquiryForm';

export default function TourEnquiryModal({ isOpen, onClose, selectedTour }) {
  const modalRef = useRef(null);
  
  // Handle ESC key and focus trapping
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div 
            ref={modalRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white w-full max-w-3xl rounded-[24px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
              <div>
                <h2 id="modal-title" className="text-2xl font-serif font-bold text-forest">
                  Plan Your Journey
                </h2>
                {selectedTour && (
                  <p className="text-sm text-charcoal/60 mt-1">
                    Enquiring about: <span className="font-semibold text-charcoal">{selectedTour.title}</span>
                  </p>
                )}
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-cream hover:bg-forest hover:text-white text-charcoal flex items-center justify-center transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <TourEnquiryForm selectedTour={selectedTour} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

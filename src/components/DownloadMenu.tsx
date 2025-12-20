import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, User, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { downloadResume, downloadVCard, trackDownload } from '@/lib/downloadUtils';

export default function DownloadMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadResume = () => {
    downloadResume();
    trackDownload('Resume');
    setIsOpen(false);
  };

  const handleDownloadVCard = () => {
    downloadVCard();
    trackDownload('Contact Card');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="gap-2"
      >
        <Download className="size-4" />
        Download
        <ChevronDown className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl z-50 overflow-hidden"
            >
              <div className="p-2 space-y-1">
                <button
                  onClick={handleDownloadResume}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                >
                  <FileText className="size-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Resume</div>
                    <div className="text-xs text-muted-foreground">PDF format</div>
                  </div>
                </button>

                <button
                  onClick={handleDownloadVCard}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                >
                  <User className="size-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Contact Card</div>
                    <div className="text-xs text-muted-foreground">vCard format</div>
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

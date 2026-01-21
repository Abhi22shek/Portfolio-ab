import { FileText, } from 'lucide-react';

import { downloadResume,  trackDownload } from '@/lib/downloadUtils';

export default function DownloadMenu() {

  const handleDownloadResume = () => {
    downloadResume();
    trackDownload('Resume');
  };

  

  return (
    <div className="relative">
       <button
                  onClick={handleDownloadResume}
                  className="w-full border-2 border-border hover:border-primary flex bg-accent/50 items-center gap-2 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                >
                  <FileText className="size-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Resume</div>
                  </div>
                </button>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Link2, Twitter, Linkedin, Facebook, Mail, Check } from 'lucide-react';
import { Button } from './ui/button';
import {
  canUseWebShare,
  shareViaWebAPI,
  copyToClipboard,
  getTwitterShareUrl,
  getLinkedInShareUrl,
  getFacebookShareUrl,
  getEmailShareUrl,
  type ShareOptions,
} from '@/lib/shareUtils';

interface ShareButtonProps {
  url: string;
  title: string;
  text?: string;
  className?: string;
}

export default function ShareButton({ url, title, text, className = '' }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareOptions: ShareOptions = { url, title, text };

  const handleWebShare = async () => {
    const success = await shareViaWebAPI(shareOptions);
    if (success) {
      setIsOpen(false);
    }
  };

  const handleCopyLink = async () => {
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSocialShare = (platform: 'twitter' | 'linkedin' | 'facebook' | 'email') => {
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = getTwitterShareUrl(shareOptions);
        break;
      case 'linkedin':
        shareUrl = getLinkedInShareUrl(shareOptions);
        break;
      case 'facebook':
        shareUrl = getFacebookShareUrl(shareOptions);
        break;
      case 'email':
        shareUrl = getEmailShareUrl(shareOptions);
        break;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className={`${className}`}
          aria-label="Share"
        >
          <Share2 className="size-4" />
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

              {/* Share Menu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl z-50 overflow-hidden"
              >
                <div className="p-2 space-y-1">
                  {/* Web Share API (if available) */}
                  {canUseWebShare() && (
                    <button
                      onClick={handleWebShare}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                    >
                      <Share2 className="size-4 text-muted-foreground" />
                      <span className="text-sm">Share...</span>
                    </button>
                  )}

                  {/* Copy Link */}
                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                  >
                    {copied ? (
                      <Check className="size-4 text-green-500" />
                    ) : (
                      <Link2 className="size-4 text-muted-foreground" />
                    )}
                    <span className="text-sm">{copied ? 'Copied!' : 'Copy Link'}</span>
                  </button>

                  <div className="h-px bg-border my-1" />

                  {/* Social Media */}
                  <button
                    onClick={() => handleSocialShare('twitter')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                  >
                    <Twitter className="size-4 text-muted-foreground" />
                    <span className="text-sm">Share on Twitter</span>
                  </button>

                  <button
                    onClick={() => handleSocialShare('linkedin')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                  >
                    <Linkedin className="size-4 text-muted-foreground" />
                    <span className="text-sm">Share on LinkedIn</span>
                  </button>

                  <button
                    onClick={() => handleSocialShare('facebook')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                  >
                    <Facebook className="size-4 text-muted-foreground" />
                    <span className="text-sm">Share on Facebook</span>
                  </button>

                  <button
                    onClick={() => handleSocialShare('email')}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                  >
                    <Mail className="size-4 text-muted-foreground" />
                    <span className="text-sm">Share via Email</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

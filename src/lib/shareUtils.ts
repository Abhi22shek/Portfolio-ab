/**
 * Share utilities for portfolio
 */

export interface ShareOptions {
    url: string;
    title: string;
    text?: string;
}

/**
 * Check if Web Share API is available
 */
export function canUseWebShare(): boolean {
    return typeof navigator !== 'undefined' && 'share' in navigator;
}

/**
 * Share using Web Share API (mobile)
 */
export async function shareViaWebAPI(options: ShareOptions): Promise<boolean> {
    if (!canUseWebShare()) {
        return false;
    }

    try {
        await navigator.share({
            title: options.title,
            text: options.text || options.title,
            url: options.url,
        });
        return true;
    } catch (error) {
        // User cancelled or error occurred
        console.error('Web Share API error:', error);
        return false;
    }
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            const success = document.execCommand('copy');
            document.body.removeChild(textArea);
            return success;
        }
    } catch (error) {
        console.error('Copy to clipboard error:', error);
        return false;
    }
}

/**
 * Generate Twitter share URL
 */
export function getTwitterShareUrl(options: ShareOptions): string {
    const text = encodeURIComponent(options.text || options.title);
    const url = encodeURIComponent(options.url);
    return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
}

/**
 * Generate LinkedIn share URL
 */
export function getLinkedInShareUrl(options: ShareOptions): string {
    const url = encodeURIComponent(options.url);
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}

/**
 * Generate Facebook share URL
 */
export function getFacebookShareUrl(options: ShareOptions): string {
    const url = encodeURIComponent(options.url);
    return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
}

/**
 * Generate email share URL
 */
export function getEmailShareUrl(options: ShareOptions): string {
    const subject = encodeURIComponent(options.title);
    const body = encodeURIComponent(
        `${options.text || options.title}\n\n${options.url}`
    );
    return `mailto:?subject=${subject}&body=${body}`;
}

/**
 * Get current portfolio URL
 */
export function getPortfolioUrl(): string {
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }
    return 'https://yourwebsite.com'; // Fallback
}

/**
 * Get project URL
 */
export function getProjectUrl(projectId: string): string {
    return `${getPortfolioUrl()}/#projects?project=${projectId}`;
}

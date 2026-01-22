/**
 * Download utilities for portfolio
 */

/**
 * Trigger file download
 */
export function downloadFile(url: string, filename: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Download resume PDF
 */
export function downloadResume(): void {
    downloadFile('https://drive.google.com/file/d/1lW9I-95nHnYo4bmBuyPjYv55d6g-P_6-/view?usp=sharing', 'Abhishek_Borana_Resume.pdf');
}



/**
 * Track download event (placeholder for analytics)
 */
export function trackDownload(itemName: string): void {
    // Add analytics tracking here if needed
    console.log(`Downloaded: ${itemName}`);
}

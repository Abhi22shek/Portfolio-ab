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
    downloadFile('/resume.pdf', 'Abhishek_Borana_Resume.pdf');
}

/**
 * Generate vCard for contact information
 */
export function generateVCard(): string {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Abhishek Borana
TITLE:MERN & Next.js Full-Stack Developer
EMAIL:your.email@example.com
URL:${window.location.origin}
END:VCARD`;

    return vcard;
}

/**
 * Download vCard
 */
export function downloadVCard(): void {
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    downloadFile(url, 'Abhishek_Borana.vcf');
    URL.revokeObjectURL(url);
}

/**
 * Download QR code as PNG
 */
export function downloadQRCode(canvas: HTMLCanvasElement, filename: string = 'portfolio-qr.png'): void {
    canvas.toBlob((blob) => {
        if (blob) {
            const url = URL.createObjectURL(blob);
            downloadFile(url, filename);
            URL.revokeObjectURL(url);
        }
    });
}

/**
 * Track download event (placeholder for analytics)
 */
export function trackDownload(itemName: string): void {
    // Add analytics tracking here if needed
    console.log(`Downloaded: ${itemName}`);
}

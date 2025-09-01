'use client'

type ShareButtonProps = {
    title: string;
    url?: string;
};

export default function ShareButton({ title, url }: ShareButtonProps) {
    const handleShare = async () => {
        const shareUrl = url || window.location.href;
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    url: shareUrl,
                });
            } catch (error) {
                // User cancelled the share or an error occurred
                console.log('Share cancelled or failed:', error);
            }
        } else {
            // Fallback: copy to clipboard
            try {
                await navigator.clipboard.writeText(shareUrl);
                // You could add a toast notification here
                alert('Link copied to clipboard!');
            } catch (error) {
                console.error('Failed to copy link:', error);
            }
        }
    };

    return (
        <button 
            onClick={handleShare}
            className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
            title="Share this post"
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
        </button>
    );
}

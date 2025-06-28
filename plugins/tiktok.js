module.exports = async (message, sock) => {
    if (message.text.toLowerCase().includes('tiktok')) {
        await sock.sendMessage(message.chat, { text: '📱 TikTok video downloader support enabled.' });
    }
};

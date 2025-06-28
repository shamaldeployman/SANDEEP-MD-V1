module.exports = async (message, sock) => {
    if (message.text.toLowerCase().includes('youtube')) {
        await sock.sendMessage(message.chat, { text: '▶️ YouTube downloader enabled. Send a video link.' });
    }
};

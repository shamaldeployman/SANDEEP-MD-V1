module.exports = async (message, sock) => {
    if (message.text.toLowerCase().includes('facebook')) {
        await sock.sendMessage(message.chat, { text: '📥 Facebook video download link support coming soon.' });
    }
};

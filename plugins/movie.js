module.exports = async (message, sock) => {
    if (message.text.toLowerCase().includes('movie')) {
        await sock.sendMessage(message.chat, { text: '🍿 Movie search feature coming soon! (Sinhala subtitles supported)' });
    }
};

module.exports = async (message, sock) => {
    if (message.text.toLowerCase().includes('subtitle')) {
        await sock.sendMessage(message.chat, { text: '🎬 Sinhala subtitle download enabled. Provide movie name.' });
    }
};

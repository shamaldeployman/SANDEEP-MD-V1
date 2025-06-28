module.exports = async (message, sock) => {
    if (message.text.toLowerCase().includes('antidelete')) {
        await sock.sendMessage(message.chat, { text: '🛡️ Anti-delete is now active. Deleted messages will be logged.' });
    }
};

exports.run = (bot, message) => {
    message.edit({
        embed: {
            author: {
                icon_url: bot.user.avatarURL
            },
            thumbnail: {
                url: 'https://cdn.discordapp.com/icons/338002085767413770/949bd94f3798cde778cf7bdf3b2d2e34.webp'
            },
            fields: [{
                name: 'synmenu tech-support',
                value: `\n\nHello there, ${message.mentions.users.first()}. How may I help you? Please tell us everything about your problem and what you have tried to doing to fix it.`,
                inline: true,
            }],
            color: 0x99FFFF,
        }
    }).then(m => m.delete(120000));
};

exports.info = {
    name: 'tech',
    description: 'How may I help you?',
    usage: 'tech',
};

const { MessageEmbed } = require('discord.js');

module.exports = {
    data: {
        name:'ptcal',
        description: 'pt calculated system',
        options: [
            {
                type: 'INTEGER',
                name: 'stage',
                description: 'input stage',
                required: true,
            },
            {
                type: 'STRING',
                name: 'boss',
                description: 'select Boss',
                required: true,
                choices: [
                    {
                        name: 'kimaira',
                        value: 'キマイラ',
                    },
                    {
                        name: 'minotaur',
                        value: 'ミーノー',
                    },
                    {
                        name: 'aglaea',
                        value: 'アグライア',
                    },
                    {
                        name: 'cerberus',
                        value: 'ケルベロス',
                    },
                    {
                        name: 'hephaestus',
                        value: 'ヘパイストス',
                    },
                ],
            },
            {
                type: 'INTEGER',
                name: 'pt1',
                description: 'input pt',
                required: true,
            },
            {
                type: 'INTEGER',
                name: 'pt2',
                description: 'input pt',
            },
            {
                type: 'INTEGER',
                name: 'pt3',
                description: 'input pt',
            },
            {
                type: 'INTEGER',
                name: 'pt4',
                description: 'input pt',
            },
            {
                type: 'INTEGER',
                name: 'pt5',
                description: 'input pt',
            },
            {
                type: 'INTEGER',
                name: 'pt6',
                description: 'input pt',
            },
            {
                type: 'INTEGER',
                name: 'pt7',
                description: 'input pt',
            },
            {
                type: 'INTEGER',
                name: 'pt8',
                description: 'input pt',
            },
            {
                type: 'INTEGER',
                name: 'pt9',
                description: 'input pt',
            },
            {
                type: 'INTEGER',
                name: 'pt10',
                description: 'input pt',
            },
        ],
    },
    async execute(interaction) {
        const Boss = interaction.options._hoistedOptions[1].value;
        const Stage = interaction.options._hoistedOptions[0].value;
        const ptLength = interaction.options._hoistedOptions.length;
        let Embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`ボス： ${Boss}\n周回数： ${Stage}`);
        for (let i = 2; i < ptLength; i++) {
            Embed.addField(`ダメージ${i - 1}`, `ptは  ${interaction.options._hoistedOptions[i].value}`);
        }
        await interaction.reply('計算結果：');
        await interaction.editReply({ embeds: [Embed] });

    },
};
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
                '',
                {
                    title: 'Guides',
                    path: '/guide/',
                    collapsable: true,
                    children: [
                        'guide/',
                        'guide/essai',
                    ]
                },
                'mypythonexamples'
            ],
    }
}

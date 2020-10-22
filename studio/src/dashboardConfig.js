export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f91efb4a0d848013c515a44',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7bs4iag9',
                  apiId: '9f10d104-eae1-4643-93aa-d9e6a20431bb'
                },
                {
                  buildHookId: '5f91efb42b5a900088f5d0e8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vmcvyzex',
                  apiId: '6d25087b-6a94-44d0-a613-d1c196df11fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/warleyerocha/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vmcvyzex.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/index.tsx',
        templateFile: './template/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/styles.ts',
        templateFile: './template/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: './template/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/test.tsx',
        templateFile: './template/test.tsx.hbs'
      }
    ]
  })
}

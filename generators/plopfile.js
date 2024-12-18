module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("basics", {
    description: "Create new instance of backend components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Components.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
    ], // array of actions
  });
};

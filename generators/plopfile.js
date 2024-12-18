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
        path: "../src/controllers/{{camelCase name}}.controller.ts",
        templateFile: "templates/controllers.ts.hbs",
      },
      {
        type: "add",
        path: "../src/services/{{camelCase name}}.service.ts",
        templateFile: "templates/services.ts.hbs",
      },
      {
        type: "add",
        path: "../src/schemas/{{camelCase name}}.schema.ts",
        templateFile: "templates/schemas.ts.hbs",
      },
      {
        type: "add",
        path: "../src/routes/{{camelCase name}}.routes.ts",
        templateFile: "templates/routes.ts.hbs",
      },
      {
        path: "../src/controllers/_index.ts",
        pattern: /(\/\/ CONTROLLER IMPORTS)/g,
        template:
          "import {{pascalCase name}}Controller from './{{camelCase name}}.controller';\n$1",
        type: "modify",
      },
      {
        path: "../src/controllers/_index.ts",
        pattern: /(\/\/ CONTROLLER EXPORTS)/g,
        template:
          "export const {{camelCase name}}Controller = new {{pascalCase name}}Controller();\n$1",
        type: "modify",
      },
      {
        path: "../src/routes/_index.ts",
        pattern: /(\/\/ ROUTE IMPORTS)/g,
        template:
          "import * as {{pascalCase name}}Routes from './{{camelCase name}}.routes';\n$1",
        type: "modify",
      },
      {
        path: "../src/routes/_index.ts",
        pattern: /(\/\/ ROUTE EXPORTS)/g,
        template: "{{pascalCase name}}Routes.routes(app);\n$1",
        type: "modify",
      },
    ], // array of actions
  });
};

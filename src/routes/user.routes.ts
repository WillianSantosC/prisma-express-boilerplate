import { Router } from "express";
import { userController } from "../controllers/_index";
import { userSchema } from "../schemas/user.schema";
import wrapValidation from "../middlewares/validateRoutes";

export function routes(app: Router) {
  app.post(
    "/user",
    wrapValidation(userController.createUser, userSchema.create),
    () => {
      // #swagger.tags = ["User"]
      /*  #swagger.parameters['userRecord'] = {
                in: 'body',
                description: 'Create a new user.',
                schema: {
                  
                 }
        } */
      /* #swagger.responses[201] = {
            description: 'User created',
            schema: {
            
                }
        } */
    },
  );

  app.patch(
    "/user/:id",
    wrapValidation(userController.updateUser, userSchema.update),
    () => {
      // #swagger.tags = ["User"]
      /*  #swagger.parameters['userRecord'] = {
                in: 'body',
                description: 'Update a user.',
                schema: {
                  
                 }
        } */
      /* #swagger.responses[200] = {
            description: 'User updated',
            schema: {
                
                }
        } */
    },
  );

  app.get(
    "/user/:id",
    wrapValidation(userController.retrieveUser, userSchema.retrieve),
    () => {
      // #swagger.tags = ["User"]
      /* #swagger.responses[200] = {
            description: 'Retrieve user',
            schema: {
                
                }
        } */
    },
  );

  app.delete(
    "/user/:id",
    wrapValidation(userController.deleteUser, userSchema.delete),
    () => {
      // #swagger.tags = ["User"]
      /* #swagger.responses[204] = {
            description: 'Delete a user',
            schema: ''
        } */
    },
  );
}

import { Router } from "express";
import * as UserRoutes from "./user.routes";
// ROUTE IMPORTS

export function initRoutes(app: Router) {
  UserRoutes.routes(app);
  // ROUTE EXPORTS
}

import { Router } from "express";
import * as RecordRoutes from "./record.routes";
// ROUTE IMPORTS

export function initRoutes(app: Router) {
  RecordRoutes.routes(app);
  // ROUTE EXPORTS
}

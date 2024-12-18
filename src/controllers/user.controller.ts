import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  constructor(private userService = new UserService()) {}

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).json("");
    } catch (error) {
      next(error);
    }
  };

  retrieveUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json("Hello world");
    } catch (error) {
      next(error);
    }
  };

  updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json("");
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(204).json("");
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;

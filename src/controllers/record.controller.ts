import { NextFunction, Request, Response } from 'express';
import { RecordService } from '../services/record.service';

export class RecordController {
  constructor(private recordService = new RecordService()) {}

  createRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).json('');
    } catch (error) {
      next(error);
    }
  };

  retrieveRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json('Hello world');
    } catch (error) {
      next(error);
    }
  };

  updateRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json('');
    } catch (error) {
      next(error);
    }
  };

  deleteRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(204).json('');
    } catch (error) {
      next(error);
    }
  };
}

export default RecordController;

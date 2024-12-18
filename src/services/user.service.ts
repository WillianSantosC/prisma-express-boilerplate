import { PrismaClient } from "@prisma/client";

export class UserService {
  constructor(private prisma = new PrismaClient()) {}

  async create() {}
}

import { PrismaClient } from '@prisma/client';

export class RecordService {
  constructor(private prisma = new PrismaClient()) {}

  async create() {
    const user = await this.prisma.user.create({ data: { name: 'teste' } });
  }
}

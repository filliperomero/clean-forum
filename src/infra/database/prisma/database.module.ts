import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Every module that imports DatabaseModule will have access to what we're exporting here
})
export class DatabaseModule {}

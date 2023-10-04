import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { PrismaQuestionsRepository } from './repositories/prisma-questions-repository'

// Interface/Abstract Class
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
  ],
  exports: [PrismaService, QuestionsRepository], // Every module that imports DatabaseModule will have access to what we're exporting here
})
export class DatabaseModule {}

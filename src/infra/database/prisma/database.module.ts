import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { PrismaQuestionsRepository } from './repositories/prisma-questions-repository'
import { PrismaStudentsRepository } from './repositories/prisma-students-repository'

// Interface/Abstract Class
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    {
      provide: StudentsRepository,
      useClass: PrismaStudentsRepository,
    },
  ],
  exports: [PrismaService, QuestionsRepository, StudentsRepository], // Every module that imports DatabaseModule will have access to what we're exporting here
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { FishModule } from './fish/fish.module';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { TasksModule } from './tasks/tasks.module';
import { SharedModule } from './shared/shared.module';
import { FormularioModule } from './formulario/formulario.module';

@Module({
  imports: [SharedModule, FishModule, CatsModule, TasksModule, FormularioModule],
  controllers: [AppController, CatsController, DogsController],
  providers: [AppService, CatsService],
})
export class AppModule {}

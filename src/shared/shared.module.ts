import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IMySQLProvider } from './domain/interfaces/imysql.provider';
import { MySQLProvider } from './infraestructure/providers/mysql.provider';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [ConfigService],
      name: 'mysql',
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get('DB_HOST'),
          port: parseInt(config.get('DB_PORT'), 10),
          username: config.get('DB_USER'),
          password: config.get<string>('DB_PASS'),
          database: config.get('DB_SCHEMA'),
          synchronize: false, // Debes cambiar a true si quieres sincronización automática de tablas (¡ten cuidado con producción!)
          autoLoadEntities: true, // Carga automática de entidades
          retryAttempts: 3, // Número de reintentos en caso de fallo de conexión
          retryDelay: 5000, // Tiempo de espera entre reintentos
        };
      },
    }),
  ],
  providers: [
    {
      provide: IMySQLProvider,
      useClass: MySQLProvider,
    },
  ],
  exports: [
    ConfigModule,
    TypeOrmModule,

    {
      provide: IMySQLProvider,
      useClass: MySQLProvider,
    },
  ],
})
export class SharedModule {}

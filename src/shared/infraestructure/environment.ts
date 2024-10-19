import * as dotenv from 'dotenv';

export class Environment {
  public static getInstance(): Environment {
    return this._instance;
  }

  private static _instance: Environment = new Environment();
  public port: number;
  public bdHost: string;
  public bdUser: string;
  public bdPass: string;
  public bdPort: number;
  public bdSchema: string;
  public logDir: string;
  public logName: string;

  constructor() {
    dotenv.config();
    this.port = Number(process.env.PORT) || 3000;
    this.bdHost = process.env.BD_HOST;
    this.bdUser = process.env.BD_USER;
    this.bdPass = process.env.BD_PASS;
    this.bdPort = Number(process.env.BD_PORT) || 0;
    this.bdSchema = process.env.BD_SCHEMA;
    this.logDir = process.env.LOG_DIR || './logs';
    this.logName = process.env.LOG_NAME || '';
  }
}

const environment = Environment.getInstance();
export default environment;

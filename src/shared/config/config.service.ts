import { Injectable, Inject } from '@nestjs/common';
import * as path from 'path'

interface EnvConfig {
  [key: string]: string
}
// phai hieu duoc ConfigService lam gi
@Injectable()
export class ConfigService {
  envConfig: EnvConfig

  constructor(
    @Inject("CONFIG_OPTIONS") private options
  ) {
    const configFilePath = `${process.env.NODE_ENV || 'development'}.env`
    const configFile = path.resolve(__dirname, '../../', options.folder, configFilePath);
    // this.envConfig = dotenv.parse(fs.readFileSync(configFile));
  }

  get(key: string): string {
    return this.envConfig[key]
  }
}

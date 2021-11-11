import * as AsyncMysql from "promise-mysql"
import * as config from "config";
import { error } from "console";



export class MySQL {
    private pool: Nullable<AsyncMysql.Pool> = null;
    private poolConfig: AsyncMysql.PoolConfig;

    constructor() {

        if (!config.has('mysql') || !config.has('mysql.database') || !config.has('mysql.keyFilename')) {
            throw error("no config");
          }

        console.log(config.get("mysql.host"))

        const options: AsyncMysql.PoolConfig = {
        database: config.get<string>('mysql.database'),
        host: config.get<string>('mysql.host'),
        port: config.get<number>('mysql.port'),
        user: config.get<string>('mysql.user'),
        password: config.get<string>('mysql.password'),

        };


        this.poolConfig = Object.assign({}, options);
    }

    public async query(sql: string, values?: string | number | any, scope?: ITxScope ): Promise<any>{
        try{
            if (!scope) {
                const pool = await this.getPoolAsync();
                if (!values) return await pool.query(sql);
                return await pool.query(sql, values);
            }
            if (!values) return await scope.connection.query(sql);
            return await scope.connection.query(sql, values);
        }
        catch (error) {
            const detail = error instanceof Error ? error.message : JSON.stringify(error);
            const status = 'failed to db query....';
            throw error;
        }
          
    }



    private async getPoolAsync(): Promise<AsyncMysql.Pool> {
        if (this.pool === null) {
          this.pool = await AsyncMysql.createPool(this.poolConfig);
        }
    
        return this.pool;
      }

}


type Action<T> = (arg: T) => Promise<void>;
type Nullable<T> = T | null;

export const mysql = new MySQL();

export interface ITxScope {
    connection: AsyncMysql.PoolConnection;
    releaser: Action<boolean>;
  }
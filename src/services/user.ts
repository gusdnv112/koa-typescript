import * as Koa from "koa"
import * as Router from "koa-router"
import { mysql } from "repository/mysql";

const router = new Router();


class userService {
    constructor( ){

    }

    public async test(): Promise<any>{
        try{
            // const columns: string[] = [];
            const columns: {}[] = [];

            columns.push({name:"test",value:"testv"});
            columns.push({name:"test2",value:"testv3"});

            const placeHolders: string[] = [];
            columns.forEach(() => placeHolders.push('?'));

            console.log("test :", columns, placeHolders.join(','));

        }catch{
            console.error("error");
        }
    }
    
    public async insert(
        id: number,
        name: string,
        age: number
        ){
            try{

                const columns: {name:string, value:any}[] = [];
                
                columns.push({ name:"id", value: id});
                columns.push({ name:"name", value: name});
                columns.push({ name:"age", value: age});
                console.log("columns: ",columns);
                const placeHolders: string[] = [];
                columns.forEach(() => placeHolders.push('?'));
                const sql = `INSERT INTO stuff VALUES(${placeHolders.join(", ")})`;
                console.log(sql);
                const values = columns.map(( field ) => field.value );
                console.log("values :", values);
                const result = await mysql.query(sql,values); 
                console.log(result);
                return result;

            }catch{
                console.error("eororororor");
                
            }

    }
     
}

interface IResponse{
    id: Number,
    name: String,
    age: String
}


export const service = new userService();
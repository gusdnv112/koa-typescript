import promisemysql from "promise-mysql";
import mysql from "mysql";
import * as config from "config/dev.json"

const connection = mysql.createConnection(config.mysql);




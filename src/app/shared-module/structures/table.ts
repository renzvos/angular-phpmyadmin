import { database } from "./database";

export class table{

    database : database;
    name : string;

    constructor(database : database , name : string)
    {
        this.database = database
        this.name = name
    }

}
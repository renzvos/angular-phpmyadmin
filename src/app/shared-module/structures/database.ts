import { server } from "./server";
import { table } from "./table";

export class database
{
    server : server
    name : string
    tables : table[] | null = null

    constructor(server : server , name : string)
    {
        this.server = server
        this.name = name
    }

    getTables()
    {
        this.tables =  [new table(this,"okok" ) , new table(this, "nanana")]
    }

}
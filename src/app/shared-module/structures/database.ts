import { server } from "./server";
import { table } from "./table";

export class database
{
    server : server
    name : string

    constructor(server : server , name : string)
    {
        this.server = server
        this.name = name
    }

    getTables():table[]
    {
        return [new table(this,"okok" ) , new table(this, "nanana")]
    }

}
import { database } from "./database"


export class server {

    ipaddress : string
    databases : database[] | null =  null
    

    constructor(ipaddress: string)
    {
        this.ipaddress = ipaddress
    }

    getInfo():server_info
    {
        return {
        connection_collation : "",
        type : "",
        connection: "",
        version : "",
        charset : ""
        }
    }

    loadDatabases()
    {
        this.databases = [new database(this,"rex"),new database(this,"rex"),new database(this,"rex")]
    }



    

}

export interface server_info
{
    connection_collation : string
    type : string
    connection: string
    version : string
    charset : string
}

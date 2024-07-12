export interface IUser {

    nome: string
    cognome: string
    fotoUser: string
    username: string
    email: string
    password: string
    recapitoTelefonico: string
    roles: iRole[];

  }

  export interface iRole{
    id?:number;
    roleType:string;
  }

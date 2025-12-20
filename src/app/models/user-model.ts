export class UserModel {

    constructor(
        public fullName: string,
        public email: string,
        public password: string,
        public google: boolean = false,
        public img: string = '',
        public role?: string,
        public _id?: string
    ) { }
}
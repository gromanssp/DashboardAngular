export class Response {

    constructor(
        public ok: boolean,
        public usuario?: string,
        public token?: string,
        public id?: string,
        public img: string = '',
        public menu?: []
    ) { }
}
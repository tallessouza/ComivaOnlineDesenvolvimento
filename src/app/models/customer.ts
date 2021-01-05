export class Customer {
    constructor(
        public idEmp: number,
        public idCli: number,
        public codRepErp: string,
        public codCliErp: string,
        public cpfCnpj: string,
        public fantasia: string,
        public razao: string,
        public contato1: string,
        public foneContato1: string,
        public cep: string,
        public uf: string,
        public cidade: string,
        public endereco: string,
        public bairro: string,
        public emailCli: string,
        public emailFin: string,
        public emailFis: string,
        public obs: string,

        public insEstadual: string,
        public grupo: string,
        public emailContato1: string,
        public contato2: string,
        public foneContato2: string,
        public emailContato2: string,
        public foneCli: string,
        public limiteTotal: number,
        public dataCadastro: string,
        public dataPriCompra: string,
        public rede: string,
        public codTabErp: string,
        public codPlaErpPadrao: string,
        public cliGuid?: string,
    ) { }
}

interface Address {
  rua: string;
  bairro: string;
  numero: number;
  cidade: string;
  estado: string;
}

export interface CreateUserDto {
  name: string;
  age: number;
  address: Address;
  phone: string;
  cpf: string;
}

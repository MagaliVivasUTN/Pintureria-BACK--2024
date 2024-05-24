export class Sucursal {
    id: number;
    direccion: string;
    telefono: number;
    productos: any[] = [];
  
    constructor(id: number, direccion: string, telefono: number) {
      this.id = id;
      this.direccion = direccion;
      this.telefono = telefono;
    }
  }
  
import { Sucursal } from './sucursal';

export class Pintureria {
  sucursales: Array<Sucursal> = [];
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  createSucursal(direccion: string, telefono: number) {
    const id = this.sucursales.length + 1;
    const sucursal = new Sucursal(id, direccion, telefono);
    this.sucursales.push(sucursal);
    return sucursal;
  }

  showSucursal(id: number) {
    const sucursal = this.sucursales.find(s => s.id === id);
    if (sucursal) {
      console.log(sucursal);
      return sucursal;
    } else {
      console.error("No se encontró la sucursal solicitada");
      return null;
    }
  }

  searchSucursal(id: number) {
    const sucursal = this.sucursales.find(s => s.id === id);
    if (sucursal) {
      return sucursal;
    } else {
      console.error("No se encontró la sucursal solicitada");
      return null;
    }
  }

  delSucursal(id: number) {
    const index = this.sucursales.findIndex(s => s.id === id);
    if (index !== -1) {
      this.sucursales.splice(index, 1);
      console.log("Sucursal eliminada con éxito");
      return true;
    } else {
      console.error("Sucursal no encontrada");
      return false;
    }
  }

  updateSucursal(id: number, direccion: string, telefono: number) {
    const sucursal = this.searchSucursal(id);
    if (sucursal) {
      sucursal.direccion = direccion;
      sucursal.telefono = telefono;
      return true;
    } else {
      console.error("Sucursal no encontrada");
      return false;
    }
  }
}

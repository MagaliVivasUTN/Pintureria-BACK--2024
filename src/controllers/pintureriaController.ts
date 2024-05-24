import { Request, Response } from 'express';
import { Pintureria } from '../models/pintureria';

const pintureria = new Pintureria("Rio Color");

export const createSucursal = (req: Request, res: Response) => {
  const { direccion, telefono } = req.body;
  const sucursal = pintureria.createSucursal(direccion, telefono);
  res.status(201).json(sucursal);
};

export const getSucursal = (req: Request, res: Response) => {
  const { id } = req.params;
  const sucursal = pintureria.showSucursal(Number(id));
  if (sucursal) {
    res.json(sucursal);
  } else {
    res.status(404).send('Sucursal no encontrada');
  }
};


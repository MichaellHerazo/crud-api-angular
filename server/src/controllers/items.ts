import { Request, Response } from "express";
import Item from "../models/item";

export const getItems = async (req: Request, res: Response) => {
  const listItems = await Item.findAll();

  res.json(listItems);
};

export const getItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = await Item.findByPk(id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({
      msg: "No existe un item con el id " + id,
    });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = await Item.findByPk(id);

  if (!item) {
    res.status(404).json({
      msg: "No existe un item con el id " + id,
    });
  } else {
    await item.destroy();
    res.json({
      msg: "El item fue eliminado con éxito!",
    });
  }
};

export const postItem = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    await Item.create(body);
    res.json({
      msg: "El producto fue agregado con éxito!",
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Ocurrió un error, comuniquese con soporte",
    });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const item = await Item.findByPk(id);

    if (item) {
      await item.update(body);
      res.json({
        msg: "El producto fue actualizado con éxito!",
      });
    } else {
      res.status(404).json({
        msg: "No existe un item con el id " + id,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Ocurrió un error, comuniquese con soporte",
    });
  }
};

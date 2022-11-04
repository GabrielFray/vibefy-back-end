import { Response, Request } from "express";
import { deleteUserByIdService } from "../../services/adm/deleteUserById.service";

export const deleteUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const user = await deleteUserByIdService(id);
  return res.status(204).json({ menssage: "usuario desativado" });
};

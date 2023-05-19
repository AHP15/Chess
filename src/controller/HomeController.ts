import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";


export const HomeController = (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World" });
}

export const UsersController = async (req: Request, res: Response) => {
    const prismaClient = new PrismaClient();
   await prismaClient.user.findMany().then((users) => {
        res.status(200).json({ users });
    });
}

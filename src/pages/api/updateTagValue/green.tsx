// pages/api/updateTagValue/green.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { value } = req.body;

    try {
      const updatedTag = await prisma.tag.update({
        where: { topic: 'greenTruck1' }, // Met le bon topic correspondant au tag "green"
        data: { value },
      });

      res.status(200).json(updatedTag);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du tag "green" :', error);
      res.status(500).json({ error: 'Erreur serveur lors de la mise à jour du tag "green"' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}


// api/getAllTags.tsx

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const tags = await prisma.tag.findMany();
            res.status(200).json(tags);
        } catch (error) {
            // console.error('Erreur lors de la récupération des tags:', error.message);
            res.status(500).json({ error: 'Erreur serveur lors de la récupération des tags' });
        }
    } else {
        res.status(405).json({ error: 'Méthode non autorisée' });
    }
}
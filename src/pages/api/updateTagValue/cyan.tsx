// pages/api/updateTagValue/green.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '~/broker.mjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

    try {
      client.publish("/groupe3/evt/GreenTruck3", "1");
      client.publish("/groupe3/evt/BlueTruck3", "1");
      client.publish("/groupe3/evt/RedTruck3", "0");

      res.status(200).json({ message: 'Tag "red" mis à jour' });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du tag "green" :', error);
      res.status(500).json({ error: 'Erreur serveur lors de la mise à jour du tag "green"' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}

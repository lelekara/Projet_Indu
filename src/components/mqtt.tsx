import React, { useEffect, useState } from 'react';
import mqttClient from '~/pages/api/mqttClient';


const mqttTest: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Abonne-toi à un sujet MQTT
    mqttClient.subscribe('/#');

    // Écoute les messages du sujet
    mqttClient.on('message', (topic, value) => {
      setMessage(value.toString());
    });

    // N'oublie pas de te désabonner lorsque le composant est démonté
    return () => {
      mqttClient.unsubscribe('/#');
    };
  }, []); // Assure-toi de dépendances vides pour ne t'abonner qu'une seule fois

  return (
    <div>
      <p>Dernier message MQTT reçu : {message}</p>
    </div>
  );
};

export default mqttTest;
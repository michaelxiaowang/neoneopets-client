import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonButtons } from '@ionic/react';
import React, { useState } from 'react';

import './Login.css';

const Login: React.FC = () => {

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NeoNeopets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="login-content">
          
        <IonCard>
          <IonToolbar>
            <IonTitle className="ion-justify-content-center" size="large">Login</IonTitle>
          </IonToolbar>
          
          <IonInput className="login-input" type="text" value={username} placeholder="Username/Email" onIonChange={e => setUsername(e.detail.value!)} />
          <IonInput className="login-input" type="password" value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value!)} />
          <IonToolbar className="buttons">
            <IonButtons>
              <IonButton className="login-button" expand="block">Login</IonButton>
              <IonButton className="login-button" expand="block">Register</IonButton>
            </IonButtons>
          </IonToolbar>
          
        </IonCard>
          
      </IonContent>
    </IonPage>
  )
}

export default Login;
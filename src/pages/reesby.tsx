import React from 'react';
import { IonPage, IonToolbar, IonHeader, IonContent, IonTitle, IonRow, IonCol, IonText, IonButton , IonImg, IonList, IonListHeader, IonAvatar, IonIcon, IonLabel} from '@ionic/react';
import './stylesheet.css';
import officeSpace from '../assets/img/officeSpace.jpeg';
import { code } from 'ionicons/icons';
import { Plugins } from '@capacitor/core';

const Reesby: React.FC = () => {

  const {Browser} = Plugins;

  const reesbyWeb = async () => {
    await Browser.open({url: 'https://www.reesby.com.au/'});
  };

    return (
        <IonPage className="Reesby">
        
        <IonHeader collapse="condense">
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reesby</IonTitle>
          </IonToolbar>
          
        </IonHeader>
          <IonRow>
            <IonCol className="Reesbycontent">
                  
                  <IonImg src={officeSpace} />
                  <IonText>Looking for a job, new career, or employees?</IonText>
                  <IonButton expand="full" size="large" onClick={() => reesbyWeb()}>Click here to see our website!</IonButton>
                    <IonList>
                      <IonListHeader>What we specilize in!</IonListHeader>
                      <IonAvatar slot="start">
                      <IonIcon icon={code}></IonIcon>
                      </IonAvatar>
                      <IonLabel>
                        <h2>Information Technology</h2>
                      </IonLabel>
                    </IonList>
                  <IonText>Upload Your Resume to find out more.</IonText>
                  <IonText>Get Job Matches.</IonText>
                  <IonButton size="small" shape="round">SUBMIT YOUR CV</IonButton>

            </IonCol>
          </IonRow>
        </IonContent>
        
      </IonPage>
    );
};

export default Reesby;

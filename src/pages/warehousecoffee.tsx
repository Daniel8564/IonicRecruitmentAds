import React from 'react';
import { IonPage, IonToolbar, IonHeader, IonContent, IonTitle, IonRow, IonCol, IonText, IonButton , IonImg } from '@ionic/react';
import './stylesheet.css';
import officeSpace from '../assets/img/officeSpace.jpeg';

const Warehousecoffee: React.FC = () => {
    return (
        <IonPage className="warehousecoffee">
        
        <IonHeader collapse="condense">
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Warehouse Coffee</IonTitle>
          </IonToolbar>
          
        </IonHeader>
          <IonRow>
            <IonCol className="Reesbycontent">
                  
                  <IonImg src={officeSpace} />
                  <IonText>Looking for a job, new career, or employees?</IonText>
                  <IonButton expand="full" size="large" >Click here to see our website!</IonButton>
                    
                  <IonText>Upload Your Resume to find out more.</IonText>
                  <IonText>Get Job Matches.</IonText>
                  <IonButton size="small" shape="round">SUBMIT YOUR CV</IonButton>

            </IonCol>
          </IonRow>
        </IonContent>
        
      </IonPage>
    );
};

export default Warehousecoffee;

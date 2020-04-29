import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonCard, IonIcon, IonImg, IonCardContent, IonCardTitle, IonText } from '@ionic/react';
import React from 'react';
import './stylesheet.css';
//import img
import Reesbylogo from '../assets/img/Reesbylogo.png';
import coffeeBeans from '../assets/img/coffeeBeans.jpeg';
//star icon for add to favorite
import { starOutline } from 'ionicons/icons';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader no-border>
        <IonToolbar>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol>
            <IonCard href="./reesby"> 
            <IonIcon className="favourite" icon={starOutline} />
              <IonImg src={Reesbylogo} />
              <IonCardContent>
                <IonCardTitle>
                  Welcome To Reesby!
                </IonCardTitle>
                <IonText>Looking for a Job or to change your career?</IonText>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard href="./warehousecoffee">
            <IonIcon className="favourite" icon={starOutline} />
              <IonImg src={coffeeBeans} />
              <IonCardContent>
                <IonCardTitle>
                  Warehouse coffee<br/> OPEN NOW!
                </IonCardTitle>
                <IonText>Come in and discounted coffee.</IonText>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { Plugins } from '@capacitor/core'

const Tab2: React.FC = () => {

  //for database storage
  const { Storage } = Plugins;
  //for hooks
  const [name, setName] = useState<string>();

  //add allitem
  const setallItem = async () => {
    const allshops = JSON.stringify([{
      id: 1,
      StoreName: 'Reesby',
      Ads: '5% discount on reseum'
    },{
      id: 2,
      StoreName: 'Cafe',
      Ads: 'buy one get one free'
    },{
      id: 3,
      StoreName: 'Bookstore',
      Ads: 'Special offer for students'
    }])

    await Storage.set({
      key: 'all',
      value: allshops
    });
  };

//set favoriteitem
const setfavItem = async () => {
  const favshops = JSON.stringify([{
    id: 1,
    StoreName: 'Reesby',
    Ads: '5% discount on reseum'
  }])

  await Storage.set({
    key: 'fav',
    value: favshops
  });
};

//get item
const getallItem = async () => {
  const allshops = await Storage.get({key: 'all'});
  const obj = JSON.parse((allshops.value!));
  //console.log(obj[0]['id']);
  console.log(JSON.parse((allshops.value)!));
  //console.log((userinfo.value));
   // const json = await userinfo.json();

};

//get item
const removeItem = async () => {
  await Storage.remove({key: 'all'});
};

//get key
const getKey = async () => {
  const keys = await Storage.keys();
  console.log(keys);
};

//clear database
const clearStorage = async () => {
  await Storage.clear();
};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorite</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="stacked">My name is {name}</IonLabel>
          <IonInput value={name} placeholder="Enter Name" onIonChange={e => setName(e.detail.value!)}></IonInput>
        </IonItem>
        <IonButton color="primary" onClick={() => setallItem()}>Add all to storage</IonButton>
        <IonButton color="medium" onClick={() => setfavItem()}>Add fav to storage</IonButton>
        <IonButton color="secondary" onClick={() => getallItem()}>Get all table from storage</IonButton>
        <IonButton color="warning" onClick={() => getKey()}>Get key</IonButton>
        <IonButton color="success" onClick={() => clearStorage()}>Clear database storage</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

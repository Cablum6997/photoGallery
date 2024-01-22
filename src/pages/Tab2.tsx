import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import { camera } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';


const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={photo.filepath}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={takePhoto}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

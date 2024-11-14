import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>ok</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div id="container">
          <strong>Ready to create an app?</strong>
          <p>Start with Ionic 
            <a target="_blank" rel="noopener noreferrer" 
            href="https://ionicframework.com/docs/components">UI Components</a>
          </p>
        </div>

      </IonContent>

    </IonPage>
  );
};

export default Home;

import { IonTabs, 
    IonTab, 
    IonContent, 
    IonTabBar, 
    IonTabButton, 
    IonIcon,
    IonLabel,
    IonButton
 } from "@ionic/react";

import { bookOutline, easelOutline, heart } from 'ionicons/icons';

import "./Inicio.scss";

const Inicio = () => {

    return (
        <IonContent>
            <div className="start-page">
                <div className="image"></div>
                <div className="info">
                    <h2>
                        <span>Seja bem-vindo </span>
                        <strong>O que deseja fazer?</strong>
                    </h2>
                    <IonButton>
                        <IonIcon icon={bookOutline}></IonIcon>
                        <IonLabel>Estudar</IonLabel>
                    </IonButton>
                    
                    <IonButton>
                        <IonIcon icon={easelOutline}></IonIcon>
                        <IonLabel>Dar aulas</IonLabel>
                    </IonButton>
                    <small>
                        Total de 285 conexões <br />
                        já realizadas  <IonIcon icon={heart}></IonIcon>
                    </small>
                </div>

            </div>
        </IonContent>
    )
}

export default Inicio;
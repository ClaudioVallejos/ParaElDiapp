import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonRouterOutlet, IonContent,
  IonLabel, IonList, IonItem, IonIcon,
  IonMenu, IonHeader, IonToolbar, IonTitle, IonMenuToggle, IonButton, IonMenuButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import AddActivity from './pages/AddActivity/AddActivity';
import AllActivities from './pages/AllActivities/AllActivities';

import { bodyOutline, newspaperOutline } from 'ionicons/icons';

/* Theme variables */
import './theme/variables.css';
import ActivityContextProvider from './Data/ActivityContextProvider';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="scheduleAppM1">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonMenuToggle>
            <IonList>
              <IonItem routerLink="/all-activities" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={bodyOutline} />
                <IonLabel> Todas las actividades </IonLabel>
              </IonItem>
            </IonList>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonList>
              <IonItem routerLink="/add-activities" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={newspaperOutline} />
                <IonLabel> Añadir Actividad </IonLabel>
              </IonItem>
            </IonList>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <ActivityContextProvider>
        <IonRouterOutlet id="scheduleAppM1">
          <Route exact path="/all-activities" component={AllActivities} />
          <Route exact path="/add-activities" component={AddActivity} />
          <Redirect to="/all-activities" />
        </IonRouterOutlet>
      </ActivityContextProvider>
    </IonReactRouter>

  </IonApp>
);

export default App;

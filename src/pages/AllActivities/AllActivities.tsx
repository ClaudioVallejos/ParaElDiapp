import {
    IonContent, IonHeader, IonGrid,
    IonPage, IonCol, IonRow,
    IonTitle, IonToolbar, IonButton, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonModal, IonIcon
} from '@ionic/react';
import ActivitiesContext, { Activity } from '../../Data/activities-context';
import CompleteActivityModal from '../CompleteActivityModal/CompleteActivityModal';
import React, { useContext, useState } from 'react';
import classes from './AllActivities.module.css';
import { checkmarkCircle } from 'ionicons/icons';

const AllActivities: React.FC = () => {

    const activitiesContext = useContext(ActivitiesContext);
    const [activityToComplete, setactivityToComplete] = useState<Activity>();
    

    const openModal = (activity: Activity) => {
        setactivityToComplete(activity);
    }

    const closeModal = () => {
        setactivityToComplete(undefined);
    }
    
    return (
        <React.Fragment>

            <IonModal isOpen={!!activityToComplete} swipeToClose={true}>
                <CompleteActivityModal activity={activityToComplete as Activity} dismissModal={closeModal} />
            </IonModal>

            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButton slot="start" color="tertiary">
                            <IonMenuButton />
                        </IonButton>
                        <IonTitle>Todas las actividades</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        {activitiesContext.activities.map(activity => (
                            <IonRow key={activity.id}>
                                <IonCol className="ion-text-center">
                                    <IonCard>
                                        <img src={activity.imageUrl} />
                                        <IonCardHeader>
                                            <IonCardTitle> {activity.hour}  </IonCardTitle>
                                            <IonCardSubtitle> {activity.title}  </IonCardSubtitle>
                                        </IonCardHeader>

                                        <IonCardContent>
                                            <p> {activity.description} </p>
                                        </IonCardContent>
                                        {activity.isComplete ?
                                            
                                            <IonItem >
                                                <IonIcon 
                                                    className={classes.FullWidth}
                                                    color="success"
                                                    icon={checkmarkCircle}
                                                />
                                            </IonItem>
                                            :
                                            <IonItem>
                                                <IonButton
                                                    className={classes.FullWidth}
                                                    color="success"
                                                    onClick={() => openModal(activity)}
                                                    fill="outline"
                                                >
                                                    Completar
                                                </IonButton>
                                            </IonItem>
                                        }
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        ))
                        }
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}
export default AllActivities;
import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import React, { useContext } from 'react'
import ActivitiesContext ,{ Activity } from '../../Data/activities-context';

interface CompleteActivityModalProps {
    activity: Activity,
    dismissModal: () => void;
}

const CompleteActivityModal: React.FC<CompleteActivityModalProps> = (props) => {
    
    const activityContext = useContext(ActivitiesContext);

    const handleConfirmCompletion = (activityId: string) => {
        activityContext.completeActivity(activityId);
        props.dismissModal();
    };
    
    return (
        <IonContent>
            <IonGrid className="ion-no-padding">
                <IonRow>
                    <IonCol className="ion-no-padding">
                        <IonImg src={props.activity.imageUrl} />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonText>
                            <h1>
                                {props.activity.title}
                            </h1>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center ion-no-padding">
                        <IonText color="medium">
                            <p> Estás seguro que quieres marcar esta actividad como <strong>completada</strong>?</p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonButton color="danger" onClick={() => props.dismissModal()}>
                            Cancelar
                        </IonButton>
                    </IonCol>
                    <IonCol className="ion-text-center">
                        <IonButton color="success" onClick={() => handleConfirmCompletion(props.activity.id)}>
                            Completar
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CompleteActivityModal;
import {
    IonContent, IonHeader, IonGrid,
    IonPage, IonCol, IonRow,
    IonTitle, IonToolbar, IonButton,
    IonMenuButton, IonSegment, IonSegmentButton,
    IonIcon, IonLabel, IonInput, IonItem, IonDatetime, IonToast,
} from '@ionic/react';
import { colorPalette, book, cafe, code, library } from 'ionicons/icons';
import React, { useContext, useRef, useState } from 'react';
import ActivitiesContext, { ActivityType } from './../../Data/activities-context';
import { useHistory } from 'react-router-dom';

const AddActivity: React.FC = () => {

    const [toastMsg, setToastMsg] = useState(false);

    const history = useHistory();

    const titleInput = useRef<HTMLIonInputElement>(null);
    const descriptionInput = useRef<HTMLIonInputElement>(null);
    const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
    const hourInput = useRef<HTMLIonDatetimeElement>(null);

    const ActivityContex = useContext(ActivitiesContext);
    const handleAddActivity = () => {
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const activityType = activityTypeInput.current?.value as ActivityType;
        const date = new Date(hourInput.current?.value as string);
        const hour = date.getHours() + ':' + date.getMinutes();

        if (title && description && activityType && hour) {
            ActivityContex.addActivity(title, hour, description, activityType);
            setToastMsg(true);
            history.replace('/all-activities');
            titleInput.current?.value as "";
            descriptionInput.current?.value as "";
            activityTypeInput.current?.value as "";
        }
    }

    return (
        <React.Fragment>
            <IonToast
                isOpen={toastMsg}
                onDidDismiss={() => setToastMsg(false)}
                message="actividad agregada con exito"
                duration={200}
            />

            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButton slot="start" color="tertiary">
                            <IonMenuButton />
                        </IonButton>
                        <IonTitle>Añadir Actividad</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonToolbar>
                                    <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} ref={activityTypeInput}>
                                        <IonSegmentButton value="lectura">
                                            <IonIcon src={book} />
                                        </IonSegmentButton>
                                        <IonSegmentButton value="hobbies">
                                            <IonIcon src={colorPalette} />
                                        </IonSegmentButton>
                                        <IonSegmentButton value="trabajo">
                                            <IonIcon src={cafe} />
                                        </IonSegmentButton>
                                        <IonSegmentButton value="desarrollo">
                                            <IonIcon src={code} />
                                        </IonSegmentButton>
                                        <IonSegmentButton value="estudio">
                                            <IonIcon src={library} />
                                        </IonSegmentButton>
                                    </IonSegment>
                                </IonToolbar>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Titulo</IonLabel>
                                    <IonInput type="text" ref={titleInput} />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Descripcion</IonLabel>
                                    <IonInput type="text" ref={descriptionInput} />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Hora</IonLabel>
                                    <IonDatetime displayFormat="H:MM" pickerFormat="H:MM" ref={hourInput} value={new Date().toISOString()} />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-center ion-margin-top">
                                <IonButton onClick={handleAddActivity} expand="block" fill="outline">
                                    Añadir
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}
export default AddActivity;
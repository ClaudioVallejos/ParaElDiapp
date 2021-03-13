
import React, { useState } from 'react'

import ActivitiesContext, { Activity, ActivityContextModel, ActivityType } from './activities-context';

const ActivityContextProvider: React.FC = (props) => {

    const [activities, setActivities] = useState<Activity[]>([
        {
            id: Math.random().toString(),
            title: "Desarrollar",
            description: "Codear un aplicación de gestión de tareas FrontEnd|: IONIC + REACJS. React Hooks, Context, props ",
            hour: "15:00",
            activityType: "desarrollo",
            imageUrl: "/assets/images/desarrollo.jpg",
            isComplete: false  
        },
        {
            id: Math.random().toString(),
            title: "Leer Factfulness",
            description: "Terminar el capítulo 2 del libro",
            hour: "18:00",
            activityType: "lectura",
            imageUrl: "/assets/images/lectura.jpg",
            isComplete: false
        }
    ]);
    
    const addActivity = (title: string, hour: string, description:string, activityType: ActivityType) => {
        let imageUrl = ''
        switch (activityType) {
            case activityType = 'estudio':
                imageUrl = "/assets/images/estudio.jpg"
                break;
            case activityType = 'hobbie':
                imageUrl = "/assets/images/hobbie.jpg"
                break;
            case activityType = 'trabajo':
                imageUrl = "/assets/images/trabajo.jpg"
                break;
            case activityType = 'lectura':
                imageUrl = "/assets/images/lectura.jpg"
                break;
            case activityType = 'desarrollo':
                imageUrl = "/assets/images/desarrollo.jpg"
                break;
            default:
                imageUrl = "/assets/images/general.jpg";
        };
        const newActivity : Activity = {
            id: Math.random().toString(),
            title,
            hour,
            description,
            activityType,
            imageUrl,
            isComplete: false
        };

        setActivities( currActivities => {
            return[...currActivities, newActivity]
        });
    };
    //se obtiene el id del la actividad seleccionada
    const completeActivity = (activityId: string) => {
        setActivities( (currActivities) => {
            const updateActivities = [...currActivities ]; //copia de las actividades en el estado
            const selectedActivityIndex = activities.findIndex( (act) => (act.id === activityId)); //selecciona indice
            const updateActivity = {...updateActivities[selectedActivityIndex]}; //obtiene la actividadd
            updateActivity.isComplete = true; //la actualiza
            updateActivities[selectedActivityIndex] = updateActivity; //la coloca en la copia de las actividades

            return (updateActivities); //retorna la copia actualizada
        });
    };

    const activityContext: ActivityContextModel = {
        activities,
        addActivity,
        completeActivity
    };

    return (<ActivitiesContext.Provider value={activityContext}>
        {props.children}
    </ActivitiesContext.Provider>
    );
};

export default ActivityContextProvider;
import React from 'react'

export type ActivityType = 'hobbie' | 'trabajo' | 'estudio' | 'general' | 'lectura' | 'desarrollo';

//parametros que tendrá de forma global la App

export interface Activity {
    id:             string;
    hour:           string;
    title:          string;
    description:    string;
    activityType:   ActivityType;
    imageUrl:       string;
    isComplete:     boolean;
}

//definicion de metodos que tendrá el contexto global

export interface ActivityContextModel {
    activities: Activity[];
    addActivity: (title: string, hour: string, description:string, activityType: ActivityType) => void;
    completeActivity: (activityId: string) => void;
}

//creacion del contexto e inicializacion
const ActivitiesContext = React.createContext<ActivityContextModel>({
    activities: [],
    addActivity: () => {},
    completeActivity: () => {}
});

export default ActivitiesContext;
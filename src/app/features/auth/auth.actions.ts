import { createAction, props } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';

export const loadSesion = createAction('[Auth] Load Auths', props<{ sesion: Sesion }>());

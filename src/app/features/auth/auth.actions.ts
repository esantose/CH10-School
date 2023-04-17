import { createAction, props } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';

export const loadSesion = createAction('[Auth] Load Auths', props<{ sesion: Sesion }>());

export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());

export const loginError = createAction('[Auth] Login', props<{ message: string }>());

export const logout = createAction('[Auth] Log Out');

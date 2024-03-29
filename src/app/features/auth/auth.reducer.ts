import { createFeature, createReducer, on } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
	sesion: Sesion;
}

export const initialState: AuthState = {
	sesion: {
		sesionActiva: false,
	},
};

export const authReducer = createReducer(
	initialState,
	on(AuthActions.loadSesion, (state, { sesion }) => {
		return { ...state, sesion: { sesionActiva: true, currentUser: sesion.currentUser } };
	})
);

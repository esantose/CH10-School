import { IUser } from './user';

export interface Sesion {
	sesionActiva: boolean;
	usuarioActivo?: IUser;
}

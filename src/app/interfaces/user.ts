export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';

export interface User {
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
  emailVerified: boolean,
  Direcciones: {
    Titulo: string,
    Direccion: string
  }[],
  NoCedula: string,
  NoTelefono: string,
}

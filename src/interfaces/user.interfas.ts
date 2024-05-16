export interface Auth {
  user: User;
  token: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
  isActive: boolean;
}

export enum Role {
  ADMIN = "Admin",
  USER = "User",
}

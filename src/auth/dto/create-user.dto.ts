import { Role } from '../roles/role.enum';

export class CreateUserDto {
  email: string;
  password: string;
  roles: Role[];
}

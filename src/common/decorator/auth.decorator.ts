import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { JwtAuthGuard, RolesGuard } from '../guard';
import { Role } from '../enum/role.enum';
import { ROLES_KEY } from '../constant/guard.constant';

export function Permission(...roles: Role[]) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(JwtAuthGuard, RolesGuard),
  );
}

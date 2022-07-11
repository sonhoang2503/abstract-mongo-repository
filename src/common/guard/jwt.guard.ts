import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWT } from '../constant/guard.constant';

@Injectable()
export class JwtAuthGuard extends AuthGuard(JWT) {}

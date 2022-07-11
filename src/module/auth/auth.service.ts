import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { BcryptService } from '../../util/services/bcrypt.service';
import { JwtService } from '@nestjs/jwt';

import { SignInDto, SignUpDto } from './entity/dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOne({ email: email });
    if (
      user &&
      (await this.bcryptService.comparePassword(password, user.password))
    ) {
      return user;
    }

    throw new UnauthorizedException('Invalid credentials! Please try again');
  }

  async login(data: SignInDto) {
    const { email, password } = data;
    const user = await this.validateUser(email, password);
    const payload = { sub: user.id, role: user.role };
    console.log(user, payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: SignUpDto) {
    const hash = await this.bcryptService.hashPassword(data.password, 13);
    const user = await this.userService.create({
      username: data.username,
      password: hash,
      email: data.email,
    });

    return user;
  }
}

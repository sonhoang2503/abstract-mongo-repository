import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

@Injectable()
export class BcryptService {
  // constructor(private){}

  hashPassword(password: string, salt: number): Promise<string> {
    return hash(password, salt);
  }

  comparePassword(password: string, hased: string): Promise<boolean> {
    return compare(password, hased);
  }
}

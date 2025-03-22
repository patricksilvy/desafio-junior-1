import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    
    if (!user) throw new UnauthorizedException('Usuário não encontrado.');
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) throw new UnauthorizedException('Senha inválida.');
    
    return user;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    
    const payload = { sub: user.id, email: user.email, role: user.role };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

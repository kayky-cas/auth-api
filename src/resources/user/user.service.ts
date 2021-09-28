import { Injectable } from '@nestjs/common';
import { DatabaseService } from '~@services/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { WhereUniqueUserDto } from './dto/where-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.databaseService.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.databaseService.user.findMany();
  }

  async findOne(whereUserUniqueDto: WhereUniqueUserDto) {
    return await this.databaseService.user.findUnique({
      where: whereUserUniqueDto,
    });
  }

  async update(
    whereUserUniqueDto: WhereUniqueUserDto,
    updateUserDto: UpdateUserDto,
  ) {
    return await this.databaseService.user.update({
      where: whereUserUniqueDto,
      data: updateUserDto,
    });
  }

  async remove(whereUserUniqueDto: WhereUniqueUserDto) {
    return this.databaseService.user.delete({ where: whereUserUniqueDto });
  }
}

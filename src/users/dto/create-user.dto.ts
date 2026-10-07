import {IsString, MinLegth,MaxLegth,IsEmail,IsDateString,IsOpcional} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(255)
  @MinLength(5)
  username: string;

  @IsEmail()
  email: string;


  @IsString()
  @MaxLength(255)
  @MinLength(5)
  password: string;

  @IsString()
  imagen: string;

  @IsDateString()
  @IsOptional()
  update: Date;
}



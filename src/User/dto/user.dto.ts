import { IsNotEmpty } from 'class-validator'

export class userDto {
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    age: number;
}
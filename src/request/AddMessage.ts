import { IsString, Length } from 'class-validator';

export class AddMessage {
    @IsString()
    @Length(1, 20)
    name!: string;
}

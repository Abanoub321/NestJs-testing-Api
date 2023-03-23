import ResponseInterface from "./ResponseInterface";
import { ApiProperty } from "@nestjs/swagger";
export default class Forbidden implements ResponseInterface {
    @ApiProperty({default: false})
    status: boolean;
    @ApiProperty({default: 403})
    code: number;
    @ApiProperty({default: 'Forbidden'})
    message: string;
}
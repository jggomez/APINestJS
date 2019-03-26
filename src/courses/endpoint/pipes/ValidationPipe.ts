import * as Joi from 'joi';
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
    constructor(private readonly schema: Object) { }

    transform(value: any, metadata: ArgumentMetadata) {
        console.log(this.schema);
        const { error } = Joi.validate(value, this.schema);
        if (error) {
            throw new BadRequestException('Validation failed');
        }
        return value;
    }
}
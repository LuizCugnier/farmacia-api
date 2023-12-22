import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isDateFormat', async: false })
export class IsDateFormatConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    // Validação customizada para verificar o fomato da data -> 'YYYY-MM-DD'
    if (!/^(\d{4})-(\d{2})-(\d{2})$/.test(value)) {
      return false;
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    // Error message when the validation fails
    return `${args.property} Data de nascimento deve estar no formato 'YYYY-MM-DD'`;
  }
}

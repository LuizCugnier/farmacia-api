import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isCpfFormat', async: false })
export class IsCpfFormatConstraint implements ValidatorConstraintInterface {
  validate(value: any, args?: ValidationArguments) {
    if (!/^(\d{3})-(\d{3})-(\d{3})-(\d{2})$/.test(value)) {
      return false;
    }
    return true;
  }

  defaultMessage(args?: ValidationArguments) {
    // Error message when the validation fails
    return `${args.property} CPF deve estar no formato 'xxx-xxx-xxx-xx'`;
  }
}

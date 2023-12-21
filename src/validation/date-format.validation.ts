import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isDateFormat', async: false })
export class IsDateFormatConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    // Custom validation logic for 'YYYY-MM-DD' format
    if (!/^(\d{4})-(\d{2})-(\d{2})$/.test(value)) {
      return false;
    }

    // Additional validation logic if needed

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    // Error message when the validation fails
    return `${args.property} must be in the 'YYYY-MM-DD' format`;
  }
}

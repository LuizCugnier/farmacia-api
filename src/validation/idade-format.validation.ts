import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'isIdadeValid', async: false })
export class IsIdadeValidConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (typeof value !== 'string') {
      return false; // A idade deve ser uma string
    }

    if (!value.match(/^\d+$/)) {
      return false; // A idade deve conter apenas números
    }

    if (value.length >= 3) {
      return false; // A idade deve ter menos de 3 caracteres
    }

    const parsedValue = parseInt(value, 10);

    if (parsedValue < 18) {
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    const propertyName = args.property;

    if (propertyName === 'idade' && typeof args.value !== 'string') {
      return 'A idade deve ser uma string';
    }

    if (propertyName === 'idade' && !args.value.match(/^\d+$/)) {
      return 'A idade deve conter apenas números';
    }

    if (propertyName === 'idade' && args.value.length >= 3) {
      return 'A idade deve ter menos de 3 caracteres';
    }
    const parsedValue = parseInt(args.value, 10);
    if (propertyName === 'idade' && parsedValue < 18) {
      return 'A idade deve ser maior que 18';
    }

    return 'Erro genérico de validação de idade';
  }
}

export function IsIdadeValid() {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: 'Erro genérico de validação de idade',
      },
      constraints: [],
      validator: IsIdadeValidConstraint,
    });
  };
}

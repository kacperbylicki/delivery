import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { ValidationOptions, registerDecorator } from "class-validator";

dayjs.extend(customParseFormat);

export function IsAdult(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: "isAdult",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const birthDateCode = value.substring(0, 6);

          const birthDate = dayjs(birthDateCode, "YYMMDD");
          const now = dayjs();

          const age = now.diff(birthDate, "year");

          return age >= 18;
        },
      },
    });
  };
}

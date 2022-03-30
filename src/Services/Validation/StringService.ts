import { string, StringSchema } from "yup";

// Libraries
import { AnyObject } from "yup/lib/object";

// Models
import { StringValidatorProperties } from "../../Models/Global/Validation/ValidatorConfiguration";

const BuildStringValidator = (request: StringValidatorProperties):
    StringSchema<string, AnyObject, string> => string()
        .when((value: string) => {
            if (request.IsRequired && !value) {
                return string().required(`${request.FieldText} is a required field.`);
            }

            const hasMaxLength = request.MaxLength !== null && request.MaxLength !== undefined;

            if (hasMaxLength && value.length > request.MaxLength) {
                return string().max(request.MaxLength, `${request.FieldText} max length is ${request.MaxLength} characters, currently ${value.length}`);
            }
        });

export default BuildStringValidator;
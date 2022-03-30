export interface BaseValidatorProperties {
    FieldText: string;

    IsRequired?: boolean;
};

export interface StringValidatorProperties extends BaseValidatorProperties {
    MaxLength?: number;
};
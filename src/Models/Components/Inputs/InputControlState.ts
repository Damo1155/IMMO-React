export interface InputControlProps {
    MaxLength?: number;

    Text: string;
    FieldIdentifier: string;

    IsRequired?: boolean;
    IsReadonly?: boolean;
    AsPlaceholder?: boolean;
}
// Models
import { PropertyType } from "../../TestDependencies/api";
import { MappedPropertyBase, MappedProperty } from "./PropertiesConfiguration";

export interface ModuleState {
    DisplayHelpMessage: boolean;
    IsProcessingSearch: boolean;

    Properties: Array<MappedProperty>;
    PropertyTypes: Array<PropertyType>;
    SelectedProperties: Array<MappedPropertyBase>;
}

export interface ModuleConfiguration {
    Identifiers: Identifiers;
    CustomMessages: CustomMessages;
}

interface CustomMessages {
    Search: string;
    Address: string;
    PropertyTypes: string;
    AddressRequired: string;
    LoadingProperties: string;
}

interface Identifiers {
    Address: string;
}
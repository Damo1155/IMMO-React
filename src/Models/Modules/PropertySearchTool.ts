// Models
import { string } from "yup";
import { PropertyType } from "../../TestDependencies/api";
import { MappedPropertyBase, MappedProperty } from "./PropertiesConfiguration";

export interface PropertySearchState {
    DisplayHelpMessage: boolean;
    IsProcessingSearch: boolean;

    Properties: Array<MappedProperty>;
    PropertyTypes: Array<PropertyType>;
    SelectedProperties: Array<MappedPropertyBase>;
}

export interface CustomMessages {
    Search: string;
    Address: string;
    PropertyTypes: string;
    AddressRequired: string;
    LoadingProperties: string;
}

export interface Identifiers {
    Address: string;
}
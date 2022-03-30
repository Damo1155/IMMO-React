// Models
import { MappedProperty } from "Models/Modules/PropertiesConfiguration";

export interface ModuleProps {    
    DisplayHelpMessage: boolean;
    IsProcessingSearch: boolean;

    Properties: Array<MappedProperty>;
}

export interface ModuleConfiguration {
    CustomMessages: CustomMessages;
}

interface CustomMessages {
    Address: string;
    Postcode: string;
    FloorArea: string;
    HelpMessage: string;
    PropertyType: string;
    SearchResults: string;
    NumberOfRooms: string;
    SelectProperty: string;
    ListOfProperties: string;
    NoPropertiesFound: string;
}
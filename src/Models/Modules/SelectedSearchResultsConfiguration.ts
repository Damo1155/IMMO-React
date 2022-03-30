// Models
import { MappedPropertyBase } from "Models/Modules/PropertiesConfiguration";

export interface ModuleProps {
    SelectedProperties: Array<MappedPropertyBase>;
}

export interface ModuleConfiguration {
    CustomMessages: CustomMessages;
}

interface CustomMessages {    
    Address: string;
    Postcode: string;
    FloorArea: string;
    NumberOfRooms: string;
    SelectedProperties: string;
    ListOfSelectedProperties: string;
}
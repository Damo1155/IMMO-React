export interface MappedPropertyBase {
    FloorArea: number;
    NumberOfRooms: number;

    Id: string;
    Address: string;
    Postcode: string;
}

export interface MappedProperty extends MappedPropertyBase {
    PropertyType: string;
    
    IsSelected: boolean;
}
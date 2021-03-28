export class JustifyContentTypes {
    property: string;
    description: string;

    constructor(property: string, description: string) {
        this.property = property;
        this.description = description;
    }

    toString() :string {
        return `${this.property} - ${this.description}`;
    }

}
import { SportType } from "./sport-type";

export class Team{
    protected readonly _name: string;
    protected readonly _country: string;
    protected readonly _sportType: SportType

    get name(): string {
        return this._name;
    }

    get country(): string {
        return this._country;
    }

    get sportType(): SportType {
        return this._sportType;
    }

    constructor(name: string, country: string, sportType: SportType) {
        this._name = name;
        this._country = country;
        this._sportType = sportType;
    }
}
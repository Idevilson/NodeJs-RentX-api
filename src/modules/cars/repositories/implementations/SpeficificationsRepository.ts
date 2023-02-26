import { Specification } from "../../model/Specification";
import { ICreateSpeficationDTO, ISpecificationRepository } from "../ISpecificationRepository";


class SpecificationsRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }
    
    create({ description, name }: ICreateSpeficationDTO): void {
        const speficication = new Specification();

        Object.assign(speficication, {
            name, 
            description,
            created_at: new Date(),
        });

        this.specifications.push(speficication);
    }

    findByName(name: string): Specification | undefined {
        const speficication = this.specifications.find(specification => specification.name === name);
        return speficication;
    }

}

export { SpecificationsRepository };
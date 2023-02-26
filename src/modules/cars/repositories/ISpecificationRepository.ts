import { Specification } from "../model/Specification";

interface ICreateSpeficationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpeficationDTO): void;
    findByName(name: string): Specification | undefined;
}

export {
    ISpecificationRepository,
    ICreateSpeficationDTO
};
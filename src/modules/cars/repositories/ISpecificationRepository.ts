import { Specification } from "../entities/Specification";

interface ICreateSpeficationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpeficationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export {
    ISpecificationRepository,
    ICreateSpeficationDTO
};
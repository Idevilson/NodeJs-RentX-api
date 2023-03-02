import { Specification } from "../../entities/Specification";
import { Repository } from "typeorm";
import { ICreateSpeficationDTO, ISpecificationRepository } from "../ISpecificationRepository";
import { postgresDataSource } from "../../../../database";


class SpecificationsRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = postgresDataSource.getRepository(Specification);
    }
    
    async create({ description, name }: ICreateSpeficationDTO): Promise<void> {
      const specification = this.repository.create({
        description,
        name
      });

      await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification>{
        const speficication = this.repository.findOne({
            where: {
                name
            }
        })
        return speficication;
    }

}

export { SpecificationsRepository };
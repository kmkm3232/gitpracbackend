import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Subdepartment } from "../entity/Subdepartment"
// import { userDto } from "./dto/user.dto";

@Injectable()
export class SubdepartmentService {
  constructor(
    @InjectRepository(Subdepartment)
    private readonly subdepartmentRepository: Repository<Subdepartment>,
  ) {}

  findAll(option?: any) {
      return this.subdepartmentRepository
        .createQueryBuilder("subdepartment")
        .leftJoinAndSelect('subdepartment.department','department')
        .getMany();
  }

//   async findOne(x: string) {
//     const query = await this.userRepository.findOne({ urlId: x });
//     return query;
//   }

  // async post(body: userDto) {
  //   const {firstName: firstname, lastName: lastname, age: age} = body
  //   const user = new User();
  //   user.firstName = firstname;
  //   user.lastName = lastname;
  //   user.age = age;
  //   const result = await this.userRepository.save(user).catch((error)=>{
  //     console.log(error)
  //   });
  //   console.log(
  //     `Successfullly Added user ${firstname} ${lastname}`, result)
  // }

//   async put(urlId: string, put: putDto) {
//     await this.userRepository
//       .createQueryBuilder()
//       .update("urls")
//       .set({
//         urlAddress: put.urlAddress,
//         urlType: put.urlType,
//         urlRegion: put.urlRegion,
//         urlIsMonitoring: put.urlIsMonitoring,
//       })
//       .where("urlId = :urlId", { urlId: urlId })
//       .execute();
//   }

//   async delete(id: string) {
//     await this.userRepository
//       .createQueryBuilder()
//       .delete()
//       .from("urls")
//       .where("urlId = :urlId", { urlId: id })
//       .execute();
//   }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class Register1675465007303 implements MigrationInterface {
    name = 'Register1675465007303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '"2023-02-03T22:56:50.293Z"'`);
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "register" SET DEFAULT '"2023-02-03T22:56:50.293Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "register" SET DEFAULT '2023-02-03 22:55:24.792'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" DROP DEFAULT`);
    }

}

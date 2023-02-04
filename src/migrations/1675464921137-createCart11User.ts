import { MigrationInterface, QueryRunner } from "typeorm";

export class createCart11User1675464921137 implements MigrationInterface {
    name = 'createCart11User1675464921137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "register" SET DEFAULT '"2023-02-03T22:55:24.792Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "register" SET DEFAULT '2023-02-03 21:37:07.308'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '2023-02-03 21:37:07.309'`);
    }

}

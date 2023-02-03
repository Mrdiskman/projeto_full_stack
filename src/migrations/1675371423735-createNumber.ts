import { MigrationInterface, QueryRunner } from "typeorm";

export class createNumber1675371423735 implements MigrationInterface {
    name = 'createNumber1675371423735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '"2023-02-02T20:57:08.427Z"'`);
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "register" SET DEFAULT '"2023-02-02T20:57:08.428Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "register" SET DEFAULT '2023-02-02 20:38:41.539'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "register" SET DEFAULT '2023-02-02 20:38:41.539'`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class createNumber1675370317288 implements MigrationInterface {
    name = 'createNumber1675370317288'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "register" TIMESTAMP NOT NULL DEFAULT '"2023-02-02T20:38:41.539Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "register" TIMESTAMP NOT NULL DEFAULT '"2023-02-02T20:38:41.539Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "register"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "register"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying NOT NULL`);
    }

}

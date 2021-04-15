import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({name: "User", schema: "nestTest"})
export class User {
    @PrimaryGeneratedColumn({
        name: "idx"
    })
    idx: number;

    @Column({length: 40})
    userId: string;

    @Column({length:20})
    name: string;

    @Column({length: 100})
    email: string;

    @Column({length: 100})
    userPwd: string;

    @Column("datetime", {
        name: "lastLogin"
    })
    lastLogin: Date;

    @CreateDateColumn({
        name: "createdAt"
    })
    createdAt: Timestamp;

    @UpdateDateColumn({
        name: "updatedAt"
    })
    updatedAt: Timestamp;
};
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'TB_TODOS' } )

export class TodoEntity {
  @PrimaryGeneratedColumn( 'uuid' )
  CD_ID: string;

  @Column({ name: 'NM_TASK' })
  task: string;

  @Column({ name: 'NR_IS_DONE', type: 'tinyint', width: 1 })
  isDone: number;

  @CreateDateColumn({ name: 'DT_CREATE_AT' })
  createdAt: string;

  @UpdateDateColumn({ name: 'DT_UPDATE_AT' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'DT_DELETED_AT' })
  deletedAt: string;
}

import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

@Entity({ name: 'TB_TODOS' } )

export class TodoEntity {
  @PrimaryGeneratedColumn( 'uuid' )
  @ApiProperty()
  CD_ID: string;

  @Column({ name: 'NM_TASK' })
  @ApiProperty()
  task: string;

  @Column({ name: 'NR_IS_DONE', type: 'tinyint', width: 1 })
  @ApiProperty()
  isDone: number;

  @CreateDateColumn({ name: 'DT_CREATE_AT' })
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn({ name: 'DT_UPDATE_AT' })
  @ApiProperty()
  updatedAt: string;

  @DeleteDateColumn({ name: 'DT_DELETED_AT' })
  @ApiProperty()
  deletedAt: string;
}

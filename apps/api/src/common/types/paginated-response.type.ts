import { PaginationMetaDto } from '../dto/pagination-meta.dto';

export type PaginatedResponse<T> = {
  items: T[];

  meta: PaginationMetaDto;
};

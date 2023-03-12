import { DatabaseError } from '../types/DatabaseError';
import { PrismaClientError } from '../types/PrismaClientErros';
import { UniqueConstraintError } from '../types/UniqueConstraintError';

enum PrismaErros {
  UniqueConstraintFail = 'P2002',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErros.UniqueConstraintFail:
      return new UniqueConstraintError(e);

    default:
      return new DatabaseError(e.message);
  }
};

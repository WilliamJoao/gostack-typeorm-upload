import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const transactionExists = await transactionRepository.findOne(id);

    if (!transactionExists) {
      throw new AppError('The transaction does not exist');
    }

    await transactionRepository.remove(transactionExists);
  }
}

export default DeleteTransactionService;

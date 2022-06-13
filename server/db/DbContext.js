import mongoose from 'mongoose';

import { BurgerSchema } from '../models/Burger';

class DbContext {
  Burger = mongoose.model('Burger', BurgerSchema);


}

export const dbContext = new DbContext()

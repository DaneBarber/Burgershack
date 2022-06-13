import { dbContext } from '../db/DbContext.js'

class BurgersService {
  async create(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData)
    return burger
  }

  async find(query = {}) {
    const burgers = await dbContext.burgers.find(query)
    return burgers
  }

  async remove(burgerId) {
    const removedBurger = await dbContext.burgers.findByIdAndRemove(burgerId)
    return removedBurger
  }
}

export const burgersService = new burgersService()

'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    await User.create({ username: 'virk', email: 'virk@adonisjs.com', password: 'secret' })
  }
}

module.exports = DatabaseSeeder

const config = require('./app/config').default;

var knex = require('knex')(config.mysql);

console.log('');
console.log('');
console.log('##########################');
console.log('');
console.log('Install app');


/* create DB structure */
knex.raw('DROP TABLE IF EXISTS `clients`;', []).then(function (resp) {
    return knex.raw('DROP TABLE IF EXISTS `clients`;', []);
})
    .then(function (resp) {
        return knex.raw(
            'CREATE TABLE IF NOT EXISTS `clients` (' +
            '`id` int(11) NOT NULL AUTO_INCREMENT,' +
            '`name` text,' +
            '`email` text,' +
            '`phone` text,' +
            'PRIMARY KEY (`id`)' +
            ') ENGINE=InnoDB DEFAULT CHARSET=utf8;'
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            'DROP TABLE IF EXISTS `client_providers`;'
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            'CREATE TABLE IF NOT EXISTS `client_providers` ( ' +
            '  `client_id` int(11) DEFAULT NULL,' +
            '    `provider_id` int(11) DEFAULT NULL,' +
            '   UNIQUE KEY `client_id_provider_id` (`client_id`,`provider_id`)' +
            ') ENGINE=InnoDB DEFAULT CHARSET=utf8;'
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            'DROP TABLE IF EXISTS `provider`;'
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            ' CREATE TABLE IF NOT EXISTS `provider` (' +
            '  `id` int(11) NOT NULL AUTO_INCREMENT,' +
            '   `name` text,' +
            '  PRIMARY KEY (`id`)' +
            ') ENGINE=InnoDB DEFAULT CHARSET=utf8;    '
            , []);

    })

    /* insert test data */

    /* clients data */
    .then(function (resp) {
        console.log('create schema DONE')
        return knex.raw(
            "INSERT INTO `clients` (`name`, `email`, `phone`) VALUES ('Test1', 'test1@email.com', '123456');"
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            "INSERT INTO `clients` (`name`, `email`, `phone`) VALUES ('Test2', 'test2@email.com', '987456');"
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            "INSERT INTO `clients` (`name`, `email`, `phone`) VALUES ('Test3', 'test3@email.com', '963147');"
            , []);
    })

    /* provider data */
    .then(function (resp) {
        console.log('clients data DONE')
        return knex.raw(
            "INSERT INTO `provider` (`name`) VALUES ('Porvider 1');"
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            "INSERT INTO `provider` (`name`) VALUES ('Porvider 2');"
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            "INSERT INTO `provider` (`name`) VALUES ('Porvider 3');"
            , []);
    })

    /* inser client providers data */
    .then(function (resp) {
        return knex.raw(
            "INSERT INTO `client_providers` (`client_id`, `provider_id`) VALUES ('1', '1');"
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            "INSERT INTO `client_providers` (`client_id`, `provider_id`) VALUES ('1', '2');"
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            "INSERT INTO `client_providers` (`client_id`, `provider_id`) VALUES ('2', '1');"
            , []);
    })
    .then(function (resp) {
        return knex.raw(
            "INSERT INTO `client_providers` (`client_id`, `provider_id`) VALUES ('3', '2');"
            , []);
    })



    .then(function (resp) {
        console.log('provider data DONE')
        console.log('App install done');
        console.log('');
        console.log('##########################');
        console.log('');
        process.exit(0);
    })

    ;

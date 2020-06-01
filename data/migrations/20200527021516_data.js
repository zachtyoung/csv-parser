exports.up = function(knex) {
    return knex.schema
    .createTable("form", function(form) {
        form.increments();
        form.string('timezone').defaultTo("UTC")
        form.datetime('some_time').defaultTo(knex.fn.now())
        form.string('identifier').notNullable();
        form.text("description").notNullable();
        form.boolean("fixed").defaultTo(false);
    })
    .createTable("SDN", function(SDN) {
        SDN.increments();
        SDN.integer('Ent_num', 350);
        SDN.text('SDN_Name', 350);
        SDN.text('SDN_Type', 12);
        SDN.text('Program', 200);
        SDN.text('Title', 200);
        SDN.text('Call_Sign', 8);
        SDN.text('Vess_type', 25);
        SDN.text('Tonnage', 14);
        SDN.text('GRT', 8);
        SDN.text('Vess_flag', 40);
        SDN.text('Vess_owner', 150);
        SDN.text('Remarks', 1000);

    })
    .createTable("ADD", function(ADD) {
        ADD.increments('Add_num');
        ADD.integer('Ent_num')
        .references('Ent_num')
        .inTable('SDN')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        ADD.text('Address', 750);
        ADD.text('City/State/Province/PostalCode', 116);
        ADD.text('Country', 250);
        ADD.text('Remarks', 200);

    })
    .createTable("ALT", function(ALT) {
        ALT.increments('Alt_num');
        ALT.integer('Ent_num')
        .references('Ent_num')
        .inTable('SDN')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        ALT.text('alt_type', 8);
        ALT.text('alt_name', 350);
        ALT.text('alt_remarks', 200);

    })
    .createTable("test_individual", function(test_individual) {
        test_individual.increments('test_num');
        test_individual.text('test_type', 16);
    })
    .createTable("test_aircraft", function(test_aircraft) {
        test_aircraft.increments('test_num');
        test_aircraft.text('test_type', 16);
    })
    .createTable("test_vessel", function(test_vessel) {
        test_vessel.increments()
        test_vessel.text('text_type', 16);
    })
    .createTable("test_unknown", function(test_unknown) {
        test_unknown.increments('test_num');
        test_unknown.text('text_type', 16);
    })
    
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("form")
    .dropTableIfExists("SDN")
    .dropTableIfExists("ADD")
    .dropTableIfExists("ALT")
};

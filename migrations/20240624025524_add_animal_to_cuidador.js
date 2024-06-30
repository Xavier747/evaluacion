/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('animal', function(table) {
        // Agregar la columna deCustomer
        table.integer('id_cuidador').unsigned();
    
        // Configurar la clave foránea
        table.foreign('id_cuidador').references('id').inTable('cuidador');
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('animal', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('id_cuidador');
    
        // Eliminar la columna deCustomer
        table.dropColumn('id_cuidador');
      });
  
};
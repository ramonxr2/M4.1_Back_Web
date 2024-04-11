const models = require('./models');  

const consultaActivos = async () => {
    try {
        const activos = await models.Activo.findAll();
        activos.forEach(activo => {
            console.log(activo.dataValues);
        });
    } catch (error) {
        console.error('Error al consultar activos:', error);
    } finally {

     }
}

const asignarTagsAActivo = async (activoId, tagIds) => {
    try {
        const activo = await models.Activo.findByPk(activoId);
        if (!activo) {
            console.log(`Activo con ID ${activoId} no encontrado.`);
            return;
        }

        const tags = await models.Tag.findAll({
            where: {
                id: {
                    [Op.in]: tagIds
                }
            }
        });

        await activo.addTags(tags);

        const tagsAsignados = await activo.getTags();
        console.log(`Tags asignados al activo ${activoId}:`);
        tagsAsignados.forEach(tag => {
            console.log(tag.dataValues);
        });
    } catch (error) {
        console.error('Error al asignar tags a activo:', error);
    } finally {

    }
}

// Función main que ejecuta las pruebas
async function testRelacionesMuchosAMuchos() {
    try {
        console.log('--- Consulta de Activos ---');
        await consultaActivos();

        console.log('--- Asignar Tags a un Activo ---');
        const activoId = 1;
        const tagIds = [1, 2]; // IDs de los tags que quieres asignar
        await asignarTagsAActivo(activoId, tagIds);
    } catch (error) {
        console.error('Error en las pruebas:', error);
    } finally {
         models.sequelize.close();
    }
}

// Ejecutar las pruebas
testRelacionesMuchosAMuchos();

const { faker } = require('@faker-js/faker');

function generateData() {
    const messages = [];
    for (let id = 0; id < 10; id++) {
        let priority = faker.datatype.number({min: 1, max: 2});
        let date = faker.date.between("2018-01-01", "2018-07-31").toISOString().split("T")[0];
        let fromId = faker.datatype.number({min: 1000, max: 9999})
        let message = faker.hacker.phrase();
        let status = faker.datatype.number(1);
        messages.push({
            "id": id,
            "from_userId": fromId,
            "date_sent": date,
            "priority": priority,
            "message": message,
            "status": status
        });
    }

    return {messages};
}

module.exports = generateData;

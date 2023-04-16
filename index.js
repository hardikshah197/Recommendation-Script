const { fetchStates, fetchUsers } = require("./helper/dbhelper");
const { connect, disconnect } = require("./utils/dbconnection");

async function main() {

    try {
        const db = await connect();

        const states = await fetchStates(db);
        console.log(states);

        const users = await fetchUsers(db);
        console.log(users);

        await disconnect();
    } 
    catch (err) {
        console.log(err);
    }
}

main();
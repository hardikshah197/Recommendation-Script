const { fetchStates, fetchUsers } = require("./helper/dbhelper");
const { connect, disconnect } = require("./utils/dbconnection");

async function main() {

    try {
        const { sdeDB, userDB } = await connect();

        const states = await fetchStates(sdeDB);
        console.log(states);

        const users = await fetchUsers(userDB);
        console.log(users);

        await disconnect();
    } 
    catch (err) {
        console.log(err);
    }
}

main();
import mysql from "mysql2/promise";

// TODO: adjust these connection details to match your SingleStore deployment:
const HOST = "localhost";
const PORT = "3306";
const USER = "root";
const PASSWORD = "root";
const DATABASE = "app";

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function intToString(num) {
  return num.toString();
}

async function create({ conn, data }) {
  try {
    const [results] = await conn.query("INSERT INTO data VALUES ( ?, ? )", [
      data.id,
      data.value,
    ]);
    return results.insertId;
  } catch (err) {}
}

async function readOne({ conn, id }) {
  try {
    const [rows, fields] = await conn.execute(
      "SELECT * FROM data WHERE id = ?",
      [id]
    );
    return rows[0];
  } catch (err) {}
}

async function deleteAll({ conn }) {
  try {
    const [rows] = await conn.execute("DELETE FROM data");
    return rows;
  } catch (err) {}
}

async function singleStoreInsertionPerfTest({ conn, numberOfRequests }) {
  try {
    const start = Date.now();
    for (let i = 0; i < numberOfRequests; i++) {
      const key = intToString(i);
      await create({
        conn,
        data: { id: key, value: `Value: ${key}` },
      });
    }
    const end = Date.now();
    console.log(
      `SingleStore took ${end - start}ms to insert ${numberOfRequests} rows.`
    );
    return end - start;
  } catch (err) {}
}

async function singleStoreReadPerfTest({ conn, numberOfRequests }) {
  try {
    const start = Date.now();
    for (let i = 0; i < numberOfRequests; i++) {
      const randKey = intToString(randomNumberBetween(0, numberOfRequests));
      const result = await readOne({
        conn,
        id: randKey,
      });
    }
    const end = Date.now();
    console.log(
      `SingleStore took ${end - start}ms to read ${numberOfRequests} rows.`
    );
    return end - start;
  } catch (err) {}
}

export default async function singleStorePerformanceTest(numberOfRequests) {
  let conn;
  try {
    conn = await mysql.createPool({
      host: HOST,
      port: PORT,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    await deleteAll({ conn });

    await singleStoreInsertionPerfTest({ conn, numberOfRequests });
    await singleStoreReadPerfTest({ conn, numberOfRequests });
  } catch (err) {
  } finally {
    if (conn) {
      await conn.end();
    }
  }
}

async function main() {
  try {
    const numberOfRequests = 100;
    await singleStorePerformanceTest(numberOfRequests);
    console.log("SingleStore performance test complete.");

    return true;
  } catch (err) {
    console.error("ERROR", err);
    throw err;
  }
}

main();

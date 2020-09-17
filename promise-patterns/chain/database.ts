// Example of normal promise chains

interface DatabaseConnection {}
interface Account {
  accountId: string;
}

function getDatabaseConnection(): Promise<DatabaseConnection> {
  console.log("Retrieving database connection...");
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
    return Promise.resolve({} as DatabaseConnection);
  });
}

function executeSQL(
  dbConnection: DatabaseConnection,
  sql: string
): Promise<Account> {
  console.log("Executing SQL...");
  return new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
    return Promise.resolve({ accountId: "123" } as Account);
  });
}

getDatabaseConnection()
  .then((dbConnection) => {
    return executeSQL(dbConnection, "SELECT * FROM dual");
  })
  .then((result) => {
    console.log(`Result: ${JSON.stringify(result)}`);
  })
  .catch((error) => {
    console.log(`Unexpected error occurred: ${JSON.stringify(error)}`);
  });

const crudOperations = require("./index");

crudOperations.myFileWriter("sample.txt", "Hello");
crudOperations.myFileReader("sample.txt");
crudOperations.myFileUpdater("sample.txt", " World");
crudOperations.myFileDeleter("sample.txt");

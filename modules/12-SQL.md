SQL

Structured Query Language, is a domain-specific programming language designed for managing and manipulating relational databases. 
Key aspects:
1- Data querying: Retrieve information using the "SELECT"statement. (Searches can be filtered)
2- Data manipulation: Using statemnts "INSERT", "UPDATE" and "DELETE".
3- Data definition: Statements for defining and managing the structure of a database: "CREATE", "ALTER" and "DROP". (For creating and deleting tables)
4- Data control: "GRANT" and "REVOKE" statements control perimisions.
5- Data integrity: Constraints to ensure integrity, "PRIMARY KEY", "FOREIGN KEY" and "CHECK".

Relational database: A relational database organizes data into tables. A table holds a group of data and is divided into rows and columns. The tabes can be linked to show relationships between data. 
Linking tables: Tables are linked with a common KEY identifier.  
Queries: Queries enable us to supply data to
the front end to build sites that can interact with lots of data quickly and easily. 

12-01 (MySQL shell):
confirm that the MySQL server is up and running. >   mysql --version
open the MySQL Shell that connects the terminal to the MySQL instance. > mysql -u root -p
password: password
Commands:

SHOW databases;
SHOW tables;
USE db;
USE tb;
DESCRIBE table;
SELECT * FROM table;

12-03 (Datbases):
Databases are collections of tables.
SCHEMAS: 
1- Logical organization: A schema acts like a blueprint or plan for organizing database objects, defining how tables, views, and other elements relate to each other. It's a way to structure and manage data logically.
2- Physical storage: A schema is also a namespace or container that holds database objects.

12-05 (Tables):
Tables are structure data in columns and rows.

12-07 (CRUD insert):

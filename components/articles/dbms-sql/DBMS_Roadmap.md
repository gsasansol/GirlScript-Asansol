# DBMS

* For long integer ```bigint```
* Primary Key can never be NULL but unique key can be
* To remove a column ```Alter table table-name drop column-name```
* To Update Values ```Update Table-name Column-name=value where condition```
* To Delete Values ```Delete from Table-name where condition```
* Query Optimization ~> The query optimizer attempts to determine the most efficient way to execute a given query by considering the possible query plans.

* Anomaly
Anomalies are problems that can occur in poorly planned, un-normalized databases where all the data is stored in one table (a flat-file database).

Insertion Anomaly - The nature of a database may be such that it is not possible to add a required piece of data unless another piece of unavailable data is also added. E.g. A library database that cannot store the details of a new member until that member has taken out a book.

Deletion Anomaly - A record of data can legitimately be deleted from a database, and the deletion can result in the deletion of the only instance of other, required data, E.g. Deleting a book loan from a library member can remove all details of the particular book from the database such as the author, book title, etc.

Modification Anomaly - Incorrect data may have to be changed, which could involve many records having to be changed, leading to the possibility of some changes being made incorrectly.

* Problems with File System:
    1. Data Redundancy: The same information may be duplicated in different files. ...
    2. Data Inconsistency: ...
    3. Difficulty in Accessing Data: ...
    4. Limited Data Sharing: ...
    5. Integrity Problems: ...
    6. Atomicity Problems: ...
    7. Concurrent Access Anomalies: ...
    8. Security Problems:

## Keys
* it is used for identifying unique rows from a table. It also establishes a relationship among tables.
    1. Primary Key – A primary is a column or set of columns in a table that uniquely identifies tuples (rows) in that table and is not NULL.

    2. Super Key – A super key is a set of one or more columns (attributes) to uniquely identify rows in a table.

    3. Candidate Key – A super key with no redundant attribute is known as a candidate key. There can be more than one candidate key.

    4. Alternate Key – Out of all candidate keys, only one gets selected as the primary key, the remaining keys are known as alternate or secondary keys.

    5. Composite Key – A key that consists of more than one attribute to uniquely identify rows (also known as records & tuples) in a table is called a composite key.

    6. Foreign Key – Foreign keys are the columns of a table that points to the primary key of another table. They act as a cross-reference between tables.

* What is the Domain of an attribute
    It is the type of value that is present that is int, string, char, etc.

* Normalisation
    1. Functional Dependency ~> Analyse on which dependency database is set, Relationship between two attributes
    2. Remove redundancy
    3. Minimise Insertion/Deletion/Update anomalies

* Types of languages in DBMS
    1. DDL  ~> Data Definition Language (Create/Alter/Drop/Truncate)
    2. DML ~> Data Manipulation Language (Select,Insert,Update)
    3. DCL ~> Data Control Language (Grant/Revoke)
    4. TCL ~> Transaction Control Language (Commit/Rollback)
    5. VDL ~> View Definition Language

* Levels of abstraction in DBMS
    1. Physical ~> This is the lowest level of data abstraction. It describes how data is stored in a database. You can get complex data structure details at this level.
    2. Logical ~> It describes what data is stored in a database
    3. View ~> This level describes the user interaction with the database system.

* Aggregation
    1. Maintain a relationship between 2 RDBMS
    2. Feature of Entity relation model which allows 1 relationship set to participate with another Relationship set
    3. How more than one record collectively represents a dataset

* Properties of Transaction are ACID properties
* Locking Scheme in Transaction:
    1. Shared Lock ~> Other transactions can only read and not write 
    2. Exclusive Lock ~> Other transactions can neither read nor write

* UNIQUE Key can be NULL for once only
* Triggers
    * Set of commands executed when a certain event occurs
* Stored Procedure is a set of SQL queries that are executed altogether in a pre-made sequence

* the most commonly used normal forms:
    1. First normal form(1NF) ~> A relation is in first normal form if every attribute in that relation is a single-valued attribute.
    2. Second normal form(2NF) ~> A relation must be in first normal form and the relation must not contain any partial dependency.
    3. Third normal form(3NF) ~> Transitive dependencies are removed in this form
    4. Boyce & Codd normal form (BCNF)

* Weak Entity Set
    A weak entity set is an entity set that does not contain sufficient attributes to uniquely identify its entities
* Multivalue Attrivute
    An attribute that can hold multiple values is known as a multivalued attribute. It is represented with double ovals in an ER Diagram.
* Strong Entity Set
    A strong entity set is an entity set that contains sufficient attributes to uniquely identify all its entities.

* Functional Dependency
    1. It is of 2 types:
        * Trival
        * Non-Trival
* Inference Rule

* Partial Dependency
    Partial Dependency occurs when a nonprime attribute is functionally dependent on part of a candidate key.
* Fully-functionally Dependency
    An attribute is a fully functional dependent on another attribute if it is Functionally Dependent on that attribute and not on any of its proper subsets.

* Concurrency Control ~> Concurrency control is the procedure in DBMS for managing simultaneous operations without conflicting with each another. It helps you to make sure that database transactions are performed concurrently without violating the data integrity of respective databases.

# Data Model
<a href="https://afteracademy.com/blog/what-is-data-model-in-dbms-and-what-are-its-types">Learn More</a>

* Data Model gives us an idea that how the final system will look after its complete implementation.
* Some of them are:
1. Hierarchical Model ~> Hierarchical Model was the first DBMS model. This model organizes the data in the hierarchical tree structure. The hierarchy starts from the root which has root data and then it expands in the form of a tree adding a child node to the parent node.

2. Network Model ~> a record can have more than one parent.

3. Entity-Relationship Model ~> the real-world problem in pictorial form to make it easy for the stakeholders to understand. 

4. Relational Model ~> In this model, the data is maintained in the form of a two-dimensional table. All the information is stored in the form of rows and columns. The basic structure of a relational model is tables. So, the tables are also called relations in the relational model.

5. Object-Oriented Data Model ~> both the data and relationship are present in a single structure known as an object. 

6. Object-Relational Data Model ~> This model was built to fill the gap between the object-oriented model and the relational model. We can have many advanced features like we can make complex data types according to our requirements using the existing data types.

7. Flat Data Model ~> It is a simple model in which the database is represented as a table consisting of rows and columns. To access any data, the computer has to read the entire table. This makes the modes slow and inefficient.

8. Semi-Structured Data Model
Associative Data Model
Context Data Model



# Basics
* To connect to database ```\connect root@localhost:3306```
* To disconnect from database ```\quit```
* To change language from ```JS``` to ```SQL``` use ```\sql```
* To Create a database ```create database db-name```
* To clear the shell screen, use ```Ctrl + L```
* To Create a table 
```sql
create table tb-name(
    col1-name data-type,
    col2-name data-type
);
```
* To check the schema of table ```describe tb-name```
* To insert row ```insert into tb-name(col1-name,col2-name) values("piyush",12);``` or ```insert into tb-name values("piyush",12);```

* To delete rows ```delete from tb-name where condition```
* To update rows ```update tb-name set col-name=new-value where condition```
* To LIMIT the no of rows, ```LIMIT count``` is used
* To get rows with unique values ```DISTINCT``` is used as ```SELECT DISTINCT column-name FROM tb-name```
* To Count no of rows in table ```SELECT COUNT(*) FROM tb-name```
* For logical operations ```AND```, ```OR``` are used
* To Apply Condition for range, use ```BETWEEN``` keyword as ```SELECT * FROM tb-name WHERE field1 BETWEEN range-1 AND range-2```
* ```BETWEEN``` is inclusive
* To check the condition from an iterative object, use ```IN``` as ```SELECT * FROM tb-name WHERE age IN (2,4,6,8,10)``` , this will result in a list of tuples with age equal to 2,4,6,8 or 10.
* Missing or Unknown Values are represented by ```NULL``` in SQL and they can be checked by using ```IS NULL``` or ```IS NOT NULL``` expression
* IN SQL, ```LIKE``` operator is used with ```WHERE``` clause to search for a ```pattern``` in a column. It uses 2 types of wildcards:
    1. ```%``` ~> represents zero, one or more characters
    2. ```_``` ~> represents a single character
* Similar to ```LIKE```, we can use ```NOT LIKE``` operator for values not matching certain ```pattern```
* To Perform arithmetic operations , queries like ```SELECT (a+b)``` or ```SELECT (a-b)``` or ```SELECT (a/b)``` can be used
* Arithmetic operations are similar to C programming as Int/Int is INT
* Aliasing ~> Assigning a temporary name to something, is done in SQL using ```AS``` keyword
* To Comment something in SQL use ```--``` or ```/* */``` for multiline comment
* To Sort results ```ORDER BY``` keyword is used, by default it's in ```Ascending``` order and for ```Descending``` order we use ```DESC``` as ```SELECT * FROM tb-name ORDER BY field1 DESC```
* ```ORDER BY``` can be used to sort table data based on multiple columns as ```SELECT * FROM tb-name ORDER BY col1,col2```
* To Count the Value of cells based on Groups, or basically to divide the data into multiple groups, ```GROUP BY``` is used
* ```ORDER BY``` is always used after the ```GROUP BY```
* ```HAVING``` clause is used to use ```AGGREGATE``` functions after ```WHERE``` clause

## JOIN in DBMS
* To do ```INNER JOIN```, query is ```SELECT * FROM l-table INNER JOIN r-table ON l-table.id=r-table.id;```
* When joining tables with a common field name, we can use ```USING``` as a shortcut as ```SELECT * FROM tb-name1 INNER JOIN tb-name2 USING(common-field-name)```
* To use if else conditions in SQL, we use ```CASE```,```WHEN``` and ```THEN```
```sql
SELECT country_code, size,
  CASE WHEN size > 50000000
            THEN 'large'
       WHEN size > 1000000
            THEN 'medium'
       ELSE 'small' END
       AS popsize_group
INTO pop_plus       
FROM populations
WHERE year = 2015;
```
* To do ```LEFT JOIN```, query is ```SELECT * FROM l-table LEFT JOIN r-table ON l-table.id = r-table.id;```
* To do ```RIGHT JOIN```, query is ```SELECT * FROM r-table RIGHT JOIN l-table ON l-table.id = r-table.id;```
* TO do ```FULL JOIN```,query is ```SELECT * FROM l-table FULL JOIN r-table USING(field)```

* <u>SET THEORY</u>
* ```UNION``` and ```UNION ALL``` are used to group or merge the output of two or more queries.
* ```UNION``` refers to summing up only UNIQUE records whereas ```UNION ALL``` refers to summing up all the records
* QUERY is as ```SELECT * FROM tb1 WHERE condition UNION SELECT * FROM tb2 WHERE condition2```, the only thing to make sure of is that the domain of each field from the output of both sub-query should be the same
* ```INTERSECT``` is used to extract records that are unique in both the subqueries
* ```SELECT * FROM tb1 INTERSECT SELECT * FROM tb2```
* ```EXCEPT``` is used to find the ```A-B``` of two sub-queries in the table, ```SELECT * FROM tb1 EXCEPT SELECT * FROM tb2```
* ```SEMI JOIN```, is a query where contents in tb1 match to contents in tb2, ```SELECT * FROM tb1 WHERE field IN (SELECT * FROM tb2);```
* ```ANTI JOIN```, is a query where contents in tb1 do not match to contents in tb2, ```SELECT * FROM tb1 WHERE field NOT IN (SELECT * FROM tb2);```
* Sample of Subquery inside a query
```sql
-- Select fields
SELECT *
  -- From populations
  FROM populations
-- Where life_expectancy is greater than
WHERE life_expectancy > 1.15 * 
  -- 1.15 * subquery
  (
    SELECT AVG(life_expectancy)
      FROM populations
      WHERE year = 2015
  ) AND year = 2015;
```
* Subqueries are most frequently used in ```WHERE``` clause
* Cross JOIN is used as ```SELECT * FROM tb1 CROSS JOIN tb2```
* To get the Round-of value, we can use ```ROUND(value,decimal-point)``` to get the required output as ```ROUND(0.3434,2)``` to get ```0.34```

## Correlated Subqueries
* Simple Subquery Vs Correlated Subqueries
<table>
<tr>
    <th>Simple Subquery</th>
    <th>Correlated Subquery</th>
</tr>
<tr>
    <td>Can be run independently from the main query </td>
    <td>Dependent on the main query to execute </td>
</tr>
<tr>
    <td>Evaluated once in the whole query</td>
    <td> Evaluated in loops -> Significantly slows down query runtime</td>
</tr>
</table>

* To get Month from ```Date```, we can use ```EXTRACT(MONTH FROM DATE)```
* Correlated Nested Subqueries can be correlated or uncorrelated
    1. They can be a combination of two
    2. Can reference information from the outer subquery or main query

## Common Table Expressions
* Table declared before the main query
* Named and referenced later in ```FROM``` statement
```sql
WITH cte AS (
    SELECT col1, col2 
    FROM table)
SELECT 
    AVG(col1) AS avg_col
FROM cte;
```
* Executed only once
    1. CTE is stored in memory
    2. Improves query performance
* Improving the organization of queries
* Referencing other CTEs
* Referencing itself (SELF JOIN)
* To declare multiple ```CTE``` just separate them with a ```comma(,)```
```sql
WITH home AS (
  SELECT m.id, m.date, 
         t.team_long_name AS hometeam, m.home_goal
  FROM match AS m
  LEFT JOIN team AS t 
  ON m.hometeam_id = t.team_api_id),
-- Declaring another CTE after,
-- Declare and set up the away CTE
away AS (
  SELECT m.id, m.date, 
         t.team_long_name AS awayteam, m.away_goal
  FROM match AS m
  LEFT JOIN team AS t 
  ON m.awayteam_id = t.team_api_id)
-- Select date, home_goal, and away_goal
SELECT 
    home.date,
    home.hometeam,
    away.awayteam,
    home.home_goal,
    away.away_goal
-- Join away and home on the id column
FROM home
INNER JOIN away
ON home.id = away.id;
```

## Window Functions
* Functions that Perform calculations on an already generated result set (a window)
* Aggregate Calculations
    1. Similar to subqueries in ```SELECT```
    2. Running totals, rankings, moving averages
```sql
SELECT
    date,
    (home_goal + away_goal) AS goals,
    AVG(home_goal + away_goal) OVER() AS overall_avg
FROM match
WHERE season = '2011/2012';
```
```sql
-- RANK() function orders rank from smallest to the largest value
SELECT 
    date,
    (home_goal + away_goal) AS goals,
    RANK() OVER(ORDER BY home_goal + away_goal) AS goals_rank
FROM match
WHERE season = '2011/2012';
```
* Processed after every part of query except ```ORDER BY```
    1. Uses information in a result set rather than a database
* Available in PostgreSQL, Oracle, MySQL, and SQL Server.. but not SQLite
```sql
-- PARTITION BY
/*
Calculates separate values for different categories
Calculates different calculations in the same column
*/
SELECT
    date,
    (home_goal + away_goal) AS goals,
    AVG(home_goal + away_goal) OVER(PARTITION BY season) AS overall_avg
FROM match
WHERE season = '2011/2012';
```

### Sliding Windows
* Performs calculations relative to the current row
* Can be used to calculate running totals, sums, averages, etc
* Can be partitioned by one or more columns
```sql
ROWS BETWEEN <start> AND <finish>
```
* Keywords that can be used in place of start and finish:
    1. PRECEDING
    2. FOLLOWING
    3. UNBOUNDED PRECEDING -> since the beginning
    4. UNBOUNDED FOLLOWING
    5. CURRENT ROW -> stop at the current row
```sql
SELECT 
    date,
    home_goal,
    away_goal,
    -- Create a running total and running average of home goals
    SUM(home_goal) OVER(ORDER BY date 
         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total,
    AVG(home_goal) OVER(ORDER BY date 
         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_avg
FROM match
WHERE 
    hometeam_id = 9908 
    AND season = '2011/2012';
```

* to add a ```DATE``` in sql, we use ```Date``` data-type and it is inserted as ```DATE 'yyyy/MM/dd'``` format
* to add a ```TIMESTAMP``` in sql, we use ```timestamp``` data-type and it is inserted as ```TIMESTAMP 'yyyy/MM/dd HH:MM:SS```
* Timestamp from ```1900``` onwards can only be inserted into SQL
* To insert characters like ```'(single quote)```, one needs to use ```\(backslash)```
* to use column names with space in between like ```Column Number 1```, we need to represent it inside ```back-quotes``` like ``` `Column Number 1` ``` though it is preferable to always use ```underscore _``` instead of ```space```
* To change the password use ```ALTER USER 'root'@'localhost' IDENTIFIED BY 'New-Password'```


# View
* It is a keyword that can be used as a data table
* It creates an alias for a ```SELECT``` query
* Its syntax is
```sql
CREATE VIEW name_for_view AS select_query
```

# Stored Function
* Delimeters are applied to the client 
```sql
DELIMETER //
CREATE FUNCTION track_len(seconds INT)
RETURNS VARCHAR(16)
DETERMINISTIC
BEGIN
    RETURN CONCAT_WS(':',seconds DIV 60,LPAD(second MOD 60,2,'0'));
END //
DELIMETER ;
```
* To delete a function ```DROP FUNCTION IF EXISTS function_name```
* To list functions created by you ```SHOW FUNCTION STATUS WHERE DEFINER LIKE 'admin%';```

# Procedure
* It is called using ```CALL``` keyword as ```CALL procedure_name (any_param_if_req)```
```sql
DELIMITER //
CREATE PROCEDURE procedure_name (IN parameter VARCHAR(255), OUT outp VARCHAR(255))
BEGIN
    SELECT * INTO outp FROM album;
    SELECT * FROM track;
END
DELIMITER ;
CALL procedure_name("parameter_value",@output_variable);
SELECT @output_variable;
```
* We can call any function/procedure from inside of another function or procedure
* To Check all procedures use ```SHOW PROCEDURES STATUS WHERE DEFINER LIKE 'admin%';```
* To drop the procedure use ```DROP PROCEDURE IF EXISTS procedure_name```


# Variables and Loops
* An Example for use of variables and loops with a procedure
```sql
USE db_name;
DROP PROCEDURE IF EXISTS str_count;
DELIMITER //
CREATE PROCEDURE str_count()
BEGIN
    DECLARE max_value INT UNSIGNED DEFAULT 5;
    DECLARE int_value INT UNSIGNED DEFAULT 0;
    DECLARE str_value VARCHAR(255) DEFAULT '';
    WHILE int_value < max_value DO
        SET int_value = int_value + 1;
        SET str_value = CONCAT(str_value,int_value," ");
    END WHILE;
    SELECT str_value;
END //
DELIMITER ;
CALL str_count();
```

# Transactions
* One for all - all for one
* Follows the ACID properties
* Its Syntax is as
```sql
START TRANSACTION
    INSERT INTO TB1
    INSERT INTO TB2
    SELECT FROM TB1
    INSERT INTO TB3
END TRANSACTION
```
* State of the database rolls back to its original shape if any statement fails from a transaction
* Each transaction occurs isolated
* Example
```sql
DROP TABLE IF EXISTS widgetInventory;
DROP TABLE IF EXISTS widgetSales;
CREATE TABLE widgetInventory(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    description TEXT,
    onhand INTEGER NOT NULL
);
CREATE TABLE widgetSales (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    inv_id INTEGER,
    quan INTEGER,
    price INTEGER
);
INSERT INTO widgetInventory (description, onhand ) VALUES ('rock',25), ('paper',25), ('scissors',25);
SELECT * from widgetInventory;
```
* Transaction Example
```sql
START TRANSACTION;
INSERT INTO widgetSales ( inv_id,quan,price) VALUES (1,5,500);
UPDATE widgetInventory SET onhand = (onhand-5) WHERE id=1;
COMMIT;
SELECT * FROM widgetSales;
SELECT * FROM widgetInventory;
```
* Rollback example
```sql
START TRANSACTION;
INSERT INTO widgetInventory (description,onhand) VALUES ('toy',24);
ROLLBACK;
```
* Transactions are way faster as compared to single queries
* An example to check the same is
```sql
-- code without transaction takes about 34 sec
-- code with transaction takes about 0.42 sec
-- All thanks to buffering all together
DROP TABLE IF EXISTS test;
DROP PROCEDURE IF EXISTS insert_loop;
CREATE TABLE test (id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, data TEXT);
DELIMITER //
CREATE PROCEDURE insert_loop(IN count INT UNSIGNED )
BEGIN
    DECLARE accum INT UNSIGNED DEFAULT 0;
    DECLARE start_time VARCHAR(32);
    DECLARE end_time VARCHAR(32);
    SET start_time = SYSDATE(6);
    WHILE   accum < count DO
        SET accum = accum + 1;
        INSERT INTO test (data) VALUES ("This is text");
    END WHILE;
    SET end_time = SYSDATE(6);
    SELECT TIME_FORMAT(start_time,"%T.%f") AS 'Start',
        TIME_FORMAT(end_time,"%T.%f") AS 'End',
        TIME_FORMAT(TIMEDIFF(end_time,start_time),"%s.%f") AS "Elapsed Secs";
END //
DELIMITER ;
-- START TRANSACTION;
call insert_loop(10000);
-- COMMIT;
```

# Triggers
```sql
DROP TRIGGER IF EXISTS newWidgetSale;
DROP TABLE IF EXISTS widgetSale;
DROP TABLE IF EXISTS widgetCustomer;
CREATE TABLE widgetCustomer (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(64), last_order_id INT
);
CREATE TABLE widgetSale (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, item_id INT, customer_id INT, quan INT, price INT
);
INSERT INTO widgetCustomer (name) VALUES ("BOB"),("Sally"),("Fred");
SELECT * FROM widgetCustomer;
DELIMITER //
CREATE TRIGGER newWidgetSale AFTER INSERT ON widgetSale
    FOR EACH ROW
    BEGIN
        UPDATE widgetCustomer SET last_order_id = new.id WHERE widgetCustomer.id = NEW.customer_id;
    END //
DELIMITER ;
INSERT INTO widgetSale (item_id,customer_id,quan,price) VALUES (1,3,5,1995),(2,2,3,1495),(3,1,1,2995);
SELECT * FROM widgetSale;
SELECT * FROM widgetCustomer;
```
* To show triggers present in a database, use ```SHOW TRIGGERS```
* Triggers are associated with the table thus dropping a table will drop the triggers as well
* To drop specific trigger ```DROP TRIGGER IF  EXISTS trigger_name;```

* To Prevent a code from being inserted using ```triggers```
```sql
DELIMITER //
CREATE TRIGGER updateWidgetSale BEFORE  UPDATE ON widgetSale
    FOR EACH ROW
    BEGIN
        IF OLD.id = NEW.id AND OLD.reconciled = 1 THEN
            SIGNAL SQLSTATE "45000" set message_text = "Cannot update reconciled row: ";
        END IF
    END //
DELIMITER ;

```
# DBMS RoadMap
[complete Road Map ](https://whimsical.com/dbms-roadmap-TciRgjVXRmJYjgtFiyX37R)

# SQL languages

**DDL** is the short name of Data Definition Language, which deals with database schemas and descriptions, of how the data should reside in the database.

**DML** is the short name of Data Manipulation Language that deals with data manipulation, and includes most common SQL statements such SELECT, INSERT, UPDATE, DELETE, etc, and it is used to store, modify, retrieve, delete and update data in the database.

**DCL** is the short name of Data Control Language which includes commands such as GRANT, and is mostly concerned with rights, permissions, and other controls of the database system.

# Datatypes
Text types

| Data type        | Description                                                                                                                                                                                                                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CHAR(size)       | Holds a fixed-length string (can contain letters, numbers, and special characters). The fixed size is specified in parentheses. Can store up to 255 characters                                                                                                                                   |
| VARCHAR(size)    | Holds a variable-length string (can contain letters, numbers, and special characters). The maximum size is specified in parentheses. Can store up to 255 characters. Note: If you put a greater value than 255 it will be converted to a TEXT type                                               |
| TINYTEXT         | Holds a string with a maximum length of 255 characters                                                                                                                                                                                                                                           |
| TEXT             | Holds a string with a maximum length of 65,535 characters                                                                                                                                                                                                                                        |
| BLOB             | For BLOBs (Binary Large OBjects). Holds up to 65,535 bytes of data                                                                                                                                                                                                                               |
| MEDIUMTEXT       | Holds a string with a maximum length of 16,777,215 characters                                                                                                                                                                                                                                    |
| MEDIUMBLOB       | For BLOBs (Binary Large OBjects). Holds up to 16,777,215 bytes of data                                                                                                                                                                                                                           |
| LONGTEXT         | Holds a string with a maximum length of 4,294,967,295 characters                                                                                                                                                                                                                                 |
| LONGBLOB         | For BLOBs (Binary Large Objects). Holds up to 4,294,967,295 bytes of data                                                                                                                                                                                                                        |
| ENUM(x,y,z, etc.) | Let you enter a list of possible values. You can list up to 65535 values in an ENUM list. If a value is inserted that is not in the list, a blank value will be inserted. Note: The values are sorted in the order you enter them.You enter the possible values in this format: ENUM('X','Y','Z') |
| SET              | Similar to ENUM except that SET may contain up to 64 list items and can store more than one choice                                                                                                                                                                                               |

Number types

| Data type       | Description                                                                                                                                                                                                                           |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TINYINT(size)   | -128 to 127 normal. 0 to 255 UNSIGNED*. The maximum number of digits may be specified in parentheses |
| SMALLINT(size)  | -32768 to 32767 normal. 0 to 65535 UNSIGNED*. The maximum number of digits may be specified in parentheses |
| MEDIUMINT(size) | -8388608 to 8388607 normal. 0 to 16777215 UNSIGNED*. The maximum number of digits may be specified in parentheses |
| INT(size)       | -2147483648 to 2147483647 normal. 0 to 4294967295 UNSIGNED*. The maximum number of digits may be specified in parentheses |
| BIGINT(size)    | -9223372036854775808 to 9223372036854775807 normal. 0 to 18446744073709551615 UNSIGNED*. The maximum number of digits may be specified in parentheses |
| FLOAT(size,d)   | A small number with a floating decimal point. The maximum number of digits may be specified in the size parameter. The maximum number of digits to the right of the decimal point is specified in the d parameter                     |
| DOUBLE(size,d)  | A large number with a floating decimal point. The maximum number of digits may be specified in the size parameter. The maximum number of digits to the right of the decimal point is specified in the d parameter                     |
| DECIMAL(size,d) | A DOUBLE stored as a string, allowing for a fixed decimal point. The maximum number of digits may be specified in the size parameter. The maximum number of digits to the right of the decimal point is specified in the d parameter |

Data types

| Data type   | Description                                                                                                                                                                                                                              |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DATE()      | A date. Format: YYYY-MM-DDNote: The supported range is from '1000-01-01' to '9999-12-31'                                                                                                                                                 |
| DATETIME()  | *A date and time combination. Format: YYYY-MM-DD HH:MI:SSNote: The supported range is from '1000-01-01 00:00:00' to '9999-12-31 23:59:59'                                                                                                |
| TIMESTAMP() | *A timestamp. TIMESTAMP values are stored as the number of seconds since the Unix epoch ('1970-01-01 00:00:00' UTC). Format: YYYY-MM-DD HH:MI:SSNote: The supported range is from '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC |
| TIME()      | A time. Format: HH:MI:SSNote: The supported range is from '-838:59:59' to '838:59:59'                                                                                                                                                    |
| YEAR()      | A year in two-digit or four-digit format.Note: Values allowed in the four-digit format: 1901 to 2155. Values allowed in the two-digit format: 70 to 69, representing years from 1970 to 2069                                                     |

# Database
Create
```sql
create database dbname;
```
Drop
```sql
drop database dbname;
```

# Table
Check if not exit and create
```sql
IF OBJECT_ID('tbl_kunde', N'U') is not null
    drop table tbl_kunde;
GO
create table tbl_kunde (
  id_kunde int not null primary key,
  fi_moral_nr int,
  name varchar(25) not null,
  vorname varchar not null,
  wohnort varchar
);
GO
```

# Alter Table
Primary Key
```sql
ALTER TABLE tbl_kunde ADD PRIMARY KEY (id_kunde);
```
Foreign Key
```sql
ALTER TABLE tbl_kunde ADD CONSTRAINT FK_fi_moral_nr FOREIGN KEY (fi_moral_nr)
  REFERENCES tkey_moral
  ON UPDATE CASCADE
  ON DELETE SET NULL;
```
Constraint
```sql
ALTER TABLE tkey_moral ADD CONSTRAINT PK_id_moral_nr PRIMARY KEY (id_moral_nr);
ALTER TABLE tbl_kunde ADD CONSTRAINT FK_fi_moral_nr FOREIGN KEY (fi_moral_nr)
  REFERENCES tkey_moral
  ON UPDATE CASCADE
  ON DELETE SET NULL;
```
# Insert
Selected fields
```sql
insert into tkey_moral (id_moral_nr, moral_bez) values (1, 'gut'), (2, 'schlecht'), (3, 'schlecht');
```

All fields
```sql
INSERT INTO tbl_kunde VALUES (3838,1,'Meier','Laura','Waldibrücke')
```
# Update
Update by condition
```sql
update tbl_kunde set name = 'Menzer' where name = 'Waltenspühl-Menzer'
update tass_police set praem_stufe = 101 where praem_stufe = 108
```

# Delete
All
```sql
delete from tbl_kunde
```
Condition
```sql
delete from tkey_moral where id_moral_nr = 4
delete from tbl_kunde where vorname = 'Peter' and name = 'Fischer' or vorname = 'Martin' and name = 'Müller'
```

# Index
Create
```sql
create unique index ix_kund_name on tbl_kunde (name)
```
Disable
```sql
alter index ix_kund_name on tbl_kunde disable
```
Rebuild
```sql
alter index ix_kund_name on tbl_kunde rebuild
```
Reorganize
```sql
alter index ix_kund_name on tbl_kunde reorganize
```
Drop
```sql
drop index ix_kund_name on tbl_kunde
```
Alter
```sql
drop index ix_kund_name on tbl_kunde
```

#Type
create
```sql
create type tp_moralisches from numeric(9,0)
```

#Login
change password
```sql
alter login stud23 with password = 'hello' old_password = 'pass_wd23'
```

#User
create
```sql
create user romulus from login romulus
```
drop
```sql
drop user romulus
```

# Grant/ Revoke
Available permissions: CREATE DEFAULT, CREATE FUNCTION, CREATE 
PROCEDURE, CREATE ROLE, CREATE TABLE, CREATE TYPE, CREATE VIEW, 
DELETE, EXECUTE, INSERT, SELECT, UPDATE

Grant rights
```sql
grant select, insert, delete, references, update to romulus
```
Grant references
```sql
grant references (id_moral_nr) on tkey_moral to romulus
```
Revoke
```sql
revoke insert, delete, references, update to romulus
```

#Role
Create
```sql
create role verkauf
```
Add member
```sql
exec sp_addrolemember 'verkauf', 'anna'
```

#Grant Role
Grant rights
```sql
grant select, update, insert, delete on tbl_kunde to verkauf
```

#View
Create detailed
```sql
CREATE VIEW v_kunden (id, name, vorname, ort, police, gebiet) AS
  SELECT k.id_kunde, k.name, k.vorname, k.wohnort, v.vers_bez,
         v.vers_gebiet
    FROM tbl_kunde AS k, tkey_versicherung AS v, tass_police AS p
      WHERE k.id_kunde = p.id_fi_kunde
        AND p.id_fi_vers_art = v.id_vers_art;
```
Create simple
```sql
create view plain as select id_kunde, name, vorname from tbl_kunde
```
Create advanced
```sql
create view v_umsatz as select sum(cast(bezahlt as float)) as 'Umsatz aus Policen' from tass_police
```

#Select
Basic
```sql
select dt_jahr from dbo.tbl_stueck
```
Condition
```sql
select dt_jahr from dbo.tbl_stueck where dt_jahr is not null
```
Order
```sql
select dt_jahr from dbo.tbl_stueck
where dt_jahr is not null
order by dt_jahr desc
```
Distinct
```sql
select distinct dt_jahr from dbo.tbl_stueck
where dt_jahr is not null
order by dt_jahr asc
```
And Condition
```sql
select * from tbl_stueck where dt_jahr = 1970 and dt_zeit > 3
```
Between
```sql
select * from tbl_stueck where dt_jahr = 1970 and dt_zeit between 3 and 10
```
Like
```sql
select * from tbl_stueck where dt_stueck_titel like 'Let%'
```
Count
```sql
select count(dt_stueck_titel) from tbl_stueck where dt_stueck_titel like 'Let%'
```
Having and without join
```sql
select i.dt_name, count(s.dt_stueck_titel) from tbl_stueck as s, tkey_interpret as i
where  s.fi_interpret = i.id_interpret
group by i.dt_name
having count(s.dt_stueck_titel) >10
order by count(s.dt_stueck_titel) de
```
#Join the hard way
Inner Join
```sql
select s.dt_stueck_titel, i.dt_name
from tbl_stueck as s, tkey_interpret as i
where  s.fi_interpret = i.id_interpret
order by s.dt_stueck_titel
```
Multi Join
```sql
select sa.id_jahr, st.dt_stueck_titel, ip.dt_name
from tbl_stueck as st, tass_stueck_sampler as ss, tkey_sampler as sa, tkey_interpret as ip
where ss.id_fi_stueck_nr = st.id_stueck_nr 
and ss.id_fi_jahr = sa.id_jahr
and  st.fi_interpret = ip.id_interpret
order by  st.dt_stueck_titel
```

#Join the right way
Inner Equi Key Joining
```sql
select dt_stueck_titel, dt_name
from tbl_stueck join tkey_interpret 
on fi_interpret = id_interpret
order by dt_stueck_titel
```
Multi Inner Equi Key Joining
```sql
select id_fi_jahr, dt_stueck_titel, dt_name
from tbl_stueck
join tass_stueck_sampler on id_fi_stueck_nr = id_stueck_nr
join tkey_interpret on fi_interpret = id_interpret
order by  dt_stueck_titel
```

#About Joins
![sql join summary](http://i.stack.imgur.com/hzl8e.png)
```sql
SELECT customers.id, customers.name, items.name, customers.state 
FROM customers, items
WHERE customers.id=seller_id
ORDER BY customers.id
```
**Join tables** -> Joining two tables together in query output. The third line is important because it shows how the two tables are related (in this case it is their key values).   

```sql
SELECT customers.name, items.name FROM customers
LEFT OUTER JOIN items ON customers.id=seller_id
```
**LEFT/RIGHT OUTER JOIN** -> Takes the table left of the word 'LEFT' or 'RIGHT' (in this case customers) and joins it regardless of whether it has any values or not. So the above statement shows all users/customers, even if they aren't selling anything.  

#Select with Subqueries 
Select max and min values
```sql
select dt_stueck_titel as Titel, dt_zeit as Zeit
from tbl_stueck
where dt_zeit = (select max(dt_zeit) from tbl_stueck)
or dt_zeit = (select min(dt_zeit) from tbl_stueck)
order by dt_zeit;
```
Select with a query in condition
```sql
select dt_stueck_titel as Titel, dt_zeit as Zeit
from tbl_stueck
where dt_zeit between (select avg(dt_zeit) from tbl_stueck)*0.9
and (select avg(dt_zeit) from tbl_stueck)*1.1
order by dt_zeit;
```
Select query as value
```sql
select dt_stueck_titel as Titel,
dt_zeit/(select avg(dt_zeit) from tbl_stueck)*100 as Zeit
from tbl_stueck
where dt_stueck_titel = 'You Shook Me'
```

#Union
Unify two result sets with a condition
```sql
select *  from
(select dt_stueck_titel as titel, 'stück' as 'type' from tbl_stueck
union
select dt_name as titel,  'inter' as 'type' from tkey_interpret
union
select dt_stao as titel,  'stao' as 'type' from tkey_standort) as t
where t.titel like '%boy%'
```

#Transactions
Run a transaction
```sql
begin transaction
update tass_police set bezahlt = 0 where id_fi_kunde = 3533 and id_fi_vers_art = 1700
commit
-- or rollback
```

#Function
A function can be called from inside a statement just like any other function and can return a scalar value.

Create - Get value from table
```sql
create function f_plic_bez()
  returns decimal(10,2)
  as begin
  return (select sum(bezahlt) from tass_police)
  end;
go
select  dbo.f_plic_bez() AS 'Summe aller bezahlten Leistungen'
go
```
Drop
```sql
drop function f_bezahlt_versich
```
Create - With parameters
```sql
create function f_rabatt(@name varchar(40), @vers varchar(30))
  returns int
  as begin
  return (select (praem_stufe-100)*10 from  tass_police
  join tbl_kunde on id_fi_kunde = id_kunde
  join tkey_versicherung on id_fi_vers_art = id_vers_art
  where name = @name and vers_bez = @vers)
  end
```

#Procedure
Stored procedures are stored as precompiled code (stored routine) and called by the programmer wherever it wants to fire. The stored procedure can return value(s).

Create and execute
```sql
CREATE PROCEDURE p_polic_del @fname VARCHAR(30), @versich VARCHAR(30)
  AS
  BEGIN
    DELETE FROM tass_police
      FROM tbl_kunde, tkey_versicherung
        WHERE name = @fname
          AND id_kunde = id_fi_kunde
          AND id_fi_vers_art = id_vers_art
          AND vers_bez = @versich
    IF @@ROWCOUNT = 0
      PRINT 'Police existiert nicht.'
      ELSE PRINT 'Löschung vollzogen.'
  END
GO

EXECUTE p_polic_del 'Meier', 'Taggeld';
```

#Variables
Declare
```sql
DECLARE @veraenderung SMALLINT = 180;
DECLARE @neue_summe INT;
```

#Trigger
Triggers are named database objects fired automatically when insert, delete, update (or another event) occurred, there can be no explicit invocation. A trigger can not return any data.

Create simple
```sql
create trigger t_ort on tbl_kunde
  after insert, update
  as beginn
    set @ort = select wohnort from inserted)
    if((@ort like '/^[A-Z]') && len(@ort) < 2)
      rollback transaction
  end
end
```

Drop
```sql
drop trigger t_ort
```
Checks the referential integrity
```sql
create trigger t_bst_mut on bst
    for insert, update
    as
    begin
        set nocount on;
        if(select id_fi_k from inserted) NOT IN (select id_kund from knd)
            begin
                raiserror('Es besteht kein entsprechender Kunde.', 15, 1);
                rollback transaction;
            end
    end;
```
Replaces on delete no action
```sql
create trigger t_ku_del on knd
    for delete
    as
    begin
        set nocount on;
        if((select id_kunde from deleted) IN (select id_fi_k from bst))
            begin
                raiserror('Löschung verwert; es bestehen noch Bestelungen für diesen Kunden.', 15, 1)
                rollback transaction
            end
    end;
```
Replaces on update cascade
```sql
create trigger t_update_knd on knd
    after update
    as
    begin
        set nocount on;
        update bst set id_fi_k = (select id_kund from inserted)
    end;
```
Replaces on delete cascade
```sql
create trigger t_delete_knd on knd
    after delete
    as
    begin
        delete from bst where id_fi_k = (select id_kund from deleted)
    end;
```
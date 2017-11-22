# Procedure

## List
```SQL
SELECT
    procedure_id,
    `procedure_name`
FROM dim_procedure
WHERE active=TRUE
```

## Select single entity
```SQL
SELECT
    procedure_id,
    `procedure_name`
FROM dim_procedure
WHERE procedure_id=:procedure_id
```

## Insert
1. Sample request:
    ```javascript
    {"procedure_name": "Foot X-Ray"}
    ```
2. Insert it into the database
    ```SQL
    INSERT INTO dim_procedure (`procedure_name`) VALUES (:procedure_name)
    ```
3. Grab the new id and retrieve the added entity, sending it along in the response.

## Update
1. Sample request:
    ```javascript
    {"procedure_id": 1, "procedure_name": "Left Foot X-Ray"}
    ```
2. Update the database
    ```SQL
    UPDATE dim_procedure SET `procedure_name`=:procedure_name WHERE procedure_id=:procedure_id
    ```
3. Retrieve the updated entity, and send it along in the response.

## Delete
> We should not ever really delete a procedure. Instead, we will set the active field to FALSE.

```SQL
UPDATE dim_procedure SET active=FALSE WHERE procedure_id=:procedure_id
```

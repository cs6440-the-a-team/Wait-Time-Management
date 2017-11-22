# Procedure Status

## List
```SQL
SELECT
    ps.procedure_status_id,
    ps.procedure_status,
    ps.procedure_id,
    ps.procedure_status_order,
    ps.expected_duration,
    FLOOR(AVG(fpl.duration)) AS average_duration
FROM dim_procedure_status AS ps
LEFT JOIN fact_patient_log AS fpl ON fpl.procedure_status_id=ps.procedure_status_id
WHERE ps.active=TRUE
GROUP BY ps.procedure_status_id
```

## Select single entity
```SQL
SELECT
    ps.procedure_status_id,
    ps.procedure_status,
    ps.procedure_id,
    ps.procedure_status_order,
    ps.expected_duration,
    FLOOR(AVG(fpl.duration)) AS average_duration
FROM dim_procedure_status AS ps
LEFT JOIN fact_patient_log AS fpl ON fpl.procedure_status_id=ps.procedure_status_id
WHERE ps.procedure_status_id=:procedure_status_id
```

## Insert
1. Sample request:
    ```javascript
    {"procedure_status": "Patient Check In", "procedure_id": 1, "procedure_status_order": 1, "expected_duration": 10}
    ```
2. Insert into the database:
    ```SQL
    INSERT INTO dim_procedure_status (procedure_status, procedure_id, procedure_status_order, expected_duration) VALUES (:procedure_status, :procedure_id, :procedure_status_order, :expected_duration)
    ```
3. Grab the new id, and retrieve the entity, sending it along in the response.

## Update
1. Sample request:
    ```javascript
    {"procedure_status_id": 1, "procedure_status": "Patient Check In", "procedure_id": 1, "procedure_status_order": 1, "expected_duration": 7}
    ```
2. Update the database:
    ```SQL
    UPDATE dim_procedure_status SET procedure_status=:procedure_status, procedure_id=:procedure_id, procedure_status_order=:procedure_status_order, expected_duration=:expected_duration WHERE procedure_status_id=:procedure_status_id
    ```
3. Retrieve the updated entity and send it along in the response.

## Delete
> We should not ever really delete a procedure status. Instead, we will set the active field to FALSE.
```SQL
UPDATE dim_procedure_status SET active=FALSE WHERE procedure_status_id=:procedure_status_id
```

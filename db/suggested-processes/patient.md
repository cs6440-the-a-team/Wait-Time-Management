# Patient

## List
```SQL
SELECT
    p.patient_id AS id,
    p.alias AS alias,
    p.patient_name AS `name`,
    p.room_id,
    p.procedure_id,
    p.procedure_status_id,
    s.expected_duration,
    fpl.time_sk AS start_time
FROM dim_patient AS p
LEFT JOIN dim_room AS r ON p.room_id=r.room_id
LEFT JOIN dim_procedure_status AS s ON p.procedure_status_id=s.procedure_status_id 
LEFT JOIN fact_patient_log AS fpl ON p.last_patient_log_id=fpl.id 
WHERE p.active=TRUE
```

## Select single entity
```SQL
SELECT
    p.patient_id AS id,
    p.alias AS alias,
    p.patient_name AS `name`,
    p.room_id,
    p.procedure_id,
    p.procedure_status_id,
    s.expected_duration,
    fpl.time_sk AS start_time
FROM dim_patient AS p
LEFT JOIN dim_room AS r ON p.room_id=r.room_id
LEFT JOIN dim_procedure_status AS s ON p.procedure_status_id=s.procedure_status_id 
LEFT JOIN fact_patient_log AS fpl ON p.last_patient_log_id=fpl.id 
WHERE p.id=:patient_id
```

## Insert

1. You will receive request with something like the following patient data: `{"name": "John", "procedure_id": 1, "procedure_status_id": 2, "room_id": 3}`

2. Generate a random and unique alias for that patient. 
> I don't think using the id from the database 
is a good idea, since it is just auto incremented, 
and people might be able to infer who is who.

3. Insert into the database
```SQL 
INSERT INTO dim_patient (alias, patient_name, room_id, procedure_id, procedure_status_id) VALUES ("PA234", "John", 3, 1, 2)
```

4. Grab the id from the patient insert

> Something along the lines of `Long lastId = ((BigInteger) session.createSQLQuery("SELECT LAST_INSERT_ID()").uniqueResult()).longValue();` in Java using Hibernate.

5. Make an entry into the fact_patient_log
```SQL
INSERT INTO fact_patient_log (patient_id, procedure_status_id, time_sk) VALUES (1 /* <-- MySQL id you got from the patient insert */, 2, NOW())
```

6. Grab the id from the log insert

7. Update the dim_patient table with it
```SQL
UPDATE dim_patient SET last_patient_log_id=1 /* <-- MySQL id you got from the log insert */ WHERE patient_id=1 /* <-- MySQL id you got from the patient insert */
```

8. Select the patient, using the instructions in *Select single entity*, and send it in the response. 

## Update
1. Update the appropriate fields. You **may or may not** receive all of these fields: `{"name": "New name", "procedure_id": 2, "procedure_status_id": 1, "room_id": 2}`.
Only update the field you are given.
2. If the procedure_status_id changed:
   - Update the last log entry's duration field by using the last_patient_log_id on the patient entity
    ```SQL
    UPDATE fact_patient_log SET duration = TIMESTAMPDIFF(MINUTE, time_sk, NOW()) WHERE id=:last_patient_log_id /* <-- that would be the current last_patient_log_id */
    ```
   - Make a new entry in the fact_patient_log table
   - Update the patient's last_patient_log_id to match that new entry's id.
3. Select the patient entity, and send it in the response.

## Delete
> We should not ever really delete a patient. Instead, we will set the active field to FALSE.

```SQL
UPDATE dim_patient SET active=FALSE WHERE patient_id=:patient_id
```

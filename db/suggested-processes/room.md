# Room

## List
```SQL
SELECT
    r.room_id,
    r.room_name,
    r.room_type_id,
    r.room_status_id,
    (CASE WHEN s.expected_duration = -1 THEN ps.expected_duration ELSE s.expected_duration END) AS expected_duration,
    DATE_FORMAT(frl.time_sk, '%Y-%m-%dT%TZ') AS start_time,
    r.last_room_log_id
FROM dim_room AS r
LEFT JOIN dim_room_status AS s ON r.room_status_id=s.room_status_id
LEFT JOIN dim_patient AS p ON p.room_id=r.room_id AND p.active=TRUE
LEFT JOIN dim_procedure_status AS ps ON ps.procedure_status_id=p.procedure_status_id
LEFT JOIN fact_room_log AS frl ON r.last_room_log_id=frl.id
WHERE r.active=TRUE
```

## Select single entity
```SQL
SELECT
    r.room_id,
    r.room_name,
    r.room_type_id,
    r.room_status_id,
    (CASE WHEN s.expected_duration = -1 THEN ps.expected_duration ELSE s.expected_duration END) AS expected_duration,
    DATE_FORMAT(frl.time_sk, '%Y-%m-%dT%TZ') AS start_time,
    r.last_room_log_id
FROM dim_room AS r
LEFT JOIN dim_room_status AS s ON r.room_status_id=s.room_status_id
LEFT JOIN dim_patient AS p ON p.room_id=r.room_id AND p.active=TRUE
LEFT JOIN dim_procedure_status AS ps ON ps.procedure_status_id=p.procedure_status_id
LEFT JOIN fact_room_log AS frl ON r.last_room_log_id=frl.id
WHERE r.room_id=:room_id
```

## Insert
1. You will receive a request like this: `{"room_name": "Room 1", "room_type_id": 1}`
2. Insert it into the database
    ```SQL
    INSERT INTO dim_room (room_type_id, room_name) VALUES (:room_type_id, :room_name)
    ```
3. Grab the MySQL id from that insert, retrieve that single instance, and send it in the response

## Update
1. You will receive a request like this: 
    ```javascript
    {"room_id": 1, "room_name": "Room One", "room_type_id": 1, "room_status_id": 2}
    ```
2. Update the database:
    ```SQL
    UPDATE dim_room SET room_name=:room_name, room_type_id=:room_type_id, room_status_id=:room_status_id WHERE room_id=:room_id
    ```

3. If the room_status_id changed:
    - Update the last `fact_room_log` entry's duration using the `last_room_log_id` property on the room_entity:
    ```SQL
    UPDATE fact_room_log SET duration = TIMESTAMPDIFF(MINUTE, time_sk, NOW()) WHERE id=:last_room_log_id
    ```
    - Make a new entry in the fact_room_log table
    - Update the room's last_room_log_id to match that new entry's id.

4. Retrieve the single instance, using the above process, and send it in the response.

## Delete
> We should not ever really delete a room. Instead, we will set the active field to FALSE. 
```SQL
UPDATE dim_room SET active=FALSE WHERE room_id=:room_id
```

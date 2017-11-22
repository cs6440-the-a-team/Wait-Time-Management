# Room Status

## List
```SQL
SELECT 
    rs.room_status_id,
    rs.room_status,
    rs.room_type_id,
    rs.room_status_order,
    rs.expected_duration,
    FLOOR(AVG(frl.duration)) AS average_duration
FROM dim_room_status AS rs
LEFT JOIN fact_room_log AS frl ON rs.room_status_id=frl.room_status_id
WHERE rs.active=TRUE
GROUP BY rs.room_status_id
```

## Select single entity
```SQL
SELECT 
    rs.room_status_id,
    rs.room_status,
    rs.room_type_id,
    rs.room_status_order,
    rs.expected_duration,
    FLOOR(AVG(frl.duration)) AS average_duration
FROM dim_room_status AS rs
LEFT JOIN fact_room_log AS frl ON rs.room_status_id=frl.room_status_id
WHERE rs.room_status_id=:room_status_id
```

## Insert
1. Sample request: 
    ```javascript
    {"room_status": "Available", "room_type_id" 1, "room_status_order": 1, "expected_duration": 5}
    ```
2. Insert it into the database
    ```SQL
    INSERT INTO dim_room_status (room_status, room_type_id, room_status_order, expected_duration) VALUES (:room_status, :room_type_id, :room_status_order, expected_duration)
    ```
3. Return the new entity, retrieved using the process noted above

## Update
1. Sample request:
    ```javascript
    {"room_status_id": 1, "room_status": "Available", "room_type_id": 1, "room_status_order": 1, "expected_duration": 8}
    ```
2. Update the database
    ```SQL
    UPDATE dim_room_status SET room_status=:room_status, room_type_id=:room_type_id, room_status_order=:room_status_order, expected_duration=:expected_duration WHERE room_status_id=:room_status_id
    ```
3. Return the updated entity, retrieved using the process noted above

## Delete
> We should not ever really delete a room status. Instead, we will set the active field to FALSE.
```SQL
UPDATE dim_room_status SET active=FALSE WHERE room_status_id=:room_status_id
```

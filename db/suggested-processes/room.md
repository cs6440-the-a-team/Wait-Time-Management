# Room

## List
```SQL
SELECT
    r.room_id AS id,
    r.room_name AS `name`,
    r.room_type_id,
    r.room_status_id,
    s.expected_duration,
    frl.time_sk AS start_time
FROM dim_room AS r
LEFT JOIN dim_room_status AS s ON r.room_status_id=s.room_status_id
LEFT JOIN fact_room_log AS frl ON r.last_room_log_id=frl.id
WHERE r.active=TRUE
```

## Retrieve a single instance
```SQL
SELECT
    r.room_id AS id,
    r.room_name AS `name`,
    r.room_type_id,
    r.room_status_id,
    s.expected_duration,
    frl.time_sk AS start_time
FROM dim_room AS r
LEFT JOIN dim_room_status AS s ON r.room_status_id=s.room_status_id
LEFT JOIN fact_room_log AS frl ON r.last_room_log_id=frl.id
WHERE r.room_id=:room_id
```

## Insert
1. You will receive a request like this: `{"name": "Room 1", "room_type_id": 1}`
2. Insert it into the database
```SQL
INSERT INTO dim_room (room_type_id, room_name) VALUES (:room_type_id, :room_name)
```
3. Grab the MySQL id from that insert, retrieve that single instance, and send it in the response

## Update
> TODO: 
## Delete
> TODO: 

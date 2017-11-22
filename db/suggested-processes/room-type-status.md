# Room Status

## List
```SQL
SELECT 
    rs.room_status_id,
    rs.room_status,
    rs.room_type_id,
    rs.`order`,
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
    rs.`order`,
    rs.expected_duration,
    FLOOR(AVG(frl.duration)) AS average_duration
FROM dim_room_status AS rs
LEFT JOIN fact_room_log AS frl ON rs.room_status_id=frl.room_status_id
WHERE rs.room_status_id=:room_status_id
```

> TODO: Insert, Update, Delete

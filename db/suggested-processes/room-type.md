# Room Type

## List
```SQL
SELECT room_type_id, room_type
FROM dim_room_type
WHERE active=TRUE
```

## Select single entity
```SQL
SELECT room_type_id, room_type
FROM dim_room_type
WHERE room_type_id=:room_type_id
```

## Insert
1. Sample request:
    ```javascript
    {"room_type": "Operation"}
    ```
2. Insert into the database:
    ```SQL
    INSERT INTO dim_room_type (room_type) VALUES (:room_type)
    ```
    > Watch out for unique index constraint exception here, since each room type has to be unique.

## Update
1. Sample request:
    ```javascript
    {"room_type_id": 1, "room_type": "Operation Room"}
    ```
2. Update the database:
    ```SQL
    UPDATE dim_room_type SET room_type=:room_type WHERE room_type_id=:room_type_id
    ```
3. Send the updated room type in the response.

## Delete
> We should not ever really delete a room type. Instead, we will set the active field to FALSE.
```SQL
UPDATE dim_room_type SET active=FALSE WHERE room_type_id=:room_type_id
```

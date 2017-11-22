# Suggested Processes

## Public View Query
```SQL
SELECT 
    p.alias AS patient_id, 
    r.room_name AS `location`, 
    s.status, 
    fpl.time_sk AS start_time 
FROM dim_patient AS p 
INNER JOIN dim_room AS r ON p.room_id=r.room_id 
INNER JOIN dim_procedure_status AS s ON p.procedure_status_id=s.procedure_status_id 
INNER JOIN fact_patient_log AS fpl ON p.last_patient_log_id=fpl.id 
WHERE p.active=TRUE
```

## Other suggestions
* [Patient](patient.md)
* [Room](room.md)
* [Room Type Status](room-type-status.md)
* [Room Type](room-type.md)
* [Procedure](procedure.md)
* [Procedure Status](procedure-status.md)
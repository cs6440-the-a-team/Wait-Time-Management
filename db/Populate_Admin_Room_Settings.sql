SELECT
	rm.room_name AS room_name,
	rm_type.room_type AS room_type,
	stat.room_status AS room_status
FROM
	dim_room rm
INNER JOIN
	dim_room_type rm_type
	ON rm.room_type_id = rm.room_type_id
INNER JOIN (
	SELECT
		room_id,
		MAX(time_sk) AS max_time
	FROM
		fact_room_log
	GROUP BY 1
) max_time
  ON rm.room_id = max_time.room_id
INNER JOIN
	fact_room_log rm_log
	ON (max_time.room_id = rm_log.room_id AND max_time.max_time = rm_log.time_sk)
INNER JOIN
	dim_room_status stat
	ON rm_log.room_status_id = stat.room_status_id;
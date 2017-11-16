SELECT
	room_status,
	room_type,
	--AVG((CAST(min_time AS TIMESTAMP)) - (CAST(beg_time AS TIMESTAMP)) DAY(4) TO Minute) AS avg_time
	AVG(TIMESTAMPDIFF(MINUTE, STR_TO_DATE(beg_time, '%Y-%m-%d %H:%i:%s'), STR_TO_DATE(min_time, '%Y-%m-%d %H:%i:%s'))) AS avg_time_in_room
FROM(
	SELECT
		rm.room_name AS room_name,
		rm_stat.room_status AS room_status,
		rm_type.room_type AS room_type,
		rm_log.time_sk AS beg_time,
		MIN(end_log.time_sk) AS min_time
	FROM
		dim_room rm
	INNER JOIN
		dim_room_type rm_type
		ON rm.room_type_id = rm_type.room_type_id
	INNER JOIN
		fact_room_log rm_log
		ON rm.room_id = rm_log.room_id
	INNER JOIN
		dim_room_status rm_stat
		ON rm_log.room_status_id = rm_stat.room_status_id
	INNER JOIN
		fact_room_log end_log
		ON rm_log.room_id = end_log.room_id AND rm_log.room_status_id = end_log.room_status_id + 1 AND rm_log.time_sk < end_log.time_sk
	WHERE 
		rm_log.time_sk < end_log.time_sk
	GROUP BY 1,2,3,4
) data
GROUP BY 1,2;
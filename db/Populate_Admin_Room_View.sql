SELECT 
	room.room_id AS room_id,
	room.room_name AS room_name,
	stat_det.room_status AS room_status,
	--(current_timestamp(0) - CAST(rm_time.max_time AS TIMESTAMP)) DAY(4) TO Minute AS time_elapsed,
	TIMESTAMPDIFF(MINUTE, STR_TO_DATE(rm_time.max_time, '%Y-%m-%d %H:%i:%s'), STR_TO_DATE(NOW(), '%Y-%m-%d %H:%i:%s')) AS time_elapsed,
	stat_det.expected_time AS expected_time
FROM
	dim_room room
INNER JOIN (
	SELECT
		room_id,
		MAX(time_sk) as max_time
		--UNIX_TIMESTAMP() - UNIX_TIMESTAMP(MAX(time_sk)) AS time_elapsed
	FROM
		fact_room_log
	GROUP BY 1
) rm_time
	ON room.room_id = rm_time.room_id
INNER JOIN (
	SELECT
		room_id,
		room_status_id,
		MAX(time_sk) as max_time
	FROM
		fact_room_log
	GROUP BY 1,2
) rm_stat
	ON rm_time.room_id = rm_stat.room_id AND rm_time.max_time = rm_stat.max_time
INNER JOIN (
	SELECT
		room_status_id,
		room_status,
		expected_time
	FROM
		dim_room_status
) stat_det
	ON rm_stat.room_status_id = stat_det.room_status_id;
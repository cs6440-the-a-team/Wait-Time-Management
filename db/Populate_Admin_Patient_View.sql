SELECT 
	pat.patient_id AS patient_id,
	pat.patient_name AS patient_name,
	pro.procedure_name AS procedure_name,
	stat.status AS status,
	--(current_timestamp(0) - CAST(pat_time.first_time AS TIMESTAMP)) DAY(4) TO Minute AS time_elapsed,
	TIMESTAMPDIFF(MINUTE, STR_TO_DATE(pat_time.first_time , '%Y-%m-%d %H:%i:%s'), STR_TO_DATE(NOW(), '%Y-%m-%d %H:%i:%s')) AS time_elapsed,
	pro.expected_time AS expected_time,
	room.room_name AS location
FROM
	dim_patients pat
INNER JOIN
	dim_procedure pro
	ON pat.procedure_code = pro.procedure_code
INNER JOIN
	dim_patient_status stat
	ON pat.patient_status_id = stat.patient_status_id
INNER JOIN
	dim_room room
	ON pat.room_id = room.room_id
INNER JOIN (
	SELECT
		patient_id AS patient_id,
		MIN(time_sk) AS first_time
	FROM
		fact_patient_log
	GROUP BY 1
) pat_time
	ON pat.patient_id = pat_time.patient_id;
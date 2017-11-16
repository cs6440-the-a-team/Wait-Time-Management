SELECT
	pro.procedure_name AS procedure_name,
	pro.expected_time AS expected_time,
	--AVG((CAST(end_time.end_time AS TIMESTAMP)) - (CAST(beg_time.beg_time AS TIMESTAMP)) DAY(4) TO Minute) AS avg_time_in_procedure
	AVG(TIMESTAMPDIFF(MINUTE, STR_TO_DATE(beg_time.beg_time, '%Y-%m-%d %H:%i:%s'), STR_TO_DATE(end_time.end_time, '%Y-%m-%d %H:%i:%s'))) AS avg_time_in_procedure
FROM
	rc_dim_procedure pro
INNER JOIN
	rc_dim_patient_status stat
	ON pro.procedure_code = stat.procedure_code
INNER JOIN (
	SELECT DISTINCT
		patient_id,
		patient_status_id,
		time_sk AS end_time
	FROM
		rc_fact_patient_log
	WHERE
		patient_status_id IN (3, 8)
) end_time
	ON stat.patient_status_id = end_time.patient_status_id
INNER JOIN (
	SELECT DISTINCT
		patient_id,
		patient_status_id,
		time_sk AS beg_time
	FROM
		rc_fact_patient_log
	WHERE
		patient_status_id IN (2, 7)
) beg_time
	ON end_time.patient_id = beg_time.patient_id
GROUP BY 1,2;
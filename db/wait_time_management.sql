-- Create relevant tables
CREATE TABLE dim_room_type (
    room_type_id int,
    room_type varchar(250)
) PRIMARY INDEX(room_type_id);

CREATE TABLE dim_room (
	room_id int,
	room_type_id int,
	room_name varchar(250)
) PRIMARY INDEX(room_id);

CREATE TABLE dim_room_status (
	room_status_id int,
	room_type_id int,
	room_status varchar(250),
	expected_time int
) PRIMARY INDEX(room_status_id);

CREATE TABLE fact_room_log (
	room_id varchar(250),
	room_status_id int,
	time_sk varchar(250)
) PRIMARY INDEX(time_sk, room_id);

CREATE TABLE dim_procedure (
	procedure_code int,
	procedure_name varchar(250),
	expected_time int,
	room_type_id int
) PRIMARY INDEX(procedure_code);

CREATE TABLE dim_patients (
	patient_id int,
	alias varchar(250),
	patient_name varchar(250),
	procedure_code int,
	patient_status_id int,
	--time_elapsed varchar(250),
	room_id int
) PRIMARY INDEX(patient_id);

CREATE TABLE dim_patient_status (
	patient_status_id int,
	procedure_code int,
	status varchar(250),
	--order int,
	expected_time int
) PRIMARY INDEX (patient_status_id);

CREATE TABLE fact_patient_log (
	patient_id int,
	patient_status_id int,
	time_sk varchar(250)
) PRIMARY INDEX(patient_id, time_sk);

-- Insert Statements - 
INSERT INTO dim_room_type (room_type_id, room_type) VALUES (1, 'Procedure Room');
INSERT INTO dim_room_type (room_type_id, room_type) VALUES (2, 'Recovery Room');

INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_time) VALUES (1, 1, 'Room Available', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_time) VALUES (2, 1, 'Pre-Procedure Prep', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_time) VALUES (3, 1, 'Procedure', -1);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_time) VALUES (4, 1, 'Post-Procedure Prep', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_time) VALUES (5, 1, 'Ready for Clean-up', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_time) VALUES (6, 1, 'Clean-up', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_time) VALUES (7, 2, 'Room Available', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_time) VALUES (8, 2, 'Recovery', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_time) VALUES (9, 2, 'Ready for Clean-up', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_time) VALUES (10, 2, 'Clean-up', 30);

INSERT INTO dim_room (room_id, room_type_id, room_name) VALUES (1, 1, 'Operations 1');
INSERT INTO dim_room (room_id, room_type_id, room_name) VALUES (2, 1, 'XRAY 1');
INSERT INTO dim_room (room_id, room_type_id, room_name) VALUES (3, 2, 'Waiting Room 1');
INSERT INTO dim_room (room_id, room_type_id, room_name) VALUES (4, -1, 'Waiting Area');
INSERT INTO dim_room (room_id, room_type_id, room_name) VALUES (5, -1, 'Exit');

INSERT INTO dim_procedure (procedure_code, procedure_name, expected_time, room_type_id) VALUES (1221, 'XRAY', 30, 1);
INSERT INTO dim_procedure (procedure_code, procedure_name, expected_time, room_type_id) VALUES (2211, 'Surgery', 30, 1);

INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (12, 1221, 'Patient Check In', 15);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (13, 1221, 'Patient in Waiting Area', 10);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (1, 1221, 'Changed', 30);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (2, 1221, 'Picture', 30);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (3, 1221, 'Development', 30);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (4, 2211, 'Patient Check In', 15);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (5, 2211, 'Patient in Waiting Area', 20);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (6, 2211, 'Patient Prepped for Procedure', 30);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (7, 2211, 'Physician Performs Procedure', 35);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (8, 2211, 'Patient Leaving Procedure', 40);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (9, 2211, 'Patient Entering Recovery', 45);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (10, 2211, 'Patient Ready for Discharge', 50);
INSERT INTO dim_patient_status (patient_status_id, procedure_code, status, expected_time) VALUES (11, 2211, 'Patient Transported to Inpatient', 60);

INSERT INTO dim_patients (patient_id, alias, patient_name, procedure_code, patient_status_id, room_id) VALUES (1, 'Alias 1', 'Name 1', 2211, 5);
INSERT INTO dim_patients (patient_id, alias, patient_name, procedure_code, patient_status_id, room_id) VALUES (2, 'Alias 2', 'Name 2', 2211, 5);
INSERT INTO dim_patients (patient_id, alias, patient_name, procedure_code, patient_status_id, room_id) VALUES (3, 'Alias 3', 'Name 3', 1221, 5);
INSERT INTO dim_patients (patient_id, alias, patient_name, procedure_code, patient_status_id, room_id) VALUES (4, 'Alias 4', 'Name 4', 2211, 1);
INSERT INTO dim_patients (patient_id, alias, patient_name, procedure_code, patient_status_id, room_id) VALUES (5, 'Alias 5', 'Name 5', 1221, 4);

INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 4, '2017-11-03 08:00:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 4,	'2017-11-03 08:15:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 5,	'2017-11-03 08:15:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (3, 12, '2017-11-03 08:45:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 6,	'2017-11-03 08:35:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 5,	'2017-11-03 08:30:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (4, 5,	'2017-11-03 09:00:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (3, 13, '2017-11-03 09:00:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 7,	'2017-11-03 09:05:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (4, 6,	'2017-11-03 11:15:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (3, 1,	'2017-11-03 09:10:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 8,	'2017-11-03 09:40:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 9,	'2017-11-03 10:25:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 6,	'2017-11-03 10:30:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 7,	'2017-11-03 11:00:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 8, '2017-11-03 11:35:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (3, 2, '2017-11-03 09:40:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (3, 3, '2017-11-03 10:10:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 10, '2017-11-03 11:15:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 9, '2017-11-03 11:15:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 10, '2017-11-03 12:00:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (5, 12, '2017-11-03 12:00:00');

INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 1, '2017-11-03 08:00:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 2, '2017-11-03 08:35:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 3, '2017-11-03 09:05:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 4, '2017-11-03 09:40:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 5, '2017-11-03 09:50:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 6, '2017-11-03 10:00:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 1, '2017-11-03 10:10:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 2, '2017-11-03 10:30:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 3, '2017-11-03 11:00:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 4, '2017-11-03 11:35:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 5, '2017-11-03 11:40:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 6, '2017-11-03 11:50:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 1, '2017-11-03 08:00:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 2, '2017-11-03 09:10:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 3, '2017-11-03 09:40:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 4, '2017-11-03 10:10:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 5, '2017-11-03 10:40:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 6, '2017-11-03 10:50:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 7, '2017-11-03 08:00:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 8, '2017-11-03 10:25:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 9, '2017-11-03 11:10:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 10, '2017-11-03 11:14:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 7, '2017-11-03 11:15:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 8, '2017-11-03 11:15:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 9, '2017-11-03 12:00:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 10, '2017-11-03 12:10:00');
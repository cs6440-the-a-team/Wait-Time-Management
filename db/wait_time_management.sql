
-- Create relevant tables
CREATE TABLE dim_room_type (
    room_type_id int,
    room_type varchar(250),
	PRIMARY KEY (room_type_id)
);

CREATE TABLE dim_room (
	room_id int,
	room_type_id int,
	room_name varchar(250),
	PRIMARY KEY (room_id)
);

CREATE TABLE dim_room_status (
	room_status_id int,
	room_type_id int,
	room_status varchar(250),
	expected_time int,
	PRIMARY KEY (room_status_id)
);

CREATE TABLE fact_room_log (
	room_id varchar(250),
	room_status_id int,
	time_sk varchar(250),
	PRIMARY KEY (time_sk, room_id)
);

CREATE TABLE dim_procedure (
	procedure_code int,
	procedure_name varchar(250),
	expected_time int,
	room_type_id int,
	PRIMARY KEY (procedure_code)
);

CREATE TABLE dim_patients (
	patient_id int,
	alias varchar(250),
	patient_name varchar(250),
	procedure_code int,
	patient_status_id int,
	room_id int,
	PRIMARY KEY (patient_id)
);

CREATE TABLE dim_patient_status (
	patient_status_id int,
	procedure_code int,
	status varchar(250),
	expected_time int,
	PRIMARY KEY (patient_status_id)
);

CREATE TABLE fact_patient_log (
	patient_id int,
	patient_status_id int,
	time_sk varchar(250),
	PRIMARY KEY (patient_id, time_sk)
);

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

INSERT INTO dim_patients (patient_id, alias, patient_name, procedure_code, patient_status_id, room_id) VALUES (1, 'Alias 1', 'Name 1', 2211, 4, 5);
INSERT INTO dim_patients (patient_id, alias, patient_name, procedure_code, patient_status_id, room_id) VALUES (2, 'Alias 2', 'Name 2', 2211, 5, 5);
INSERT INTO dim_patients (patient_id, alias, patient_name, procedure_code, patient_status_id, room_id) VALUES (3, 'Alias 3', 'Name 3', 1221, 1, 5);
INSERT INTO dim_patients (patient_id, alias, patient_name, procedure_code, patient_status_id, room_id) VALUES (4, 'Alias 4', 'Name 4', 2211, 9, 1);
INSERT INTO dim_patients (patient_id, alias, patient_name, procedure_code, patient_status_id, room_id) VALUES (5, 'Alias 5', 'Name 5', 1221, 12, 4);

INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 4, '11/3/17 8:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 4,	'11/3/17 8:15');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 5,	'11/3/17 8:15');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (3, 12, '11/3/17 8:45');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 6,	'11/3/17 8:35');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 5,	'11/3/17 8:30');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (4, 5,	'11/3/17 9:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (3, 13, '11/3/17 9:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 7,	'11/3/17 9:05');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (4, 6,	'11/3/17 11:15');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (3, 1,	'11/3/17 9:10');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 8,	'11/3/17 9:40');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 9,	'11/3/17 10:25');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 6,	'11/3/17 10:30');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 7,	'11/3/17 11:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 8, '11/3/17 11:35');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (3, 2, '11/3/17 9:40');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (3, 3, '11/3/17 10:10');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (1, 10, '11/3/17 11:15');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 9, '11/3/17 11:15');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (2, 10, '11/3/17 12:00');
INSERT INTO fact_patient_log (patient_id, patient_status_id, time_sk) VALUES (5, 12, '11/3/17 12:00');

INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 1, '11/3/17 8:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 2, '11/3/17 8:35');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 3, '11/3/17 9:05');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 4, '11/3/17 9:40');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 5, '11/3/17 9:50');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 6, '11/3/17 10:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 1, '11/3/17 10:10');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 2, '11/3/17 10:30');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 3, '11/3/17 11:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 4, '11/3/17 11:35');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 5, '11/3/17 11:40');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (1, 6, '11/3/17 11:50');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 1, '11/3/17 8:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 2, '11/3/17 9:10');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 3, '11/3/17 9:40');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 4, '11/3/17 10:10');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 5, '11/3/17 10:40');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (2, 6, '11/3/17 10:50');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 7, '11/3/17 8:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 8, '11/3/17 10:25');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 9, '11/3/17 11:10');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 10, '11/3/17 11:14');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 7, '11/3/17 11:15');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 8, '11/3/17 11:25');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 9, '11/3/17 12:00');
INSERT INTO fact_room_log (room_id, room_status_id, time_sk) VALUES (3, 10, '11/3/17 12:10');
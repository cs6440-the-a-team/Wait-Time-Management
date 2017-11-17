-- Create relevant tables

CREATE TABLE dim_room_type (
    room_type_id int PRIMARY KEY AUTO_INCREMENT,
    room_type varchar(75),

	UNIQUE KEY (room_type) /* Unique name for room type */
);

CREATE TABLE dim_room (
	room_id int PRIMARY KEY AUTO_INCREMENT,
	room_type_id int,
	room_name varchar(75),

	room_status_id int, /* Make it easier to track this */
	last_room_log_id int, /* And this, too */

	active BOOLEAN DEFAULT TRUE,

	UNIQUE KEY (room_name), /* Don't allow rooms with the same name */
	KEY (room_type_id),
	KEY (active)
);

CREATE TABLE dim_room_status (
	room_status_id int PRIMARY KEY AUTO_INCREMENT,
	room_status varchar(75),
	room_type_id int,
	expected_duration int,
	average_duration int,

	UNIQUE KEY (room_status, room_type_id), /* Don't allow room statuses with the same name and type */
	KEY (room_type_id)
);

CREATE TABLE fact_room_log (
	id INT PRIMARY KEY AUTO_INCREMENT,
	room_id int,
	room_status_id int,
	time_sk DATETIME,
	duration int,

	UNIQUE KEY (room_id, time_sk), /* Don't allow a room to be in more than one status at a single point in time */
	KEY (room_status_id),
	KEY (time_sk)
);

CREATE TABLE dim_procedure (
	procedure_id int PRIMARY KEY AUTO_INCREMENT,
	`procedure_name` varchar(75),
	expected_duration int,
	average_duration int,

	UNIQUE KEY (`procedure_name`) /* Procedure names should be unique */
);

CREATE TABLE dim_patient (
	patient_id int PRIMARY KEY AUTO_INCREMENT,
	
	alias varchar(75),
	patient_name varchar(75),
	
	room_id int,
	procedure_id int,
	procedure_status_id int,

	last_patient_log_id int, /* Make this easier to find */

	active BOOLEAN DEFAULT TRUE,

	UNIQUE KEY (alias), /* Aliases should always be unique */
	KEY (active)
);

CREATE TABLE dim_procedure_status (
	procedure_status_id int PRIMARY KEY AUTO_INCREMENT,
	procedure_id int,
	`order` int DEFAULT 1,
	`status` varchar(75),
	expected_duration int,
	average_duration int,

	UNIQUE KEY (`status`, procedure_id), /* Don't want more than one status for the same procedure to have the same name */
	KEY (procedure_id)
);

CREATE TABLE fact_patient_log (
	id int PRIMARY KEY AUTO_INCREMENT,
	patient_id int,
	procedure_status_id int,
	time_sk DATETIME,
	duration int,

	UNIQUE KEY (patient_id, time_sk),
	KEY (procedure_status_id),
	KEY (time_sk)
);

-- Insert Statements - 
INSERT INTO dim_room_type (room_type_id, room_type) VALUES (1, 'Procedure Room');
INSERT INTO dim_room_type (room_type_id, room_type) VALUES (2, 'Recovery Room');
INSERT INTO dim_room_type (room_type_id, room_type) VALUES (3, 'Waiting Area');

INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_duration) VALUES (1, 1, 'Room Available', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_duration) VALUES (2, 1, 'Pre-Procedure Prep', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_duration) VALUES (3, 1, 'Procedure', -1);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_duration) VALUES (4, 1, 'Post-Procedure Prep', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_duration) VALUES (5, 1, 'Ready for Clean-up', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_duration) VALUES (6, 1, 'Clean-up', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_duration) VALUES (7, 2, 'Room Available', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_duration) VALUES (8, 2, 'Recovery', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_duration) VALUES (9, 2, 'Ready for Clean-up', 30);
INSERT INTO dim_room_status (room_status_id, room_type_id, room_status, expected_duration) VALUES (10, 2, 'Clean-up', 30);

INSERT INTO dim_room (room_id, room_type_id, room_status_id, last_room_log_id, room_name) VALUES (1, 1, 6, 12, 'Operations 1');
INSERT INTO dim_room (room_id, room_type_id, room_status_id, last_room_log_id, room_name) VALUES (2, 1, 6, 18, 'XRAY 1');
INSERT INTO dim_room (room_id, room_type_id, room_status_id, last_room_log_id, room_name) VALUES (3, 2, 10, 26, 'Waiting Room 1');
INSERT INTO dim_room (room_id, room_type_id, room_status_id, last_room_log_id, room_name) VALUES (4, 3, 1, NULL, 'Waiting Area');

INSERT INTO dim_procedure (procedure_id, `procedure_name`, expected_duration) VALUES (1221, 'XRAY', 30);
INSERT INTO dim_procedure (procedure_id, `procedure_name`, expected_duration) VALUES (2211, 'Surgery', 30);

INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (12, 1221, 'Patient Check In', 15);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (13, 1221, 'Patient in Waiting Area', 10);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (1, 1221, 'Changed', 30);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (2, 1221, 'Picture', 30);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (3, 1221, 'Development', 30);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (4, 2211, 'Patient Check In', 15);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (5, 2211, 'Patient in Waiting Area', 20);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (6, 2211, 'Patient Prepped for Procedure', 30);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (7, 2211, 'Physician Performs Procedure', 35);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (8, 2211, 'Patient Leaving Procedure', 40);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (9, 2211, 'Patient Entering Recovery', 45);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (10, 2211, 'Patient Ready for Discharge', 50);
INSERT INTO dim_procedure_status (procedure_status_id, procedure_id, `status`, expected_duration) VALUES (11, 2211, 'Patient Transported to Inpatient', 60);

INSERT INTO dim_patient (patient_id, alias, patient_name, procedure_id, procedure_status_id, room_id, last_patient_log_id) VALUES (1, 'Alias 1', 'Name 1', 2211, 10, 5, 19);
INSERT INTO dim_patient (patient_id, alias, patient_name, procedure_id, procedure_status_id, room_id, last_patient_log_id) VALUES (2, 'Alias 2', 'Name 2', 2211, 10, 5, 21);
INSERT INTO dim_patient (patient_id, alias, patient_name, procedure_id, procedure_status_id, room_id, last_patient_log_id) VALUES (3, 'Alias 3', 'Name 3', 1221, 3, 5, 18);
INSERT INTO dim_patient (patient_id, alias, patient_name, procedure_id, procedure_status_id, room_id, last_patient_log_id) VALUES (4, 'Alias 4', 'Name 4', 2211, 6, 1, 10);
INSERT INTO dim_patient (patient_id, alias, patient_name, procedure_id, procedure_status_id, room_id, last_patient_log_id) VALUES (5, 'Alias 5', 'Name 5', 1221, 12, 4, 22);

INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (1, 1, 4, '2017-11-03 08:00:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (2, 2, 4,	'2017-11-03 08:15:00', 10);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (3, 1, 5,	'2017-11-03 08:15:00', 20);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (4, 3, 12, '2017-11-03 08:45:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (5, 1, 6,	'2017-11-03 08:35:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (6, 2, 5,	'2017-11-03 08:30:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (7, 4, 5,	'2017-11-03 09:00:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (8, 3, 13, '2017-11-03 09:00:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (9, 1, 7,	'2017-11-03 09:05:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (10, 4, 6,	'2017-11-03 11:15:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (11, 3, 1,	'2017-11-03 09:10:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (12, 1, 8,	'2017-11-03 09:40:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (13, 1, 9,	'2017-11-03 10:25:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (14, 2, 6,	'2017-11-03 10:30:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (15, 2, 7,	'2017-11-03 11:00:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (16, 2, 8, '2017-11-03 11:35:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (17, 3, 2, '2017-11-03 09:40:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (18, 3, 3, '2017-11-03 10:10:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (19, 1, 10, '2017-11-03 11:15:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (20, 2, 9, '2017-11-03 11:15:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (21, 2, 10, '2017-11-03 12:00:00', 15);
INSERT INTO fact_patient_log (id, patient_id, procedure_status_id, time_sk, duration) VALUES (22, 5, 12, '2017-11-03 12:00:00', 15);

INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (1, 1, 1, '2017-11-03 08:00:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (2, 1, 2, '2017-11-03 08:35:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (3, 1, 3, '2017-11-03 09:05:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (4, 1, 4, '2017-11-03 09:40:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (5, 1, 5, '2017-11-03 09:50:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (6, 1, 6, '2017-11-03 10:00:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (7, 1, 1, '2017-11-03 10:10:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (8, 1, 2, '2017-11-03 10:30:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (9, 1, 3, '2017-11-03 11:00:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (10, 1, 4, '2017-11-03 11:35:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (11, 1, 5, '2017-11-03 11:40:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (12, 1, 6, '2017-11-03 11:50:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (13, 2, 1, '2017-11-03 08:00:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (14, 2, 2, '2017-11-03 09:10:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (15, 2, 3, '2017-11-03 09:40:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (16, 2, 4, '2017-11-03 10:10:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (17, 2, 5, '2017-11-03 10:40:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (18, 2, 6, '2017-11-03 10:50:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (19, 3, 7, '2017-11-03 08:00:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (20, 3, 8, '2017-11-03 10:25:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (21, 3, 9, '2017-11-03 11:10:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (22, 3, 10, '2017-11-03 11:14:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (23, 3, 7, '2017-11-03 11:15:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (24, 3, 9, '2017-11-03 12:00:00', 15);
INSERT INTO fact_room_log (id, room_id, room_status_id, time_sk, duration) VALUES (25, 3, 10, '2017-11-03 12:10:00', 15);
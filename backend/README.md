## Backend

### Tech Stack
* Jetty 9.4.7
* JDK 1.8
* Gradle 3.5

### Clean and Build war
``` unix
./gradlew clean build
```
Build File location: ./build/libs/WaitTimeManagement.war

### Clean, Build and Run for local testing
``` unix
./gradlew clean jettyRun
```

### Resource API doc
Each resource field matches each database column exactly. Consult Database documentation for further detail.

| Resource  			| Description 		| 	Table 				|
|--------------------|-------------------|-----------------------|
| patient   			| a patient   		| dim_patient			|
| room      			| a room      		| dim_room				|
| room_type 			| a room type 		| dim_room_type			|
| room_type_status 	| a room type status	| dim_room_status		|
| procedure 			| a procedure 		| dim_procedure			|
| procedure_status 	| a procedure status	| dim_procedure_status	|


| Endpoint               	| Method | Action                    |
|----------------------------|--------|---------------------------|
| /admin/{resource}      	| POST   | create {resource}         |
| /admin/{resource}/{id} 	| GET    | retrieve {resource}       |
| /admin/{resource}/{id} 	| PUT    | update {resource}         |
| /admin/{resource}/{id} 	| DELETE | delete {resource}         |
| /admin/{resource}/{id} 	| HEAD   | contains {resource}       |
| /admin/{resource}      	| GET    | list all {resource}       |
| /waitingroom           	| GET    | list waitingroom patients |

Patient

``` javascript
{
  "alias": "Alias 1",
  "expected_duration": 50,
  "last_patient_log_id": 19,
  "patient_id": 1,
  "patient_name": "Name 1",
  "procedure_id": 2211,
  "procedure_status_id": 10,
  "room_id": 5,
  "start_time": "2017-11-03T11:15:00Z"
}
```

Room

``` javascript
{
  "id": 1,
  "expected_duration": 60,
  "name": "B32",
  "room_type_id": 1,
  "start_time": "2017-11-02T01:03:09+00:00",
  "room_status_id": 1
}
```

Room Type

```javascript
{
  "room_type_id": 1,
  "name": "Operating Room",
}
```

Room Type Status

```javascript
{
  "average_duration": 21.0,
  "expected_duration": 30,
  "room_status": "Room Available",
  "room_status_id": 1,
  "room_status_order": 1,
  "room_type_id": 1
}
```

Procedure

```javascript
{
  "procedure_id": 1221,
  "procedure_name": "XRAY"
}
```

Procedure Status

```javascript
{
  "average_duration": 70.0,
  "expected_duration": 30,
  "procedure_id": 1221,
  "procedure_status": "Changed",
  "procedure_status_id": 1,
  "procedure_status_order": 1
}
```

Waitingroom - GET - /waitingroom

```javascript
{
  "patients": [
    {
      "location": "H1",
      "patient_id": "B32",
      "start_time": "2017-11-02T01:03:09+00:00",
      "status": "In Procedure"
    },
    {
      "location": "ICU",
      "patient_id": "I55",
      "start_time": "2017-11-02T12:00:09+00:00",
      "status": "Recovery"
    },
    {
      "location": "R32",
      "patient_id": "D42",
      "start_time": "2017-11-02T01:25:09+00:00",
      "status": "In Procedure"
    },
    {
      "location": "O1",
      "patient_id": "K71",
      "start_time": "2017-11-02T01:40:09+00:00",
      "status": "In Triage"
    },
    {
      "location": "T1",
      "patient_id": "P12",
      "start_time": "2017-11-02T03:00:09+00:00",
      "status": "In Procedure"
    }
  ]
}
```

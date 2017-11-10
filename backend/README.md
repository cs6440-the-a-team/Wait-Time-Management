## Backend

### Tech Stack
Jetty 9.4.7
JDK 1.8
Gradle 3.5

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
| Resource  | Description |
|-----------|-------------|
| patient   | a patient   |
| room      | a room      |
| room_type | a room type |
| room_type_status | a room type status |
| procedure | a procedure |
| procedure_status | a procedure status |


| Endpoint               | Method | Action                    |
|------------------------|--------|---------------------------|
| /admin/{resource}      | POST   | create {resource}         |
| /admin/{resource}/{id} | GET    | retrieve {resource}       |
| /admin/{resource}/{id} | PUT    | update {resource}         |
| /admin/{resource}/{id} | DELETE | delete {resource}         |
| /admin/{resource}/{id} | HEAD   | contains {resource}       |
| /admin/{resource}      | GET    | list {resource}           |
| /waitingroom           | GET    | list waitingroom patients |

### Example Payloads
Patient

``` javascript
{
  "end_time": "",
  "expected_duration": 60,
  "id": "1",
  "location_id": "B32",
  "name": "John",
  "procedure": "surgery",
  "start_time": "2017-11-02T01:03:09+00:00",
  "procedure_status_id": 1
}
```

Room

``` javascript
{
  "end_time": "",
  "expected_duration": 60,
  "id": "1",
  "name": "B32",
  "room_type": "post-op",
  "start_time": "2017-11-02T01:03:09+00:00",
  "room_status_id": 1
}
```

Room Type

```javascript
{
  "id": "OR",
  "name": "Operating Room",
  "room_statuses": [1]
}
```

Room Type Status

```javascript
{
  "id": 1,
  "name": "Vacant",
  "room_type_id": "OR",
  "expected_duration": 10,
  "average_duration": 8
}
```

Procedure

```javascript
{
  "id": "surgery",
  "name": "Surgery",
  "statuses": [1]
}
```

Procedure Status

```javascript
{
  "id": 1,
  "name": "Pre-op",
  "procedure_id": "surgery",
  "order": 1,
  "expected_duration": 10,
  "average_duration": 12
}
```

Waitingroom - GET - /waitingroom

```javascript
{
  "patients": [
    {
      "end_time": "2017-11-02T04:03:09+00:00",
      "expected_duration": 60,
      "location": "H1",
      "patient_id": "B32",
      "start_time": "2017-11-02T01:03:09+00:00",
      "status": "In Procedure"
    },
    {
      "end_time": "2017-11-02T01:11:09+00:00",
      "expected_duration": 30,
      "location": "ICU",
      "patient_id": "I55",
      "start_time": "2017-11-02T12:00:09+00:00",
      "status": "Recovery"
    },
    {
      "end_time": "2017-11-02T01:55:09+00:00",
      "expected_duration": 30,
      "location": "R32",
      "patient_id": "D42",
      "start_time": "2017-11-02T01:25:09+00:00",
      "status": "In Procedure"
    },
    {
      "end_time": "2017-11-02T01:53:09+00:00",
      "expected_duration": 45,
      "location": "O1",
      "patient_id": "K71",
      "start_time": "2017-11-02T01:40:09+00:00",
      "status": "In Triage"
    },
    {
      "end_time": "2017-11-02T03:47:09+00:00",
      "expected_duration": 120,
      "location": "T1",
      "patient_id": "P12",
      "start_time": "2017-11-02T03:00:09+00:00",
      "status": "In Procedure"
    }
  ]
}
```

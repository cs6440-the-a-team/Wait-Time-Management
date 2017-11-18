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
| /admin/{resource}/search	| POST   | search {resource}         |
| /waitingroom           	| GET    | list waitingroom patients |

### Search Payload Examples
POST - /admin/patient/search

``` javascript
{
    "oredCriteria": [
	    	{
	    		"criteria": [
	    			{
	    				"condition": "Alias =",
	    				"value": "Alias 1",
	    				"singleValue": true
	    			}
	    		]
	    		
	    	}
    ]
}
```

POST - /admin/room/search

``` javascript
{
    "oredCriteria": [
	    	{
	    		"criteria": [
	    			{
	    				"condition": "room_status_id <=",
	    				"value": 6,
	    				"singleValue": true
	    			},
					{
	    				"condition": "room_id between",
	    				"value": 2,
	    				"secondValue": 4,
	    				"betweenValue": true
	    			},
	    			{
	    				"condition": "active =",
	    				"value": true,
	    				"singleValue": true
	    			}
	    		]
	    		
	    	}
    ]
}
```
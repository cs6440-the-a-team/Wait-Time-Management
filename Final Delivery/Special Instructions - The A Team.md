Wait Time Management
====================

> The A Team

## Special Instructions

### Application Setup

1. Clone the repository: [https://github.gatech.edu/gt-hit-fall2017/Wait-Time-Management](https://github.gatech.edu/gt-hit-fall2017/Wait-Time-Management)

2. Navigate into the project repository: `cd ./Wait-Time-Management` 

3. Run the command: `docker-compose up`

### Project Endpoints

1. Public View --- [http://localhost](http://localhost)

2. Admin/Staff View --- [http://localhost/admin](http://localhost/admin)

### Available credentials for admin endpoints:

| User      | Password      |
| --------- | ------------- |
| admin     | adminpass     |
| staffplus | staffpluspass |
| staff	    | staffpass     |


### Configuration Options

If you need to change the root path of the application, this can be configured by changing the frontend/config.js file’s root_path property to whichever root path is needed. One important note is to make sure that you do not include a trailing slash in the root path.

> Good example: /WaitTimeManagement

> Bad example: /WaitTimeManagement/

Once you updated that file, you'll need to rebuild the frontend container image by doing the following in the terminal:
```bash
cd ./frontend
npm run build
cd ../
docker-compose up -d --build --force-recreate --no-deps frontend
```
Now the application should be available at the designated root path.

### Using the Application

#### Public View

The public view simply shows limited, anonymized information about the status of patients within the Wait Time Management system. It is meant to be accessible to patients and their family members, and it shows a patient id, the patient’s current status, how long they’ve been in that status, and where the patient is.  There is no identifying information, unless the viewer has the patient id of the patient, which is generated randomly when checking in, and given to the patient.

This view is updated every minute.

#### Staff View

The staff view allows people on the staff view patient and room statuses, but it does not allow the staff to edit anything.  They can see the relevant patient information and whether the patient has been in their current status for longer than the expected amount of time.  They can also see the room statuses, and whether they’ve been in that status for longer than expected. The table row turns red when this happens.

#### Staff-Plus / Admin View

This view includes everything in the staff view, but it allows the user to update statuses and configure the available rooms, room types, room statuses, procedures, and procedure statuses. This is also where patients are added into the system when they check in.  The system comes pre-configured with a few examples for each resource, with the exception of patient data.  Adding and updating the resources is fairly obvious and straightforward.

##### Adding a Patient

Click on the "Add" button on the top of the patients table.  Fill in the provided information according to their appointment details, and click “Save”.  When the patient information is saved to the server, the application will show a patient card with the random patient ID. This card can be printed off, or the ID can be written down and given to the patient. Using the ID, they and their family can see their status on the public view, which can be displayed in the waiting room, or the URL can be given to the patient when checking in.

When the patient is done and they no longer need to be displayed on the public or staff views, they can be marked as inactive by clicking "Edit" on the patient’s row and clicking the “Done” button.

##### Managing Resources

The system uses five primary resources: rooms, room types, room statuses, procedures, and procedure statuses.  These resources are managed by clicking on the Settings gear in the navigation menu of the application. The processes of adding, updating, and removing these resources is very straightforward and follows a consistent pattern.  

* Each set of resources is listed on their own page of the application. 

* Add a new resource by clicking the "Add" button at the top of the table. 

* Edit a resource by clicking on the "Edit" button on the table row for each resource.

* Remove a resource by clicking the "Edit" button, and then clicking on the “Remove” button.

    * Removing a resource doesn’t actually delete the resource permanently, instead it marks the resource as inactive and it no longer shows up in the public or staff views.

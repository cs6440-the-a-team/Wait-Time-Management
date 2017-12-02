## ![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_0.png "Header") 

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_1.jpg "Title")

WAIT TIME MANAGEMENT

Emory Interventional Radiology Clinic & Georgia Tech OMSCS Health Informatics

**─**
A mobile system whereby patients and families can see what is occurring in anticipation and during procedures.

The A Team

Georgia Tech IHI 6440 

Fall 2017

# Table of Contents

[[TOC]]

# Introduction

While lengthy wait times may be unavoidable due to unpredictability in complex clinical workflows, lack of communication regarding wait time worsen anxiety for patients awaiting procedures.  This negatively impacts patient satisfaction scores, which in-turn reduces reimbursement rates and hospital revenue.  Providers and clinical staff are often aware of when room turnover occurs and which patient will be roomed next, yet this information is often not readily available in the waiting area as it contains protected health information (PHI).  

The Wait Time Management application serves as a mobile system whereby patients and families can see the patient flow through each step of the clinical workflow (e.g. checked-in, in procedure, in recovery, ready for discharge).  This application contains two interfaces: a public display containing encrypted data preventing PHI from being shared, and a staff-facing interface which facilitates the management of patient flow through each step of the interventional radiology clinical workflow.  Upon check-in, patients will be given a unique alias by which they can reference their status on the public display.  The public display will be shared on the waiting area monitor and should be accessible via any web browser.  The staff interface allows for rapid assessment of which patients were waiting for longer than anticipated and may require additional attention.  

# Goals

1. Reduce patient anxiety due to unexpected wait time. 

2. Improve overall patient satisfaction, which increases hospital revenue through increased reimbursement rates and referrals.  

3. Improve efficiency in clinical workflow by enabling staff to rapidly assess which patients have been waiting longer than anticipated, and may need additional status updates.  

4. Greater transparency within the system.

# Application Users

1. Patient 

The patient is the person who is coming into the interventional radiology clinic and having a procedure done. 

2. Patient Family Members

A patient may be accompanied by family members. These family members may be present to offer support to the patient before and after the procedure.  With the patient’s permission, family members will be able to receive updates on the patient’s status. 

3. Hospital Staff

The radiology department receives patients admitted into other departments within the hospital. It is useful for the radiology department to allow the other departments to gain more transparency into where their patients are at any given time.  This allows for timely and efficient coordination of patient transport back to the inpatient ward. 

4. Department Staff

The radiology department has their own internal staff that will need to have write/edit access into the system to update patient and room statuses to accurately depict the patient flow within the radiology department. 

5. Department Administrator

The radiology department administrator is responsible for making sure that the overall application is set-up and running smoothly.

# Application Features

1. Patient Personal Card

When a patient is admitted to the radiology clinic they are given their own uniquely generated alias, called a Patient Procedure ID. This alias will be displayed on the public displays and allows a patient and family members to keep track of their wait time and status in the clinic.

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_2.png "Patient Personal Card")

2. Patient Status Public View 

This public status view shows each of the patients represented by a uniquely generated alias  that are currently within the radiology clinic receiving procedures and their current status, current time in status and relative location. 

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_3.png "Patient Status Public View")

3. Hospital Staff Patient View

Hospital staff may see a more detailed view of what is going on in the Radiology clinic. This view is read only, but let’s them see their patients status and how crowded the radiology clinic might be. Rows marked in red is for when the actual time exceeds the expected time for a given step in the clinical workflow. This informs the staff that there is a delay for that particular patient and additional follow-ups may be needed.  

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_4.png "Hospital Staff Patient View")

6. Hospital Staff Room View

Hospital staff may see a more detailed view of what is going on in the Radiology clinic. This view is read only, but let’s them see the radiology room status. Rows marked in red is for when the actual time has gone over the expected time. This let’s them know that there is a hold up on some level and to seek assistance as necessary.

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_5.png "Hospital Staff Room View")

7. Department Staff Patient View

Department staff may see a more detailed view of patient flow and room statuses in the Radiology clinic. The department staff may make edits to the information listed here. Rows marked in red is for when the actual time exceeds the expected time. This allows for a rapid assessment of which patients have been waiting longer than anticipated and may need additional follow-ups.

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_6.png "Department Staff Patient View")

8. Department Staff Room View

Department staff may see a more detailed view of what is going on in the Radiology clinic. The department staff may make edits to the information listed here. Rows marked in red is for when the actual time has gone over the expected time. This let’s them know that there is a hold up on some level and to take action accordingly.

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_7.png)

9. Department Administrator Room Settings

Department Administrator may edit the core information that is able to be seen on all screens. They may add statuses, in-activate statuses that are no longer valid, etc. 

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_8.png)

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_9.png)

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_10.png)

10. Department Administrator Procedure Settings

Department Administrator may edit the core information that is visible on all screens. They may add statuses, deactivate statuses that are no longer valid, etc. 

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_11.png)

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_12.png)	

# Technical Specifications

The Wait Time Management system is a web application that can be used with any major web browser, and was specifically built to support Internet Explorer 11. The user facing application is built using the React.js library, while the server side technology uses Java and MySQL, all of which is packaged using Docker containers and can be deployed using docker-compose.

## Architecture

There are 2 main components. The left devices represent access to the patient facing screens. The bottom represents the healthcare professional’s access from the various physical locations in the clinic. The right contains our wait time management system, composed of a java backend with a jetty server and a mysql database. The Java backend will assign the patient information to a random id to protect their data and maintain hipaa compliance. The patient view and staff view are real time javascript applications that ensure the displayed information is always the most up-to-date.

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_13.png)

The database schema is divided into a logical and physical schema design. The logical schema is presented in the form of high-level table design. They primarily capture the different entity types described in our problem space. These entities include procedures, patients, rooms, and statuses.  Additionally, tracking tables will record patient events (timestamped instances of patients moving through the patient-flow) and room events (rooms changing status - i.e. becoming occupied, vacant, cleaning, etc).  Entity dimension tables associated with rooms include room, room_type, and room_statuses. These tables provide schemas that maintain relationships across tables and parameterize room types and statuses. The rooms table serves an anchor for the web of room relationships. Similarly, the procedure and procedure status dimension tables describe the eligible procedure and real-time procedure states. The patient dimension table anchors patients germane to the system along with relationships as a function of aforementioned table dimensions (ids of the rooms patients are in, ids of the procedures patients are receiving, etc). Finally, fact tables (room_log and patient_log) describe timestamped instances of room/patient events or state changes. The illustration below captures all of the specific table schemas.

![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_14.png)

## Installation

The application is fully self-contained within a Docker container for installation and consists of the following tech stack.

* Jetty v9.4.7

* JDK v1.8

* Gradle v3.5

* Docker v17.09.0-ce

* NodeJS v9.0.0 

* MySQL v8.0.3

To run the application, just install the docker container on your favorite server.

1. Download public repo
Download: https://github.com/cs6440-the-a-team/Wait-Time-Management/archive/master.zip
Or check-out: 
git clone https://github.com/cs6440-the-a-team/Wait-Time-Management.git

2. Install Docker
Instructions for your operating system can be found here: [https://docs.docker.com/engine/installation/](https://docs.docker.com/engine/installation/)

3. Build and run docker containers
This will launch 3 docker containers, one for the database, one for the frontend, and one for the backend. The front end will serve on port 80 for http and 443 for https SSL. You may test successful deployment by navigating in your web browser to the hostname where this has been installed. If testing from the same server simply open http://localhost in your browser.
docker-compose up

## Repository

Public GitHub

[https://github.com/cs6440-the-a-team/Wait-Time-Management/](https://github.com/cs6440-the-a-team/Wait-Time-Management/)

Private Georgia Tech GitHub [https://github.gatech.edu/gt-hit-fall2017/Wait-Time-Management](https://github.gatech.edu/gt-hit-fall2017/Wait-Time-Management)

# Future Development

1. Cerner & Airflow Integration

Cerner and Airflow are two internal systems used by the radiology department to track information and status of patients within the hospital. While we were not able to gain adequate access for development with these systems, we have provided the ability to easily integrate with these in future development cycles. Integration with these systems would allow for automatic transition of statuses in the wait time management application and automatic injection of new and expired patient information. An adjustment to the system architecture for Cerner and Airflow integration is shown below.
![image alt text](Manual%20-%20The%20A%20Team%20-%20Images/image_15.png)

2. Advanced Login Integrations

Currently the application is not compliant from a security standpoint and requirements will need to be gathered and then implemented to bring this up to spec. 

3. Patient and Family Engagement 

Currently the application prompts users to contact the front desk if questions arise. Future iteration could tailor the application to specific departments and include a departmental contact number. To protect patient privacy, a password may be generated at time of patient check-in so that family members can easily access patient status while waiting. 


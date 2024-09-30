# Inventory Management System

This is a study project focused on inventory management, developed with the goal of exploring and practicing the use of AWS services. Most of the data is mocked, as the main purpose of the project is to learn and configure deployment and cloud infrastructure services.

## Technologies

- **Express.js** and **TypeScript** to build the API.
- **Prisma ORM** for database management.
- **PostgreSQL** as the database.
- **Next.js** as the React development framework.
- **MUI** for the data table interface.
- **TailwindCSS** for responsive design and styling.
- **Redux** for global state management.
- **AWS EC2** For deploying the backend application.
- **AWS RDS** For hosting the PostgreSQL database.
- **AWS API** Gateway To manage and scale the system APIs.
- **AWS Amplify** For deploying the frontend (Next.js).
- **AWS S3** For file storage.

## AWS Architecture

![aws-arch](https://github.com/user-attachments/assets/29b68d3e-1357-4187-829d-9d98627c57e8)

### 1. Frontend
- The frontend of the application is hosted on **AWS Amplify**, responsible for deploying and managing the web app.
- Static files, such as images and documents, are stored in **Amazon S3**.

### 2. VPC (Virtual Private Cloud)
- The infrastructure is contained within a **VPC**, ensuring isolation and control over network traffic.
- **Public subnet**: Contains the **EC2** instance hosting the backend. It is associated with a **public route table**, allowing access to the internet.
- **Private subnet**: Contains the **Amazon RDS** database, isolated from the internet and only accessible via the EC2 instance in the public subnet. It uses a **private route table**.

### 3. Backend
- The backend runs on an **EC2** instance located in the public subnet, protected by a **Security Group** configured to control inbound and outbound traffic.
- The **EC2** instance communicates with the **RDS** database in the private subnet.

### 4. Database
- The relational database **Amazon RDS** is hosted in a private subnet, ensuring it is not exposed to the internet.
- Access to **RDS** is only permitted through the **EC2** instance, which is also secured by a **Security Group**.

## Directory Structure
``/server``: Backend code (Express.js, Prisma, Typescript). <br/>
``/client``: Frontend code (Next.js, Redux, Tailwind, MUI).

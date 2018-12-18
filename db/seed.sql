DROP DATABASE IF EXISTS brain_storming;
CREATE DATABASE brain_storming;
\c brain_storming

--  tables

CREATE TABLE departments(
  id serial primary key,
  name varchar
);

CREATE TABLE projects(
  id serial primary key,
  name varchar,
   img_url varchar,
  department_id int not null,
  foreign key(department_id) references departments
);


CREATE TABLE ideas(
  id serial primary key,
  idea varchar,
project_id int not null,
  foreign key(project_id) references projects);




INSERT INTO departments
 (name)
 VALUES 
    ('HR department'),
    ('IT department'),
    ('Marketing department'),
    ('finance department');
   

INSERT INTO projects
(name, img_url, department_id)
VALUES
('hiring and recruiting process', 'https://coda.newjobs.com/api/imagesproxy/ms/niche/images/articles/Mack/We%20Are%20Hiring%20-%20Blue.jpg', 1),
('training programs', 'http://tortoiseandharesports.com/wp-content/uploads/2013/03/Training-Program-banner.jpg', 1),
('create a new app for the company','https://betanews.com/wp-content/uploads/2017/11/android-mobile-app-icons.jpg' , 2),
('advertise for the new product', 'https://vesseldm.com/application/files/thumbnails/large/3515/0783/3599/Part_5_-_SMM_Ads.jpg', 3),
('manage the budget for an event', 'https://www.practicalmoneyskills.com/assets/images/non-card/creating_a_budget.jpg', 4);

--   project_id int not null,
--   foreign key(project_id) references projects


INSERT INTO ideas
(idea, project_id)
VALUES
('phone interview', 1),
('online test', 1),
('assessment centre', 1),
('face to face interview', 1),
('two days holiday', 2),
('a day off', 2),
('reward staff', 2),
('Offer Better Options for Health & Wellness' , 2),
('dale carnegie training', 3),
('toastmasters training', 3),
('check the products', 4),
('loyalty points', 4),
('buy products', 4),
('advertise', 4),
('know more about the company', 4),
('facebook', 5),
('twitter', 5),
('snapchat', 5),
('instagram', 5),
('youtube', 5),
('newspaper', 5),
('television Advertising', 5),
('attandance ', 6),
('dinner', 6),
('venue', 6),
('decor', 6),
('entertainment', 6);
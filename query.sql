+--------------------------------------+------------------+
| id                                   | name             |
+--------------------------------------+------------------+
| 002e289c-9ca0-11ec-8c3c-48478ce7e2b6 | PT. Multipolar   |
| 05f613d4-9ca0-11ec-8c3c-48478ce7e2b6 | PT. OPMC         |
| f0496040-9c9f-11ec-8c3c-48478ce7e2b6 | PT. Telkom Akses |
+--------------------------------------+------------------+

+--------------------------------------+---------+--------------------------------------+-----------------+--------+----------+
| id                                   | role_id | vendor_id                            | name            | gender | job_desc |
+--------------------------------------+---------+--------------------------------------+-----------------+--------+----------+
| 12092882-9745-4a10-8e73-6e4a7bf1328f |       2 | 002e289c-9ca0-11ec-8c3c-48478ce7e2b6 | Aulian Akbar    | NULL   | NULL     |
| 3c3b80cc-0b31-46f0-8e0b-75bd4fab6f8f |       4 | 002e289c-9ca0-11ec-8c3c-48478ce7e2b6 | Aulian Security | NULL   | NULL     |
| 78c20e0e-f2ce-47f0-b1cd-c87c6c855f87 |       3 | 002e289c-9ca0-11ec-8c3c-48478ce7e2b6 | Rofi Sudiyono   | NULL   | NULL     |
| 8185b9ad-6e1a-4b29-9636-1ae29d41964b |       2 | 002e289c-9ca0-11ec-8c3c-48478ce7e2b6 | joko sutoyo     | NULL   | NULL     |
| 890dab8d-ca1e-4fd5-a876-cf9768cf7a3d |       2 | 002e289c-9ca0-11ec-8c3c-48478ce7e2b6 | widodo salmon   | NULL   | NULL     |
| 8e966284-435b-4ea5-af5e-96ffd3e0b946 |       3 | 002e289c-9ca0-11ec-8c3c-48478ce7e2b6 | Rofi Security   | NULL   | NULL     |
| e24e6f42-c259-4830-ae80-ceb8097b6d06 |       3 | 002e289c-9ca0-11ec-8c3c-48478ce7e2b6 | bambang suseno  | NULL   | NULL     |
| f7d891aa-0369-4347-bdc8-0a4a515f6857 |       2 | 002e289c-9ca0-11ec-8c3c-48478ce7e2b6 | handoko suryo   | NULL   | NULL     |
+--------------------------------------+---------+--------------------------------------+-----------------+--------+----------+


update teknisi_data set vendor_id = '05f613d4-9ca0-11ec-8c3c-48478ce7e2b6' where id = 'f7d891aa-0369-4347-bdc8-0a4a515f6857';
update teknisi_data set vendor_id = 'f0496040-9c9f-11ec-8c3c-48478ce7e2b6' where id = '8185b9ad-6e1a-4b29-9636-1ae29d41964b';

update teknisi_data set vendor_id = '05f613d4-9ca0-11ec-8c3c-48478ce7e2b6' where id = 'e24e6f42-c259-4830-ae80-ceb8097b6d06';
update teknisi_data set vendor_id = 'f0496040-9c9f-11ec-8c3c-48478ce7e2b6' where id = '8e966284-435b-4ea5-af5e-96ffd3e0b946';

+----+---------+
| id | name    |
+----+---------+
|  1 | STO KBL |
|  2 | STO LMG |
|  3 | STO MGO |
|  4 | STO BLP |
+----+---------+

insert into lantai (name, location_id) values ('Lt. 1', '1')
insert into lantai (name, location_id) values ('Lt. 2', '1')
insert into lantai (name, location_id) values ('Lt. 1', '2')
insert into lantai (name, location_id) values ('Lt. 2', '2')
insert into lantai (name, location_id) values ('Lt. 1', '3')
insert into lantai (name, location_id) values ('Lt. 2', '3')
insert into lantai (name, location_id) values ('Lt. 1', '4')
insert into lantai (name, location_id) values ('Lt. 2', '4')

update lantai set name = 'Lt. 1', location_id = '2' where id = 3;
update lantai set name = 'Lt. 2', location_id = '2' where id = 4;

update lantai set name = 'Lt. 1', location_id = '3' where id = 5;
update lantai set name = 'Lt. 2', location_id = '3' where id = 6;

update lantai set name = 'Lt. 1', location_id = '4' where id = 7;
update lantai set name = 'Lt. 2', location_id = '4' where id = 8;

delete lantai where id > 8;

+----+-------+-------------+
| id | name  | location_id |
+----+-------+-------------+
|  1 | Lt. 1 |           1 |
|  2 | Lt. 2 |           1 |
|  3 | Lt. 3 |           1 |
|  4 | Lt. 4 |           1 |
|  5 | Lt. 5 |           1 |
|  6 | Lt. 1 |           2 |
|  7 | Lt. 2 |           2 |
|  8 | Lt. 3 |           2 |
|  9 | Lt. 4 |           2 |
| 10 | Lt. 5 |           2 |
| 11 | Lt. 1 |           3 |
| 12 | Lt. 2 |           3 |
| 13 | Lt. 3 |           3 |
| 14 | Lt. 4 |           3 |
| 15 | Lt. 5 |           3 |
| 16 | Lt. 1 |           4 |
| 17 | Lt. 2 |           4 |
| 18 | Lt. 3 |           4 |
| 19 | Lt. 4 |           4 |
| 20 | Lt. 5 |           4 |
+----+-------+-------------+

insert into ruangan (name,location_id, lantai_id) values ('R. KBL1', '1', '1')
insert into ruangan (name,location_id, lantai_id) values ('R. KBL2', '1', '2')

insert into ruangan (name,location_id, lantai_id) values ('R. LMG1', '2', '1')
insert into ruangan (name,location_id, lantai_id) values ('R. LMG2', '2', '2')

insert into ruangan (name,location_id, lantai_id) values ('R. MGO1', '3', '1')
insert into ruangan (name,location_id, lantai_id) values ('R. MGO2', '3', '2')

insert into ruangan (name,location_id, lantai_id) values ('R. BLP1', '4', '1')
insert into ruangan (name,location_id, lantai_id) values ('R. BLP2', '4', '2')

+----+-------+-------------+
| id | name  | location_id |
+----+-------+-------------+
|  1 | Lt. 1 |           1 |
|  2 | Lt. 2 |           1 |
|  3 | Lt. 1 |           2 |
|  4 | Lt. 2 |           2 |
|  5 | Lt. 1 |           3 |
|  6 | Lt. 2 |           3 |
|  7 | Lt. 1 |           4 |
|  8 | Lt. 2 |           4 |
+----+-------+-------------+
+----+---------+
| id | name    |
+----+---------+
|  1 | STO KBL |
|  2 | STO LMG |
|  3 | STO MGO |
|  4 | STO BLP |
+----+---------+

update ruangan set name = 'R. KBL-A', location_id = '1', lantai_id = '1' where id = 1;
update ruangan set name = 'R. KBL-B', location_id = '1', lantai_id = '2' where id = 2;

update ruangan set name = 'R. LMG-A', location_id = '2', lantai_id = '3' where id = 3;
update ruangan set name = 'R. LMG-B', location_id = '2', lantai_id = '4' where id = 4;

update ruangan set name = 'R. MGO-A', location_id = '3', lantai_id = '5' where id = 5;
update ruangan set name = 'R. MGO-B', location_id = '3', lantai_id = '6' where id = 6;

update ruangan set name = 'R. BLP-A' where id = 7;
update ruangan set name = 'R. BLP-B' where id = 8;

delete from ruangan where id > 8

+----+--------+-------------+-----------+
| id | name   | location_id | lantai_id |
+----+--------+-------------+-----------+
|  1 | R. OLT |           1 |         1 |
|  2 | R. DBD |           1 |         1 |
|  3 | R. MGM |           1 |         2 |
|  4 | R. MMG |           1 |         2 |
|  5 | R. NGN |           1 |         3 |
|  6 | R. NGA |           1 |         3 |
|  7 | R. OLT |           2 |         1 |
|  8 | R. DBD |           2 |         1 |
|  9 | R. MGM |           2 |         2 |
| 10 | R. MMG |           2 |         2 |
| 11 | R. NGN |           3 |         1 |
| 12 | R. NGA |           3 |         1 |
| 13 | R. OLT |           4 |         1 |
| 14 | R. DBD |           4 |         1 |
| 15 | R. MGM |           4 |         2 |
+----+--------+-------------+-----------+

insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('KBL-KBL-A', '1', '1', '1')
insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('KBL-KBL-B', '1', '2', '2')

insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('LMG-LMG-A', '2', '1', '1')
insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('LMG-LMG-B', '2', '2', '2')

insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('MGO-MGO-A', '3', '1', '1')
insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('MGO-MGO-B', '3', '2', '2')

insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('BLP-BLP-A', '4', '1', '1')
insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('BLP-BLP-B', '4', '2', '2')

+----+---------+
| id | name    |
+----+---------+
|  1 | STO KBL |
|  2 | STO LMG |
|  3 | STO MGO |
|  4 | STO BLP |
+----+---------+
+----+-------+-------------+
| id | name  | location_id |
+----+-------+-------------+
|  1 | Lt. 1 |           1 |
|  2 | Lt. 2 |           1 |
|  3 | Lt. 1 |           2 |
|  4 | Lt. 2 |           2 |
|  5 | Lt. 1 |           3 |
|  6 | Lt. 2 |           3 |
|  7 | Lt. 1 |           4 |
|  8 | Lt. 2 |           4 |
+----+-------+-------------+
+----+----------+-------------+-----------+
| id | name     | location_id | lantai_id |
+----+----------+-------------+-----------+
|  1 | R. KBL-A |           1 |         1 |
|  2 | R. KBL-B |           1 |         2 |
|  3 | R. LMG-A |           2 |         3 |
|  4 | R. LMG-B |           2 |         4 |
|  5 | R. MGO-A |           3 |         5 |
|  6 | R. MGO-B |           3 |         6 |
|  7 | R. BLP-A |           4 |         7 |
|  8 | R. BLP-B |           4 |         8 |
+----+----------+-------------+-----------+

update no_rack set name = 'KBL-A-A1', location_id = '1', lantai_id = '1', ruangan_id = '1' where id = 1;
update no_rack set name = 'KBL-A-A2', location_id = '1', lantai_id = '1', ruangan_id = '1' where id = 2;
update no_rack set name = 'KBL-B-B1', location_id = '1', lantai_id = '2', ruangan_id = '2' where id = 3;
update no_rack set name = 'KBL-B-B2', location_id = '1', lantai_id = '2', ruangan_id = '2' where id = 4;

update no_rack set name = 'LMG-A-A1', location_id = '2', lantai_id = '3', ruangan_id = '3' where id = 5;
update no_rack set name = 'LMG-A-A2', location_id = '2', lantai_id = '3', ruangan_id = '3' where id = 6;
update no_rack set name = 'LMG-B-B1', location_id = '2', lantai_id = '4', ruangan_id = '4' where id = 7;
update no_rack set name = 'LMG-B-B2', location_id = '2', lantai_id = '4', ruangan_id = '4' where id = 8;

update no_rack set name = 'MGO-A-A1', location_id = '3', lantai_id = '5', ruangan_id = '5' where id = 9;
update no_rack set name = 'MGO-A-A2', location_id = '3', lantai_id = '5', ruangan_id = '5' where id = 10;
update no_rack set name = 'MGO-B-B1', location_id = '3', lantai_id = '6', ruangan_id = '6' where id = 11;

insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('MGO-B-B2', '3', '6', '6')
insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('MGO-B-B2', '3', '6', '6')

insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('BLP-A-A1', '4', '7', '7');
insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('BLP-A-A2', '4', '7', '7');
insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('BLP-B-B1', '4', '8', '8');
insert into no_rack (name, location_id, lantai_id, ruangan_id) values ('BLP-B-B2', '4', '8', '8');

+----+---------+-------------+-----------+------------+
| id | name    | location_id | lantai_id | ruangan_id |
+----+---------+-------------+-----------+------------+
|  1 | OLT-A-1 |           2 |         1 |          1 |
|  2 | OLT-A-2 |           2 |         1 |          1 |
|  3 | OLT-A-3 |           2 |         1 |          1 |
|  4 | OLT-A-4 |           2 |         1 |          1 |
|  5 | DBD-A-1 |           1 |         1 |          2 |
|  6 | DBD-A-2 |           1 |         2 |          2 |
|  7 | MGM-A-3 |           1 |         3 |          3 |
|  8 | MGM-A-4 |           1 |         1 |          3 |
|  9 | NGN-A-1 |           3 |         1 |          2 |
| 10 | NGN-A-2 |           3 |         2 |          2 |
| 11 | NGN-A-3 |           3 |         3 |          3 |
+----+---------+-------------+-----------+------------+
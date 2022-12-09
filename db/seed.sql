INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Sales"),
        ("Legal"),
        ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer",50000, 1),
       ("Junior Developer", 20000, 1),
       ("Sales Manager", 50000, 2),
       ("Sales Person", 25000, 2),
       ("Legal Team Lead", 50000, 3),
       ("Lawyer", 30000, 3),
       ("Account Manager", 45000, 4),
       ("Account Assistant", 33000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Apple", 1, NULL),
       ("George", "Best", 2, 1),
       ("Julia", "Ford", 3, NULL),
       ("Henry", "Amber", 4, 3)
       ("Mary", "Skywalker", 5, NULL),
       ("Jerry", "Lopez", 6, 5),
       ("Fernando", "Torres", 7, NULL),
       ("Lily", "Wok", 8, 7);
       
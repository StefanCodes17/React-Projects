INSERT INTO roles(title) 
VALUES 
('admin'),
('blogger');

INSERT INTO permissions(action)
VALUES 
('post'),
('manage-users');

INSERT INTO role_permissions(role_id, permission_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO users(role_id, email, first_name, last_name)
VALUES 
(1, 'sk893q@gmail.com', 'Stefan', 'Kolev')

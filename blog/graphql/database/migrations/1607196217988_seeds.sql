INSERT INTO roles(title) 
VALUES ('admin'), ('blogger');

INSERT INTO permissions(action)
VALUES ('post'), ('manage-users');

INSERT INTO role_permissions(role_id, permission_id)
VALUES (1, 1), (1, 2), (2, 1);

INSERT INTO users(role_id, email, first_name, last_name)
VALUES 
(1, 'sk893q@gmail.com', 'Stefan', 'Kolev');

INSERT INTO blog_categories (label, description)
VALUES
('Javascript', 'Category Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum. '),
('React', 'Category Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum. '),
('Vue', 'Category Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum. '),
('Tech Culture', 'Category Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum. '),
('Tech News', 'Category Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum. '),
('Brain Health', 'Category Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum. '),
('Cloud Services', 'Category Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum. ');

INSERT INTO blog_posts (author_id, title, description, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
(1, 'Can anyone code?', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum.'," ", 'code2.jpg',1, 'Programming', 'React', 'code4.jpg', 'Image' ),
(1, 'Can anyone code?', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum.'," ",'code.jpg', 1, 'Functional Programming', 'ES6', 'code.jpg', 'Image' ),
(1, 'Can anyone code?', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum.'," ",'code2.jpg', 1, 'Functional Programming', 'ES6', 'code.jpg', 'Image' ),
(1, 'Can anyone code?', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis oficia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum.'," ",'code.jpg', 1, 'Functional Programming', 'ES6', 'code.jpg', 'Image' ),
(1, 'Can anyone code?', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum.'," ",'code.jpg', 1, 'Functional Programming', 'ES6', 'code.jpg', 'Image' ),
(1, 'Can anyone code?', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum.'," ",'code4.jpg', 1, 'Functional Programming', 'ES6', 'code.jpg', 'Image' ),
(1, 'Can anyone code?', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum.'," ",'code2.jpg', 1, 'Functional Programming', 'ES6', 'code.jpg', 'Image' ),
(1, 'Can anyone code?', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum.'," ",'code3.jpg', 1, 'Functional Programming', 'ES6', 'code.jpg', 'Image' ),
(1, 'Can anyone code?', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minima nam, nesciunt iste debitis omnis officia aspernatur neque qui magnam, fuga veritatis hic optio. Velit quisquam cum non asperiores voluptatum.'," ",'code3.jpg', 1, 'Functional Programming', 'ES6', 'code.jpg', 'Image' );

INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1, 1, 'Totally brooo!'),
(1, 1, 'Friggin awesome!!');

INSERT INTO blog_post_categories (post_id, category_id)
VALUES
(1, 4),
(1, 5),
(2, 7),
(3, 4), 
(3, 5),
(4, 6),
(5, 4),
(6, 1),
(6, 2),
(7, 4), 
(8, 6),
(9, 2),
(9, 3);
